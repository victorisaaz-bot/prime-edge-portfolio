param (
    [string]$OutDir = (Join-Path (Get-Location) "out"),
    [string]$SiteId = "2c5541e2-825d-4b0b-944d-feb948d77897"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $OutDir)) {
    Write-Error "out directory does not exist at $OutDir. Please run npm run build first."
    exit 1
}

$zipFile = Join-Path $env:TEMP "prime_edge_deploy.zip"
if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
}

Write-Host "1. Building POSIX-normalized ZIP archive with forward slashes..."
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$archive = [System.IO.Compression.ZipFile]::Open($zipFile, [System.IO.Compression.ZipArchiveMode]::Create)
$files = Get-ChildItem -Path $OutDir -Recurse -File

foreach ($file in $files) {
    $relPath = $file.FullName.Substring($OutDir.Length + 1).Replace("\", "/")
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $file.FullName, $relPath) | Out-Null
}
$archive.Dispose()

$zipSizeMb = [math]::Round(((Get-Item $zipFile).Length / 1MB), 2)
Write-Host "Archive created: $zipFile ($zipSizeMb MB)"

# Validate entries
$checkArchive = [System.IO.Compression.ZipFile]::OpenRead($zipFile)
$sampleEntry = $checkArchive.Entries | Where-Object { $_.FullName -like "*chunks*css*" } | Select-Object -First 1
Write-Host "Validated CSS entry: $($sampleEntry.FullName)"
$checkArchive.Dispose()

# Read token safely
$envPath = Join-Path (Get-Location) ".env"
$token = ""
if (Test-Path $envPath) {
    foreach ($line in (Get-Content $envPath)) {
        if ($line -match '^\s*NETLIFY_AUTH_TOKEN\s*=\s*(.*)$') {
            $token = $matches[1].Trim().Trim('"').Trim("'")
        }
    }
}

if (-not $token) {
    Write-Error "NETLIFY_AUTH_TOKEN not found in .env"
    exit 1
}

Write-Host "2. Uploading deployment to Netlify..."
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type"  = "application/zip"
}

$zipBytes = [System.IO.File]::ReadAllBytes($zipFile)
$res = Invoke-RestMethod -Uri "https://api.netlify.com/api/v1/sites/$SiteId/deploys" -Method Post -Headers $headers -Body $zipBytes

Remove-Item $zipFile -Force

Write-Host "Deployment state: $($res.state)"
Write-Host "Deploy ID: $($res.id)"
Write-Host "Deploy URL: $($res.ssl_url)"
Write-Host "Site is live!"

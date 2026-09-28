/**
 * Helper utility to convert video URLs (Google Drive, YouTube, MP4)
 * into direct playable stream URLs for HTML5 <video> elements.
 */

export function getDirectStreamUrl(url?: string): string {
  if (!url) return "";
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match) {
    return `/api/stream/${match[1]}`;
  }
  return url;
}

export function getYouTubePreviewUrl(url: string): string {
  const videoId = url.split("/embed/")[1]?.split("?")[0] || "";
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&modestbranding=1`;
}

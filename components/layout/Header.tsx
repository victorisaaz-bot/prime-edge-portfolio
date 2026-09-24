"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#06101E]/95 backdrop-blur-xl py-3 border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none" onClick={() => setMobileMenuOpen(false)}>
          <div className="relative w-36 sm:w-40 h-9 sm:h-10 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/brand/logo.svg"
              alt="Prime Edge - AI Video Expert"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-[#00D2FF]"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D2FF] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="/contact" variant="cyan" size="sm">
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0B1C2E] border border-white/10 text-white hover:border-[#00D2FF]/40 active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00D2FF]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#071320] border-b border-white/10 px-5 py-6 space-y-5 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col space-y-1.5">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] flex items-center justify-between text-base font-semibold px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#1565D8]/20 text-[#00D2FF] border border-[#00D2FF]/30"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Button
              href="/contact"
              variant="cyan"
              size="lg"
              className="w-full text-center min-h-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="min-h-[44px] flex items-center justify-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-[#00D2FF] transition-colors py-2"
            >
              <span>Direct: {siteConfig.contactEmail}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


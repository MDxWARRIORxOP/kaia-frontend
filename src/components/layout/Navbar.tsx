"use client";

import { useEffect, useState } from "react";

import { navigationItems } from "../../lib/constants";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import Link from "next/link";

const navLinkClassName = (isActive: boolean) =>
  cn(
    "text-sm font-medium transition-colors duration-200 lg:text-[15px] xl:text-base",
    isActive
      ? "font-bold text-darkGreen"
      : "text-textSecondary hover:text-darkGreen",
  );

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-5 sm:pt-7">
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between gap-4 rounded-full bg-white px-5 py-4 shadow-navbar sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={"/images/logo.svg"} alt="KAIA" className="h-8 w-auto" />
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-x-4 lg:flex xl:gap-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={navLinkClassName(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/contact" className="hidden shrink-0 lg:block">
              <Button>Contact Us &rarr;</Button>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-darkGreen transition-colors duration-200 hover:bg-darkGreen/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <div
            id="mobile-nav-menu"
            className={cn(
              "absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl bg-white shadow-navbar transition-all duration-200 lg:hidden",
              isMenuOpen
                ? "pointer-events-auto visible max-h-[min(32rem,calc(100dvh-6rem))] opacity-100"
                : "pointer-events-none invisible max-h-0 opacity-0",
            )}
          >
            <nav className="flex flex-col gap-1 px-5 py-4 sm:px-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={navLinkClassName(false)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-darkGreen/10 px-5 pb-4 pt-3 sm:px-6">
              <Link
                href="/contact-us"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Contact Us &rarr;</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

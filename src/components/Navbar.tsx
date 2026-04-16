"use client";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { navLinks, personal } from "@/data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    setActive(href.slice(1));
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <Container className="h-14 flex items-center justify-between">
        <a
          href="#"
          onClick={() => setActive("")}
          className="font-bold text-gray-900 tracking-tight text-base hover:text-gray-600 transition-colors duration-200"
        >
          {personal.name}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1 animate-fade-up">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 border-t border-gray-100 mt-1 pt-3"
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}

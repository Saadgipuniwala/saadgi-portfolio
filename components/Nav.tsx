"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <nav
        className={`flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-heavy shadow-glass" : "glass"
        }`}
      >
        <a href="#top" className="font-display text-lg font-medium tracking-tight text-ink">
          {profile.name.split(" ")[0]}
          <span className="text-violet-500">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-white/60 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="rounded-full px-4 py-2.5 text-[13px] font-medium text-ink-soft transition-colors hover:bg-white/60 hover:text-ink"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-violet-600 hover:-translate-y-0.5"
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-heavy absolute left-4 right-4 top-[72px] rounded-3xl p-4 shadow-glass-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-white/60 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-white/60 hover:text-ink"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

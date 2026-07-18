"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const LINKS = [
  {
    label: "GitHub",
    handle: "@Saadgipuniwala",
    href: profile.socials.github,
    icon: Github,
    note: "Project source & commit history",
  },
  {
    label: "LinkedIn",
    handle: "Saadgi Puniwala",
    href: profile.socials.linkedin,
    icon: Linkedin,
    note: "Work history & recommendations",
  },
  {
    label: "DSA / LeetCode",
    handle: "50+ solved",
    href: profile.socials.leetcode,
    icon: Code2,
    note: "LeetCode profile — DSA practice, on the way to 300+",
  },
];

export default function SocialLinks() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {LINKS.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass group flex flex-col justify-between rounded-3xl p-6 shadow-glass transition-all duration-400 hover:-translate-y-1 hover:shadow-glass-lg"
          >
            <div className="flex items-center justify-between">
              <l.icon size={20} className="text-violet-600" />
              <ArrowUpRight
                size={15}
                className="text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
              />
            </div>
            <div className="mt-6">
              <p className="font-display text-lg font-medium text-ink">{l.label}</p>
              <p className="mt-0.5 text-sm text-ink-soft">{l.handle}</p>
              <p className="mt-3 text-[13px] text-ink-soft/80">{l.note}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

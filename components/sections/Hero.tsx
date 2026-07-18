"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import FloatingShapesScene from "@/components/FloatingShapesScene";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center"
    >
      <FloatingShapesScene />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 shadow-glass"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          Open to AI/ML Internships
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-ink text-balance sm:text-6xl md:text-7xl"
      >
        Turning ideas into{" "}
        <span className="relative inline-block italic text-violet-500">
          intelligent systems
        </span>{" "}
        .
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-ink-soft md:text-lg"
      >
        {profile.name} — {profile.role}. I work across AI, data science and embedded systems—building machine learning applications, intelligent dashboards and IoT solutions that bridge software with real-world hardware. I enjoy solving practical engineering problems through data, automation and intelligent systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Button variant="primary" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          View Projects <ArrowUpRight size={16} />
        </Button>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" download>
          <Button variant="glass" size="lg">
            <Download size={16} /> Resume
          </Button>
        </a>
        <a href={profile.socials.github} target="_blank" rel="noreferrer">
          <Button variant="glass" size="lg">
            <Github size={16} /> GitHub
          </Button>
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
          <Button variant="outline" size="lg">
            <Linkedin size={16} /> LinkedIn
          </Button>
        </a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ink-soft"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "text-center" : ""}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-500">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-4xl font-medium leading-[1.1] text-ink text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

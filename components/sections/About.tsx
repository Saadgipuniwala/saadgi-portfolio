"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[320px]"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass-heavy relative aspect-[4/5] w-full overflow-hidden rounded-5xl p-2 shadow-glass-lg"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[calc(2.5rem-8px)] bg-gradient-to-br from-violet-100 via-lavender-100 to-peach-100">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="320px"
                className="object-cover"
                priority={false}
              />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-6 -top-6 h-20 w-20 rounded-3xl shadow-glass"
          />
          <motion.div
            animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-peach-200/70 shadow-glass"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About"
            title="An engineer driven by curiosity and real-world problem solving."
          />
          <div className="mt-6 space-y-4">
            {profile.bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-[15px] leading-relaxed text-ink-soft md:text-base"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

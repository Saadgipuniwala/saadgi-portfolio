"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="How the work built up."
          description="A typed sequence of what I studied, shipped, and presented — in order."
        />

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-violet-300 via-violet-200 to-transparent md:left-[9px]" />
          <ol className="space-y-10">
            {journey.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative flex gap-6 pl-8 md:gap-10 md:pl-10"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-violet-400 bg-bg md:h-[18px] md:w-[18px]" />
                <div className="glass w-full rounded-3xl p-5 shadow-glass md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-medium text-ink md:text-xl">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-violet-500">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink-soft">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

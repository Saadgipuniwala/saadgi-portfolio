"use client";

import { motion } from "framer-motion";
import { currentWork } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

export default function CurrentWork() {
  return (
    <section id="now" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Currently Working On"
          title="What I'm Working On"
        />

        <div className="mt-14 space-y-5">
          {currentWork.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className="p-6 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-ink md:text-xl">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-peach-100 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-peach-500">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>

                <div className="mt-5">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-violet-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 to-peach-300"
                    />
                  </div>
                  <div className="mt-1.5 text-right font-mono text-[11px] text-ink-soft">
                    {item.progress}%
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

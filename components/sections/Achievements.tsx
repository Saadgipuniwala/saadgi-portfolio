"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import CountUp from "@/components/CountUp";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Achievements"
          title="A quick look at the numbers."
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Card className="flex h-full flex-col justify-between p-6 text-center md:p-8">
                <div className="font-display text-4xl font-medium text-ink md:text-5xl">
                  <CountUp value={a.value} suffix={a.suffix} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {a.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

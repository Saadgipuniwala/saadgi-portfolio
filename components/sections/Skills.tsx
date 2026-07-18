"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the systems."
          align="center"
          description="Grouped by where each skill actually gets used — sensing, modeling, and shipping."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {groups.map(([group, list], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className="h-full p-6 md:p-7">
                <h3 className="font-display text-lg font-medium text-ink">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-200/70 bg-white/60 px-3.5 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:border-violet-300 hover:text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

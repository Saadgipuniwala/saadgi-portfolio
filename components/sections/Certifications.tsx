"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Certifications" title="Credentials along the way." />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Card className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <Award size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-ink">{c.name}</h3>
                  <p className="mt-1 text-[13px] text-ink-soft">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

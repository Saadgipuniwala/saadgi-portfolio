"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const router = useRouter();
  const featured = projects.filter((p) => p.status === "Shipped");

  return (
    <section id="projects" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected systems, end to end."
          description="Each one moved from a real problem to a working, demoable system — sensors, models, and the dashboard that makes them legible."
        />

        <div className="mt-16 flex flex-col gap-8">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                role="link"
                tabIndex={0}
                onClick={() => router.push(`/projects/${p.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") router.push(`/projects/${p.slug}`);
                }}
                className="group block cursor-pointer"
              >
                <div className="glass overflow-hidden rounded-4xl shadow-glass transition-all duration-500 hover:-translate-y-1 hover:shadow-glass-lg">

                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">

                    {/* Cover Image */}
                    <div className="relative h-[340px] overflow-hidden bg-violet-100">
                      <Image
                        src={p.cover}
                        alt={p.name}
                        fill
                        sizes="(max-width:768px) 100vw, 55vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute left-5 top-5">
                        <Badge className="glass-heavy border-white/60 text-ink">
                          {p.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-10">

                      <h3 className="font-display text-3xl font-semibold text-ink">
                        {p.shortName}
                      </h3>

                      <p className="mt-4 text-[15px] leading-7 text-ink-soft">
                        {p.tagline}
                      </p>

                      {/* Tech Stack */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.techStack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-ink-soft"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="mt-8 flex items-center gap-6">

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-violet-600">
                          View Case Study
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </span>

                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="relative z-10 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-violet-600"
                          >
                            <Github size={15} />
                            Source
                          </a>
                        )}

                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="relative z-10 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-violet-600"
                          >
                            <ArrowUpRight size={15} />
                            Live Demo
                          </a>
                        )}

                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
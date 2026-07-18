"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Layers,
  Wrench,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProjectWithVideo = Project & { video?: string };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function ProjectDetail({ project }: { project: ProjectWithVideo }) {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft size={15} /> All projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge>{project.status}</Badge>
              <Badge className="border-peach-200 bg-peach-100/70 text-peach-500">
                {project.year}
              </Badge>
            </div>

            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-ink text-balance md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft md:text-lg">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <Button variant="primary" size="lg">
                    Live demo <ArrowUpRight size={16} />
                  </Button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="glass" size="lg">
                    <Github size={16} /> Source code
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <section className="px-6">
        <motion.div
          {...fadeUp}
          className="glass-heavy mx-auto max-w-5xl overflow-hidden rounded-5xl p-2 shadow-glass-lg"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[calc(2.5rem-8px)] bg-violet-100">
            <Image
              src={project.cover}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Problem / Solution */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <Card className="h-full p-7 md:p-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-violet-500">
                The problem
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {project.problem}
              </p>
            </Card>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <Card className="h-full p-7 md:p-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-violet-500">
                The solution
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {project.solution}
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="flex items-center gap-2.5">
            <Layers size={18} className="text-violet-500" />
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
              Architecture
            </h2>
          </motion.div>
          <ol className="mt-8 space-y-4">
            {project.architecture.map((step, i) => (
              <motion.li
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="glass flex items-start gap-4 rounded-3xl p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500 font-mono text-xs text-white">
                  {i + 1}
                </span>
                <p className="text-[14px] leading-relaxed text-ink-soft md:text-[15px]">
                  {step}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="flex items-center gap-2.5">
            <Wrench size={18} className="text-violet-500" />
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
              Tech stack
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="mt-6 flex flex-wrap gap-2.5">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="glass rounded-full px-4 py-2 text-sm font-medium text-ink"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <motion.h2 {...fadeUp} className="font-display text-2xl font-medium text-ink md:text-3xl">
              Screenshots
            </motion.h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.screenshots.map((s, i) => (
                <motion.figure
                  key={s.src}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }}
                  className={
                    i === 0 ? "md:col-span-2" : ""
                  }
                >
                  <div className="glass-heavy overflow-hidden rounded-4xl p-2 shadow-glass">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[calc(2rem-8px)] bg-violet-50">
                      <Image
                        src={s.src}
                        alt={s.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-[13px] text-ink-soft">
                    {s.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Demo Video */}
      {project.video && (
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              {...fadeUp}
              className="font-display text-2xl font-medium text-ink md:text-3xl"
            >
              Demo Video
            </motion.h2>

            <motion.div
              {...fadeUp}
              className="mt-8 flex justify-center"
            >
              <div className="glass-heavy overflow-hidden rounded-4xl p-2 shadow-glass w-full">
                <video
                  className="w-full rounded-[calc(2rem-8px)]"
                  controls
                  muted
                  loop
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      {/* Features / Challenges / Results */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div {...fadeUp}>
            <Card className="h-full p-6 md:p-7">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-violet-500" />
                <h3 className="font-display text-lg font-medium text-ink">Features</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-ink-soft">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <Card className="h-full p-6 md:p-7">
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-peach-500" />
                <h3 className="font-display text-lg font-medium text-ink">Challenges</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach-300" />
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.16 }}>
            <Card className="h-full p-6 md:p-7">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-violet-600" />
                <h3 className="font-display text-lg font-medium text-ink">Results</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-ink-soft">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <motion.div
          {...fadeUp}
          className="glass mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-5xl p-10 text-center shadow-glass-lg md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
              Curious how it works under the hood?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              The full source is public — issues and stars welcome.
            </p>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button variant="primary">
                  <Github size={16} /> View on GitHub
                </Button>
              </a>
            )}
            <Link href="/#projects">
              <Button variant="outline">More projects</Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

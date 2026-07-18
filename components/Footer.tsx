import { profile } from "@/lib/data";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-200/40 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-medium text-ink">{profile.name}</p>
          <p className="mt-1 text-[13px] text-ink-soft">
            © {new Date().getFullYear()} — Built with Next.js, Tailwind & Framer Motion.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2.5 text-ink-soft transition-colors hover:bg-violet-50 hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2.5 text-ink-soft transition-colors hover:bg-violet-50 hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="rounded-full p-2.5 text-ink-soft transition-colors hover:bg-violet-50 hover:text-ink"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

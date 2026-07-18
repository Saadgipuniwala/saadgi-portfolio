"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

// EDIT_ME — create a free account at emailjs.com and drop your IDs here,
// or in a .env.local as NEXT_PUBLIC_EMAILJS_* and reference those instead.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_id";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_id";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "public_key";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's create something impactful."
          description="I'm open to AI/ML, Data Science and Software Engineering internship opportunities, research collaborations and exciting engineering projects."
          align="center"
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass mt-12 space-y-4 rounded-4xl p-6 text-left shadow-glass md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="user_name" className="text-[13px] font-medium text-ink-soft">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                required
                className="mt-1.5 w-full rounded-2xl border border-violet-200/70 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="text-[13px] font-medium text-ink-soft">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="mt-1.5 w-full rounded-2xl border border-violet-200/70 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-400"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-[13px] font-medium text-ink-soft">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-none rounded-2xl border border-violet-200/70 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-violet-400"
              placeholder="What are you working on?"
            />
          </div>

          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-between">
            <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  <Mail size={16} /> Send message
                </>
              )}
            </Button>

            {status === "sent" && (
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600">
                <CheckCircle2 size={16} /> Message sent — thank you!
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-1.5 text-sm text-red-500">
                <AlertCircle size={16} /> Couldn&rsquo;t send — email me directly instead.
              </span>
            )}
          </div>
        </motion.form>

        <p className="mt-6 text-sm text-ink-soft">
          Or reach me directly at{" "}
          <a href={`mailto:${profile.email}`} className="font-medium text-violet-600 underline underline-offset-4">
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}

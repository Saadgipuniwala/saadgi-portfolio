"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CountUp({
  value,
  suffix = "",
  duration = 1.4,
}: {
  value: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numeric = parseFloat(value);
  const isNumeric = !Number.isNaN(numeric);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  useEffect(() => {
    if (!inView || !isNumeric) {
      if (!isNumeric) setDisplay(value);
      return;
    }
    let start: number | null = null;
    let raf = 0;
    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(current.toFixed(decimals));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, numeric, decimals, duration, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  );
}

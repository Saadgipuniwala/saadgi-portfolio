import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-violet-200 bg-violet-50/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-700",
        className
      )}
      {...props}
    />
  );
}

export { Badge };

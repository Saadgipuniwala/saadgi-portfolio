import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass rounded-4xl shadow-glass transition-shadow duration-500 hover:shadow-glass-lg",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };

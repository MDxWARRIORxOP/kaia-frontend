import type { InputHTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-primary/80 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-0",
        className,
      )}
      {...props}
    />
  );
}

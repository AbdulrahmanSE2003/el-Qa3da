import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles: Layout, typography, states (بدون ألوان أو ظلال هنا)
        "h-12 w-full min-w-0 rounded-sm border-2 border-ink bg-paper px-4 py-2 text-base font-bold text-ink shadow-[4px_4px_0px_0px_var(--color-ink)] transition-all duration-200 outline-none select-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-bold file:text-ink placeholder:text-ink-soft/60 hover:bg-paper-warm focus-visible:translate-x-0.5 focus-visible:translate-y-0.5 focus-visible:bg-paper focus-visible:shadow-[2px_2px_0px_0px_var(--color-ink)] focus-visible:ring-[3px] focus-visible:ring-copper/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger-brand aria-invalid:shadow-[4px_4px_0px_0px_var(--color-danger-brand)] aria-invalid:ring-[3px] aria-invalid:ring-danger-brand/30 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }

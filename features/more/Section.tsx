import { ReactNode } from "react"

interface SectionProps {
  label: string
  children: ReactNode
}

export function Section({ label, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-1">
      <h4 className="font-mono text-[10px] font-bold tracking-widest text-copper uppercase">
        {label}
      </h4>
      <p className="text-sm leading-relaxed font-semibold text-ink-soft">
        {children}
      </p>
    </section>
  )
}

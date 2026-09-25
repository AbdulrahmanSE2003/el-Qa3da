import type { LucideIcon } from "lucide-react"

type InstallStep = {
  icon: LucideIcon
  text: string
}

type InstallStepsProps = {
  platform: string
  browser: string
  steps: InstallStep[]
}

export default function InstallSteps({
  platform,
  browser,
  steps,
}: InstallStepsProps) {
  return (
    <section className="mt-10 border-t border-ink/10 pt-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold tracking-widest text-copper">
          {platform}
        </span>

        <span className="text-sm font-bold text-ink-soft">{browser}</span>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <div
              key={step.text}
              className="flex items-start gap-4 border-2 border-ink/10 bg-paper-warm p-4"
            >
              <span className="pt-0.5 font-mono text-xs font-black text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex items-start gap-3">
                <Icon
                  className="mt-0.5 size-4 shrink-0 text-ink-soft"
                  strokeWidth={1.8}
                />

                <p className="text-sm font-bold">{step.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

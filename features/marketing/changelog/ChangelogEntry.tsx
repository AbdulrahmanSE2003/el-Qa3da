import { labelColor } from "@/lib/constants"

type ChangelogUpdate = {
  version: string
  date: string
  label: keyof typeof labelColor
  title: string
  description: string
}

type ChangelogEntryProps = {
  update: ChangelogUpdate
  isLast: boolean
}

export default function ChangelogEntry({
  update,
  isLast,
}: ChangelogEntryProps) {
  return (
    <article className="relative grid grid-cols-[100px_1fr] gap-6">
      {!isLast && (
        <div className="absolute top-6 right-[calc(100px/2-0.5px)] h-full w-px bg-ink/10" />
      )}

      <div className="pt-1 text-right">
        <span className="font-mono text-xs font-bold text-copper">
          v{update.version}
        </span>

        <p className="mt-1 text-[10px] text-ink-soft">{update.date}</p>
      </div>

      <div className="pb-12">
        <span
          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest ${labelColor[update.label]}`}
        >
          {update.label}
        </span>

        <h2 className="mt-2 text-xl font-black">{update.title}</h2>

        <p className="mt-2 text-sm leading-7 text-ink-soft">
          {update.description}
        </p>
      </div>
    </article>
  )
}

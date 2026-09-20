"use-client"

import { AppDialog } from "@/components/ui/AppDialog"
import { ArrowUpLeft, Code2, GitFork, Globe } from "lucide-react"
import { Section } from "./Section"
import Link from "next/link"
import { useState } from "react"

const Developer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
  if (!isOpen) return null

  return (
    <AppDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title={
        <span className="flex items-center gap-2">
          <Code2 className="size-5 text-copper" />
          المطور
        </span>
      }
      subtitle="صُنع بعناية وحب"
    >
      <div className="bg-warm-paper flex items-center gap-4 border-2 border-ink/10 p-4">
        <div className="flex size-14 shrink-0 items-center justify-center border-2 border-ink bg-copper font-mono text-xl font-black text-paper">
          ع
        </div>
        <div>
          <p className="font-black text-ink">عبدالرحمن سعد</p>
          <p className="font-mono text-[11px] text-copper">
            Frontend Engineer · Product Designer
          </p>
        </div>
      </div>

      <Section label="عن المطور">
        طورت القعدة بعناية عشان تقدم أفضل تجربة لعب جماعية وسريعة بدون تعقيد. كل
        تفصيلة في التطبيق اتعمل بقصد.
      </Section>

      <div className="flex gap-2">
        <Link
          href="https://mnmlst-dev.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 border-2 border-ink bg-paper py-2.5 text-xs font-bold text-ink shadow-[2px_2px_0_var(--color-ink)] transition-all hover:shadow-none"
        >
          <Globe className="size-4" />
          الموقع
          <ArrowUpLeft className="size-3.5" />
        </Link>
        <Link
          href="https://github.com/AbdulrahmanSE2003/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 border-2 border-ink bg-paper py-2.5 text-xs font-bold text-ink shadow-[2px_2px_0_var(--color-ink)] transition-all hover:shadow-none"
        >
          <GitFork />
          GitHub
          <ArrowUpLeft className="size-3.5" />
        </Link>
      </div>
    </AppDialog>
  )
}

export default Developer

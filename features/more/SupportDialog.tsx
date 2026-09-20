"use client"

import { AppDialog } from "@/components/ui/AppDialog"
import { ArrowUpLeft, HeartHandshake } from "lucide-react"
import { Section } from "./Section"
import Link from "next/link"

interface SupportDialogProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function SupportDialog({ isOpen, setIsOpen }: SupportDialogProps) {
  return (
    <AppDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title={
        <span className="flex items-center gap-2">
          <HeartHandshake className="size-5 text-copper" />
          ادعم القعدة
        </span>
      }
      subtitle="التطبيق مجاني بدون إعلانات — دعمك بيفرق"
    >
      <Section label="ليه تدعم؟">
        القعدة مجانية ومفيهاش إعلانات. لو التطبيق عمللكم جو حلو في الخروجات،
        دعمك بيساعدنا نضيف ألعاب جديدة ونطور التجربة.
      </Section>

      <div className="flex flex-col gap-2">
        <Link
          href="https://patreon.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border-2 border-ink bg-copper px-4 py-3 font-black text-paper shadow-[3px_3px_0_var(--color-ink)] transition-all hover:shadow-none"
        >
          <span className="text-sm">الدعم عبر Patreon</span>
          <ArrowUpLeft className="size-4" />
        </Link>
        <Link
          href="https://buymeacoffee.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between border-2 border-ink bg-paper px-4 py-3 font-bold text-ink shadow-[3px_3px_0_var(--color-ink)] transition-all hover:shadow-none"
        >
          <span className="text-sm">اشترِ لنا فنجان قهوة ☕</span>
          <ArrowUpLeft className="size-4" />
        </Link>
      </div>
    </AppDialog>
  )
}

"use client"

import { AppDialog } from "@/components/ui/AppDialog"
import { Info } from "lucide-react"
import { Section } from "./Section"

interface AboutDialogProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function AboutDialog({ isOpen, setIsOpen }: AboutDialogProps) {
  return (
    <AppDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      title={
        <span className="flex items-center gap-2">
          <Info className="size-5 text-copper" />
          عن القعدة
        </span>
      }
      subtitle="كل قعدة وليها حكاية"
    >
      <Section label="الفكرة بدأت ليه؟">
        بدل ما الموبايل يفصلنا عن بعض في الخروجة، عملنا القعدة عشان يحول
        الموبايل لوسيلة تخلق ضحك وكلام وتحديات بين الصحاب.
      </Section>
      <Section label="المشكلة والحل">
        زهقنا من الألعاب المكررة والكروت الورقية اللي بتضيع. بنقدم تجربة ألعاب
        جماعية سريعة وجاهزة في جيبك في أي وقت.
      </Section>
      <Section label="رسالتنا">
        كل خروجة بتطلعوا منها بذكرى جديدة وموقف بيضحك. القعدة معمول عشان يكون
        المحرك للحظات دي.
      </Section>
    </AppDialog>
  )
}

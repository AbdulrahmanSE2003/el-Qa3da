"use client"

import { useState } from "react"
import { Info, Code2, HeartHandshake, Palette, Moon, Sun } from "lucide-react"
import { SettingsRow } from "@/features/more/SettingsRow"
import Developer from "@/features/more/Developer"
import { AboutDialog } from "@/features/more/AboutDialog"
import { SupportDialog } from "@/features/more/SupportDialog"

const MoreRows = () => {
  const [isDark, setIsDark] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [devOpen, setDevOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  return (
    <>
      {/* Rows */}
      <div className="flex flex-col gap-4">
        {/* Dark Mode */}
        <SettingsRow
          icon={isDark ? Moon : Sun}
          label="المظهر"
          subtitle={isDark ? "الوضع الليلي" : "الوضع النهاري"}
          right={
            <button
              onClick={() => setIsDark(!isDark)}
              className={`relative h-7 w-12 shrink-0 border-2 border-ink transition-colors ${
                isDark ? "bg-copper" : "bg-ink/10"
              }`}
            >
              <span
                className={`absolute top-0.5 size-5 border border-ink bg-paper transition-transform ${
                  isDark ? "translate-x-0 bg-ink" : "-translate-x-5"
                }`}
              />
            </button>
          }
        />

        {/* About */}
        <SettingsRow
          icon={Info}
          label="عن القعدة"
          subtitle="الفكرة، المشكلة، ورسالتنا"
          onClick={() => setAboutOpen(true)}
        />

        {/* Developer */}
        <SettingsRow
          icon={Code2}
          label="المطور"
          subtitle="صُنع بحب بواسطة عبدالرحمن سعد"
          onClick={() => setDevOpen(true)}
        />

        {/* Support */}
        <SettingsRow
          icon={HeartHandshake}
          label="ادعم القعدة"
          subtitle="ساعدنا نطور ألعاب أكتر"
          variant="copper"
          onClick={() => setSupportOpen(true)}
        />

        {/* Coming Soon */}
        <SettingsRow
          icon={Palette}
          label="الأصوات والسمات"
          subtitle="تخصيص كامل للتطبيق"
          disabled
          right={
            <span className="border border-ink/15 px-2 py-0.5 font-mono text-[9px] font-bold text-ink-soft">
              قريبًا
            </span>
          }
        />
      </div>

      {/* ── About Dialog ── */}
      <AboutDialog isOpen={aboutOpen} setIsOpen={setAboutOpen} />

      {/* ── Developer Dialog ── */}
      <Developer isOpen={devOpen} setIsOpen={setDevOpen} />

      {/* ── Support Dialog ── */}
      <SupportDialog isOpen={supportOpen} setIsOpen={setSupportOpen} />
    </>
  )
}

export default MoreRows

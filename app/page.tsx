"use client"

import Link from "next/link"
import {
  ArrowUpLeft,
  CircleQuestionMark,
  Dices,
  Gamepad2,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react"
import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import Header from "@/features/home/components/Header"

import {
  ActivityCard,
  ActivityCardItem,
} from "@/components/layout/ActivityCard"
import HomeBottomNav from "@/components/layout/HomeBottomNav"

export const activities: ActivityCardItem[] = [
  {
    number: "01",
    stamp: "TOPICS",
    title: "مواضيع وحوارات",
    description: "سؤال يفتح الكلام... والباقي على القعدة.",
    href: "/topics",
    icon: MessageCircle,
  },
  {
    number: "02",
    stamp: "CHALLENGE",
    title: "تحديات",
    description: "الدور على مين؟",
    href: "/challenges",
    icon: Zap,
  },
  {
    number: "03",
    stamp: "QUESTIONS",
    title: "شيح الحارة",
    description: "جاهز للإستجواب؟",
    href: "/sheikh",
    icon: CircleQuestionMark,
  },
  {
    number: "04",
    stamp: "GAMES",
    title: "ألعاب",
    description: "هنا القعدة هتبدأ بجد.",
    href: "/games",
    icon: Gamepad2,
    className: "col-span-2",
  },
]

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-paper px-5 pt-7 pb-24 text-ink">
      <GridPattern />
      <BackgroundAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col">
        {/* Brand */}
        <Header />

        {/* Intro */}
        <section className="mt-10 mb-5">
          <h2 className="text-2xl font-black tracking-tight">
            الليلة نعمل إيه؟
          </h2>

          <p className="mt-1 text-sm font-medium text-ink-soft/70">
            اختار حاجة تفتح الكلام... أو تقلب القعدة.
          </p>
        </section>

        {/* Featured Activity */}
        <ActivityCard item={activities[0]} />

        {/* Secondary Activities */}
        <section className="mt-4 grid grid-cols-2 gap-3">
          {activities.slice(1).map((item) => (
            <ActivityCard
              item={item}
              key={item.number}
              className={item?.className ?? ""}
            />
          ))}
        </section>
        <HomeBottomNav />
      </div>
    </main>
  )
}

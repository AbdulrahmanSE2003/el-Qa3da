"use client"

import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import Header from "@/features/home/components/Header"

import {
  ActivityCard,
  ActivityCardItem,
} from "@/components/layout/ActivityCard"
import HomeBottomNav from "@/components/layout/HomeBottomNav"
import { activities } from "@/lib/constants"



export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-paper px-5 pb-24 text-ink">
      <GridPattern />
      <BackgroundAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col">
        {/* Brand */}
        <Header />

        {/* Intro */}
        <section className="mt-10 mb-5">
          <h2 className="text-2xl font-black tracking-tight">
            النهاردة هنعمل إيه؟
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

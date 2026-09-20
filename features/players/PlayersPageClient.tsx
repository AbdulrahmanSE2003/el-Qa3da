"use client"

import { useSearchParams } from "next/navigation"

import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import Header from "@/components/layout/Header"
import PlayersIntro from "@/features/players/PlayersIntro"
import Players from "@/features/players/Players"

export default function PlayersPageClient() {
  const searchParams = useSearchParams()

  const redirect = searchParams.get("redirect") || "/"

  return (
    <main className="relative min-h-dvh overflow-hidden bg-paper px-5 py-6 text-ink">
      <GridPattern />
      <BackgroundAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col">
        <Header stamp="PLAYERS" />
        <PlayersIntro />
        <Players redirect={redirect} />
      </div>
    </main>
  )
}

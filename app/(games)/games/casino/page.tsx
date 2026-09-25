"use client"

import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import GridPattern from "@/components/atmosphere/GridPattern"
import Header from "@/components/layout/Header"
import Casino from "@/features/games/casino/Casino"
import { usePartyStore } from "@/store/party-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const CasinoPage = () => {
  const router = useRouter()

  const players = usePartyStore((state) => state.players)

  useEffect(() => {
    if (players.length === 0) {
      router.replace("/players?redirect=/games/casino")
    }
  }, [players.length, router])

  if (players.length === 0) {
    return null
  }
  return (
    <main className="relative min-h-dvh overflow-hidden bg-paper px-5 py-6 text-ink">
      <GridPattern />
      <BackgroundAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-3">
        <Header stamp="CASINO" href="/games" linkText="الألعاب" />
        <Casino />
      </div>
    </main>
  )
}

export default CasinoPage

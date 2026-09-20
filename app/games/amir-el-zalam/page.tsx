"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import Header from "@/components/layout/Header"
import AmirElZalam from "@/features/games/amir-el-zalam/AmirElZalam"
import { usePartyStore } from "@/store/party-store"

export default function AmirElZalamPage() {
  const router = useRouter()

  const players = usePartyStore((state) => state.players)

  useEffect(() => {
    if (players.length === 0) {
      router.replace("/players?redirect=/games/amir-el-zalam")
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
        <Header stamp="AMIR EL ZALAM" href="/games" linkText="الألعاب" />

        <AmirElZalam />
      </div>
    </main>
  )
}

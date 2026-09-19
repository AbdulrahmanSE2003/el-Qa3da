"use client"

import { useState } from "react"

import type { AmirGameState } from "@/games/amir-el-zalam/types"

import RoleReveal from "./RoleReveal"
import RoleSetup from "./RoleSetup"

const AmirElZalam = () => {
  const [game, setGame] = useState<AmirGameState | null>(null)

  if (!game) {
    return <RoleSetup onStart={setGame} />
  }

  if (game.phase === "role-reveal") {
    return <RoleReveal game={game} onChange={setGame} />
  }

  return (
    <div className="bg-warm-paper border border-ink/10 p-6">
      <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
        PHASE
      </p>

      <h2 className="mt-2 text-2xl font-black text-ink">{game.phase}</h2>
    </div>
  )
}

export default AmirElZalam

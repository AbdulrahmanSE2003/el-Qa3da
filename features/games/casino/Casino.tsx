"use client"

import { useState } from "react"
import { CasinoGame } from "@/games/casino/types"
import CasinoSetup from "./CasinoSetup"
import CasinoPlay from "./CasinoPlay"
import CasinoResult from "./CasinoResult"

const Casino = () => {
  const [game, setGame] = useState<CasinoGame | null>(null)

  if (!game) {
    return <CasinoSetup onChange={setGame} />
  }

  switch (game.phase) {
    case "game":
      return <CasinoPlay game={game} onChange={setGame} />

    case "finished":
      return <CasinoResult game={game} onChange={setGame} />

    default:
      return null
  }
}

export default Casino

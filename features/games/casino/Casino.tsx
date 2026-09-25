"use client"

import { CasinoGameState } from "@/games/casino/types"
import { useState } from "react"
import CasinoSetup from "./CasinoSetup"
import CasinoPlay from "./CasinoPlay"
import CasinoResult from "./CasinoResult"

const Casino = () => {
  const [game, setGame] = useState<CasinoGameState>("setup")

  switch (game) {
    case "setup":
      return <CasinoSetup onStart={setGame} />
    case "game":
      return <CasinoPlay />
    case "finished":
      return <CasinoResult />
    default:
      return null
  }
}

export default Casino

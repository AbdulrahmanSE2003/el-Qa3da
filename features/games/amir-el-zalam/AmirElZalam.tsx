"use client"

import { useState } from "react"

import type { AmirGameState } from "@/games/amir-el-zalam/types"

import RoleReveal from "./RoleReveal"
import RoleSetup from "./RoleSetup"
import MafiaPhase from "./MafiaPhase"
import PolicePhase from "./PolicePhase"
import DoctorPhase from "./DoctorPhase"
import NightResult from "./NightResult"
import DiscussionPhase from "./DiscussionPhase"
import EliminationPhase from "./EliminationPhase"
import GameFinished from "./GameFinished"
import EliminationResult from "./EliminationResult"

const AmirElZalam = () => {
  const [game, setGame] = useState<AmirGameState | null>(null)

  if (!game) {
    return <RoleSetup onStart={setGame} />
  }

  switch (game.phase) {
    case "role-reveal":
      return <RoleReveal game={game} onChange={setGame} />

    case "mafia":
      return <MafiaPhase game={game} onChange={setGame} />

    case "police":
      return <PolicePhase game={game} onChange={setGame} />

    case "doctor":
      return <DoctorPhase game={game} onChange={setGame} />

    case "night-result":
      return <NightResult game={game} onChange={setGame} />

    case "discussion":
      return <DiscussionPhase game={game} onChange={setGame} />

    case "elimination":
      return <EliminationPhase game={game} onChange={setGame} />

    case "elimination-result":
      return <EliminationResult game={game} onChange={setGame} />
    case "finished":
      return <GameFinished game={game} />

    default:
      return null
  }
}

export default AmirElZalam

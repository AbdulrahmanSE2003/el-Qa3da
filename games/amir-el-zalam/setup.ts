import type { Player } from "@/store/party-store"

import type { AmirPlayer, AmirRole } from "./types"

export const assignRoles = (
  players: Player[],
  mafiaCount: number
): AmirPlayer[] => {
  const maxMafia = Math.floor(players.length / 2)

  if (players.length < 3) {
    throw new Error("At least 3 players are required")
  }

  if (mafiaCount < 1 || mafiaCount > maxMafia) {
    throw new Error("Invalid Mafia count")
  }

  const shuffledPlayers = [...players]

  for (let i = shuffledPlayers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffledPlayers[i], shuffledPlayers[j]] = [
      shuffledPlayers[j],
      shuffledPlayers[i],
    ]
  }

  return shuffledPlayers.map((player, index) => {
    let role: AmirRole

    if (index < mafiaCount) {
      role = "mafia"
    } else if (index === mafiaCount) {
      role = "police"
    } else if (index === mafiaCount + 1) {
      role = "doctor"
    } else {
      role = "civilian"
    }

    return {
      id: player.id,
      name: player.name,
      role,
      alive: true,
      silenced: false,
    }
  })
}

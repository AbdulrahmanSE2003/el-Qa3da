import type { Player } from "@/store/party-store"
import type { AmirPlayer, AmirRole } from "./types"

const shuffle = <T>(items: T[]): T[] => {
  const shuffled = [...items]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

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

  const roles: AmirRole[] = [
    ...Array<AmirRole>(mafiaCount).fill("mafia"),
    "police",
    "doctor",
    ...Array<AmirRole>(players.length - mafiaCount - 2).fill("civilian"),
  ]

  const shuffledPlayers = shuffle(players)
  const shuffledRoles = shuffle(roles)

  const assignedPlayers = shuffledPlayers.map((player, index) => ({
    id: player.id,
    name: player.name,
    role: shuffledRoles[index],
    alive: true,
    silenced: false,
  }))

  return shuffle(assignedPlayers)
}

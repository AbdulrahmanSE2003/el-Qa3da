import { casinoQuestions } from "@/contents/casino"
import { createContentDeck } from "@/lib/create-content-deck"
import { Player } from "@/store/party-store"
import { CasinoGame, CasinoGamePlayer } from "./types"

const questionsDeck = createContentDeck(casinoQuestions)

export const createGame = (
  players: Player[],
  winningScore: number
): CasinoGame => {
  return {
    phase: "setup",
    players: players.map((player) => ({
      ...player,
      score: 0,
    })),
    winningScore,
    currentQuestion: null,
    winner: null,
  }
}

export const nextQuestion = (game: CasinoGame): CasinoGame => {
  return {
    ...game,
    currentQuestion: questionsDeck.next(),
  }
}

export const changePlayerScore = (
  player: CasinoGamePlayer,
  action: "increase" | "decrease",
  game: CasinoGame
): CasinoGame | null => {
  const targetPlayer = game.players.find((p) => p.id === player.id)

  if (!targetPlayer) return null

  const newPlayers = game.players.map((p) =>
    p.id === player.id
      ? {
          ...p,
          score: p.score + (action === "increase" ? 1 : -1),
        }
      : p
  )

  return {
    ...game,
    players: newPlayers,
  }
}

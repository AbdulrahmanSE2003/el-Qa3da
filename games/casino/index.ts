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
    phase: "game",
    players: players.map((player) => ({
      ...player,
      score: 0,
    })),
    winningScore,
    currentQuestion: questionsDeck.next(),
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

  const updatedPlayer = newPlayers.find((p) => p.id === player.id)!

  return {
    ...game,
    players: newPlayers,
    winner: updatedPlayer.score >= game.winningScore ? updatedPlayer : null,
    phase: updatedPlayer.score >= game.winningScore ? "finished" : "game",
  }
}

export const RestartGame = (
  players: CasinoGamePlayer[],
  game: CasinoGame
): CasinoGame => {
  return {
    currentQuestion: questionsDeck.next(),
    phase: "game",
    players: game.players.map((player) => ({
      ...player,
      score: 0,
    })),
    winner: null,
    winningScore: 10,
  }
}

import { CasinoQuestion } from "@/contents/casino"

export type CasinoGameState = "setup" | "game" | "finished"

export interface CasinoGamePlayer {
  id: string
  name: string
  score: number
}

export interface CasinoGame {
  phase: CasinoGameState
  players: CasinoGamePlayer[]
  winner: CasinoGamePlayer | null
  currentQuestion: () => CasinoQuestion | null
  usedQuestionIds: string[]
  winningScore: number
}

"use client"

import { Button } from "@/components/ui/button"
import { changePlayerScore, nextQuestion } from "@/games/casino"
import { CasinoGame, CasinoGamePlayer } from "@/games/casino/types"
import { usePartyStore } from "@/store/party-store"
import { ArrowRight } from "lucide-react"
import PlayersPoints from "./PlayersPoints"
import QuestionHeader from "./QuestionHeader"

const CasinoPlay = ({
  onChange,
  game,
}: {
  game: CasinoGame
  onChange: (game: CasinoGame) => void
}) => {
  const { currentQuestion, players } = game

  const handleChangeScore = (
    player: CasinoGamePlayer,
    action: "increase" | "decrease"
  ) => {
    const updatedGame = changePlayerScore(player, action, game)

    if (!updatedGame) return

    onChange(updatedGame)
  }

  const handleNextQuestion = () => {
    onChange(nextQuestion(game))
  }
  return (
    <section className="flex h-full w-full flex-col justify-between gap-6">
      {/* Question */}
      <QuestionHeader currentQuestion={currentQuestion} />

      {/* Switch Question */}
      <Button onClick={handleNextQuestion} variant={"secondary"}>
        <ArrowRight />
        سؤال تاني
      </Button>

      {/* Points */}
      <PlayersPoints players={players} onChange={handleChangeScore} />
    </section>
  )
}

export default CasinoPlay

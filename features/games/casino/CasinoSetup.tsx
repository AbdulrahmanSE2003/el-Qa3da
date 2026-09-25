"use client"

import { usePartyStore } from "@/store/party-store"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { createGame } from "@/games/casino"
import { useState } from "react"
import GameGuideModal from "./GameGuideModal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CasinoGame } from "@/games/casino/types"

const CasinoSetup = ({
  onChange,
}: {
  onChange: (game: CasinoGame) => void
}) => {
  const { players } = usePartyStore()
  const [winningScore, setWinningScore] = useState(10)

  const handleStart = () => {
    const game = createGame(players, winningScore)

    onChange(game)
  }

  return (
    <section className="flex h-full w-full flex-col justify-between gap-6">
      {/* Header */}
      <div className="border-b border-ink/20 pb-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
            CASINO{" "}
          </p>
          <GameGuideModal />
        </div>

        <h1 className="mt-2 text-4xl font-black text-ink">كافيه الألعاب</h1>

        <p className="mt-2 text-sm leading-7 text-ink-soft">
          حدد الفورة من كام ، وابدأ اللعب...{" "}
        </p>
      </div>

      {/* Input WinningScore */}
      <div
        className={`flex flex-col items-start gap-2 border-b border-b-ink/20 pb-5`}
      >
        <p className={`text-lg font-bold`}>الفورة من كام </p>
        <Input
          type="number"
          placeholder="حدد الفورة من كام"
          defaultValue={winningScore}
          onChange={(e) => setWinningScore(+e.target.value)}
        />
      </div>

      {/* Players */}
      <div
        className={`flex flex-col items-start gap-2 border-b border-b-ink/20 pb-5`}
      >
        <p className={`text-lg font-bold`}>اللاعبون</p>

        <div className={`flex flex-wrap items-center gap-3`}>
          {players.map((p, i) => (
            <Badge
              className="text-md px-3 py-4"
              key={i}
              variant={i % 2 == 0 ? "secondary" : "outline"}
            >
              {p.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className={`flex min-h-32 w-full items-end self-center`}>
        <Button onClick={handleStart} className={`mt-auto w-full`}>
          <ArrowRight />
          يلا بينا
        </Button>
      </div>
    </section>
  )
}

export default CasinoSetup

"use client"

import { Button } from "@/components/ui/button"
import { CasinoGamePlayer } from "@/games/casino/types"
import { Minus, Plus, Star } from "lucide-react"

const PlayersPoints = ({
  players,
  onChange,
}: {
  players: CasinoGamePlayer[]
  onChange: (players: CasinoGamePlayer, action: "increase" | "decrease") => void
}) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <p className="flex items-center gap-2 text-xl font-black text-ink">
        <Star className="size-5 shrink-0 text-copper" strokeWidth={2} />
        النقاط
      </p>

      <div className="grid w-full grid-cols-2 gap-5">
        {players.map((p) => (
          <div
            key={p.id}
            className="flex w-full flex-col items-start gap-3 rounded-sm border-2 border-ink bg-paper p-4 shadow-[3px_3px_0px_0px_var(--color-ink)]"
          >
            <span className="text-md leading-snug font-black text-ink">
              {p.name}
            </span>

            <div className="flex w-full items-center justify-between gap-2">
              <Button
                onClick={() => onChange(p, "decrease")}
                size="icon"
                variant="outline"
                className="size-9"
                aria-label={`نقص نقاط ${p.name}`}
              >
                <Minus className="size-4" strokeWidth={2.5} />
              </Button>

              <span className="min-w-8 text-center text-lg font-black text-copper tabular-nums">
                {p.score}
              </span>

              <Button
                onClick={() => onChange(p, "increase")}
                size="icon"
                variant="outline"
                className="size-9"
                aria-label={`زود نقاط ${p.name}`}
              >
                <Plus className="size-4" strokeWidth={2.5} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayersPoints

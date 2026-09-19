import { GAMES_LIST } from "../data/games"
import { GameCard } from "./GameCard"

export default function Games() {
  return (
    <div className="flex flex-col gap-4">
      {GAMES_LIST.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

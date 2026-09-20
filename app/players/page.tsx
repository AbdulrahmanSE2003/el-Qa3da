import PlayersPageClient from "@/features/players/PlayersPageClient"
import { Suspense } from "react"

export default function PlayersPage() {
  return (
    <Suspense fallback={null}>
      <PlayersPageClient />
    </Suspense>
  )
}

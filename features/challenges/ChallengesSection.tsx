"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"
import Qa3daCard from "@/components/ui/Qa3daCard"
import { createContentDeck } from "@/lib/create-content-deck"
import { challenges } from "@/contents/challenges"

const ChallengesSection = () => {
  const deckRef = useRef(createContentDeck(challenges))

  const [currentChallenge, setCurrentChallenge] = useState(() =>
    deckRef.current.next()
  )

  const handleNext = () => {
    setCurrentChallenge(deckRef.current.next())
  }

  return (
    <section className="relative z-10 my-auto flex w-full pt-2 max-w-md flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="mb-1 text-2xl font-bold text-ink-glow">أسئلة وتحديات</h2>
        <p className="text-sm font-medium text-ink-soft/80">
          "جاهز تعمل حاجة محدش متوقعها؟"
        </p>
      </div>

      {/* Dynamic Card Component */}
      <Qa3daCard
        id={currentChallenge.id}
        text={currentChallenge.text}
        category={currentChallenge.category}
        badgeLabel="CHALLENGE"
      />

      {/* Action Button */}
      <Button onClick={handleNext} className="group mt-8 w-full" size="lg">
        <span>تحدي تاني</span>
        <RefreshCw className="transition-transform duration-500 ease-out group-active:rotate-180" />
      </Button>
    </section>
  )
}

export default ChallengesSection

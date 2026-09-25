import GridPattern from "@/components/atmosphere/GridPattern"
import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import Header from "@/components/layout/Header"
import ChallengesSection from "@/features/challenges/ChallengesSection"

export default function ChallengesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-paper p-6 py-4 text-ink md:p-10">
      {/* Background Elements */}
      <GridPattern />
      <BackgroundAtmosphere />

      {/* Navigation & Header */}
      <Header stamp="CHALLENGES" />

      {/* Main Experience Section */}
      <ChallengesSection />

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-md border-t border-ink/10 pt-4 text-center opacity-80">
        <p className="text-xs font-bold text-ink">الدور على مين؟ 👀</p>
      </footer>
    </main>
  )
}

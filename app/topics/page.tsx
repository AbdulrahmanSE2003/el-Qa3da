import BackgroundAtmosphere from "@/components/atmosphere/BackgroundAtmosphere"
import GridPattern from "@/components/atmosphere/GridPattern"
import Header from "@/components/layout/Header"
import TopicsArea from "@/features/topics/TopicsArea"

export default function TopicsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-paper p-6 py-4 text-ink md:p-10">
      {/* Background paper texture pattern */}
      <GridPattern />
      <BackgroundAtmosphere />
      {/* Navigation & Header */}
      <Header stamp="TOPICS" />
      {/* Topics */}
      <TopicsArea />
      {/* Footer Note */}
      <footer className="relative z-10 mt-6 w-full max-w-md border-t border-ink/10 pt-4 text-center opacity-80">
        <p className="text-xs font-bold text-ink">خد وقتك... مفيش إجابة غلط</p>
      </footer>
    </main>
  )
}

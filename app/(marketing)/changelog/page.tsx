import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { updates } from "@/lib/constants"
import ChangelogEntry from "@/features/marketing/changelog/ChangelogEntry"

export default function ChangelogPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-paper text-ink">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
        <header>
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
            CHANGELOG
          </p>

          <h1 className="mt-4 text-5xl leading-tight font-black">التحديثات</h1>

          <p className="mt-4 text-sm leading-7 text-ink-soft">
            كل جديد بيحصل في القعدة.
          </p>
        </header>

        <div className="mt-16">
          {updates.map((update, index) => (
            <ChangelogEntry
              key={update.version}
              update={update}
              isLast={index === updates.length - 1}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

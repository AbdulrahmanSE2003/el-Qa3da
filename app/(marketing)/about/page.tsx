import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import AboutIntro from "@/features/marketing/about/AboutIntro"
import AboutPrinciples from "@/features/marketing/about/AboutPrinciples"

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-paper text-ink">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
        <AboutIntro />
        <AboutPrinciples />
      </section>

      <Footer />
    </main>
  )
}

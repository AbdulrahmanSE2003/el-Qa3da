import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import InstallSteps from "@/features/marketing/download/InstallSteps"
import { Download, Plus, Search, Share, Smartphone } from "lucide-react"

const iosSteps = [
  { icon: Share, text: "افتح التطبيق في Safari واضغط على زر المشاركة" },

  { icon: Plus, text: 'اختار "Add to Home Screen"' },

  { icon: Smartphone, text: "اضغط Add — وهتلاقيه على الشاشة الرئيسية" },
]

const androidSteps = [
  { icon: Search, text: "افتح التطبيق في Chrome" },
  {
    icon: Download,
    text: 'اضغط على القايمة (⋮) واختار "Install & Add to Home Screen"',
  },
  { icon: Smartphone, text: "اضغط Add — وهتلاقيه على الشاشة الرئيسية" },
]

export default function DownloadPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-paper text-ink">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
        <header>
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
            DOWNLOAD
          </p>

          <h1 className="mt-4 text-5xl leading-tight font-black">التحميل</h1>
        </header>

        <section className="mt-10 border-2 border-ink bg-ink p-8 shadow-[6px_6px_0_var(--color-copper)]">
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
            COMING SOON
          </p>

          <h2 className="mt-3 text-2xl font-black text-paper">
            تطبيق القعدة قريباً على App Store و Google Play
          </h2>

          <p className="mt-3 text-sm leading-7 text-paper/60">
            بنشتغل على النسخة الـ native عشان تجربة أحسن وأسرع. — القعدة شغالة
            دلوقتي كـ PWA.
          </p>
        </section>

        <section className="mt-14">
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
            AVAILABLE NOW
          </p>

          <h2 className="mt-4 text-3xl font-black">حملها دلوقتي كـ PWA</h2>

          <p className="mt-3 text-sm leading-7 text-ink-soft">
            PWA يعني بتحملها زي أي تطبيق على شاشتك الرئيسية — من غير App Store
            ومن غير Google Play. نفس التجربة، بدون تعقيد.
          </p>
        </section>

        <InstallSteps platform="iOS" browser="Safari فقط" steps={iosSteps} />

        <InstallSteps
          platform="Android"
          browser="Chrome فقط"
          steps={androidSteps}
        />
      </section>

      <Footer />
    </main>
  )
}

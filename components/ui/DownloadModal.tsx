// components/ui/DownloadModal.tsx
import { Download, Share, Plus, Smartphone, Search } from "lucide-react"
import { AppDialog } from "./AppDialog"

const iosSteps = [
  { icon: Share, text: "افتح التطبيق في Safari واضغط على زر المشاركة" },
  { icon: Plus, text: 'اختار "Add to Home Screen"' },
  { icon: Smartphone, text: "اضغط Add — وهتلاقيه على الشاشة الرئيسية" },
]

const androidSteps = [
  { icon: Search, text: "افتح التطبيق في Chrome" },
  { icon: Download, text: 'اضغط على القايمة (⋮) واختار "Add to Home Screen"' },
  { icon: Smartphone, text: "اضغط Add — وهتلاقيه على الشاشة الرئيسية" },
]

const trigger = (
  <button className="group flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
    <Download
      className="size-5 text-ink transition-transform group-hover:scale-110 group-hover:text-copper"
      strokeWidth={2}
    />
  </button>
)

export function DownloadModal() {
  return (
    <AppDialog
      trigger={trigger}
      title={
        <>
          <Download className="size-6 text-copper" />
          التحميل
        </>
      }
      subtitle="حمل القعدة على شاشتك الرئيسية"
    >
      {/* Coming Soon */}
      <section className="flex flex-col gap-3 border-2 border-ink bg-ink p-5 shadow-[4px_4px_0_var(--color-copper)]">
        <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper">
          COMING SOON
        </p>
        <h3 className="text-base font-black text-paper">
          قريباً على App Store و Google Play
        </h3>
        <p className="text-xs leading-6 text-paper/60">
          بنشتغل على النسخة الـ native. — القعدة شغالة دلوقتي كـ PWA.
        </p>
      </section>

      {/* iOS */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Smartphone className="size-5 shrink-0" strokeWidth={2} />
          iOS — Safari
        </h3>
        <div className="flex flex-col gap-2">
          {iosSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="flex items-start gap-4 border-2 border-ink/15 bg-paper p-4 shadow-[2px_2px_0_var(--color-ink)]"
              >
                <span className="pt-0.5 font-mono text-xs font-black text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-ink-soft"
                    strokeWidth={1.8}
                  />
                  <p className="text-xs font-bold">{step.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Android */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Search className="size-5 shrink-0" strokeWidth={2} />
          Android — Chrome
        </h3>
        <div className="flex flex-col gap-2">
          {androidSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="flex items-start gap-4 border-2 border-ink/15 bg-paper p-4 shadow-[2px_2px_0_var(--color-ink)]"
              >
                <span className="pt-0.5 font-mono text-xs font-black text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-ink-soft"
                    strokeWidth={1.8}
                  />
                  <p className="text-xs font-bold">{step.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </AppDialog>
  )
}

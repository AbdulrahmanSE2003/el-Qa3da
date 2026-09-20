// components/modals/game-guide-modal.tsx
"use client"

import { AppDialog } from "@/components/ui/AppDialog"
import { BookOpen, Info } from "lucide-react"

export function GameGuideModal() {
  const triggerButton = (
    <button className="group flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
      <BookOpen
        className="size-5 text-ink transition-transform group-hover:scale-110 group-hover:text-copper"
        strokeWidth={2}
      />
    </button>
  )

  return (
    <AppDialog
      trigger={triggerButton}
      title={
        <>
          <Info className="size-6 text-copper" />
          أمير الظلام
        </>
      }
      subtitle="لعبة خداع، شك، وتحليل... وكل واحد عنده دور مخبيّه."
    >
      {/* الفكرة */}
      <section>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-black text-copper">
          <span>🎭</span> الفكرة
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          كل لاعب بياخد دور سري، والمافيا بتحاول تخلص على باقي اللاعبين، بينما
          الشرطة والدكتور والمدنيين بيحاولوا يكتشفوا المافيا قبل فوات الأوان.
        </p>
      </section>

      {/* الأدوار */}
      <section>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-copper">
          <span>👥</span> الأدوار
        </h3>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-ink/20 bg-ink/5 p-4">
            <h4 className="font-black text-ink">المافيا</h4>
            <p className="mt-1 text-xs leading-relaxed font-semibold text-ink-soft">
              بتحاول تقلل عدد المدنيين، وفي كل ليلة تختار ضحية وتحاول تسكت لاعب.
            </p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-ink/5 p-4">
            <h4 className="font-black text-ink">الشرطة</h4>
            <p className="mt-1 text-xs leading-relaxed font-semibold text-ink-soft">
              كل ليلة تقدر تحقق مع لاعب واحد وتعرف إذا كان مافيا أم لا.
            </p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-ink/5 p-4">
            <h4 className="font-black text-ink">الدكتور</h4>
            <p className="mt-1 text-xs leading-relaxed font-semibold text-ink-soft">
              كل ليلة يختار لاعب يحاول ينقذه من القتل، ومسموح له ينقذ نفسه.
            </p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-ink/5 p-4">
            <h4 className="font-black text-ink">المدني</h4>
            <p className="mt-1 text-xs leading-relaxed font-semibold text-ink-soft">
              مفيش عنده قدرة خاصة، لكن عنده أهم سلاح: الكلام والتحليل والتصويت.
            </p>
          </div>
        </div>
      </section>

      {/* الجولة الليلية */}
      <section>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-black text-copper">
          <span>🌙</span> الجولة الليلية
        </h3>
        <ul className="flex flex-col gap-2 text-sm font-semibold text-ink-soft">
          <li className="flex items-center gap-2 before:size-1.5 before:rounded-full before:bg-copper">
            المافيا تختار ضحية.
          </li>
          <li className="flex items-center gap-2 before:size-1.5 before:rounded-full before:bg-copper">
            المافيا تختار لاعبًا يتم إسكات صوته.
          </li>
          <li className="flex items-center gap-2 before:size-1.5 before:rounded-full before:bg-copper">
            الشرطة تحقق مع لاعب.
          </li>
          <li className="flex items-center gap-2 before:size-1.5 before:rounded-full before:bg-copper">
            الدكتور يختار لاعبًا لإنقاذه.
          </li>
        </ul>
      </section>

      {/* الصبح والمناقشة */}
      <section>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-black text-copper">
          <span>☀️</span> الصبح والمناقشة
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          الصبح بيظهر مين مات، وهل الدكتور أنقذه، وهل الشرطة اكتشفت مافيا، ومين
          اتسكت. بعدها تبدأ المناقشة.
          <br />
          كل اللاعبين الأحياء يتناقشوا ويحاولوا يعرفوا مين المافيا. بعد
          المناقشة، يتم التصويت على لاعب واحد. اللاعب اللي ياخد التصويت يخرج من
          اللعبة ويتم كشف دوره.
        </p>
      </section>

      {/* مين يكسب */}
      <section>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-black text-copper">
          <span>🏆</span> مين يكسب؟
        </h3>
        <div className="flex flex-col gap-3 text-sm font-semibold text-ink-soft">
          <p>
            <strong className="text-ink">المدنيين:</strong> يكسبوا لما كل
            المافيا تخرج.
          </p>
          <p>
            <strong className="text-ink">المافيا:</strong> تكسب لما عددها يبقى
            مساويًا لعدد غير المافيا إذا كان الدكتور ميتًا، أو أكبر منهم إذا كان
            الدكتور حيًا.
          </p>
        </div>
      </section>

      {/* مهم */}
      <section className="rounded-xl border-2 border-copper bg-copper/10 p-5">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-black text-copper">
          <span>⚠️</span> مهم جداً
        </h3>
        <ul className="flex flex-col gap-2 text-xs leading-relaxed font-bold text-ink">
          <li>• اللاعب الميت ميتفضلش يشارك في المناقشة.</li>
          <li>• اللاعب المسكوت عنه لا يتكلم في جولة المناقشة.</li>
          <li>• الأدوار سرية تماماً.</li>
          <li>
            • التطبيق بيساعد الـ Host في إدارة اللعبة، لكن الكلام والتمثيل والشك
            هي اللي بتعمل القعدة.
          </li>
        </ul>
      </section>
    </AppDialog>
  )
}

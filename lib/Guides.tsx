import { Theater, Users, Moon, Sun, Trophy, AlertTriangle 
,MessageCircle,
  Zap,
  Gamepad2,
  Shuffle,
  ChevronLeft,

} from "lucide-react"

export function AmirElzalamGuide() {
  return (
    <>
      {/* الفكرة */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Theater className="size-5 shrink-0" strokeWidth={2} />
          الفكرة
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          كل لاعب بياخد دور سري. المافيا بتحاول تخلص على باقي اللاعبين،
          والشرطة والدكتور والمدنيين بيحاولوا يكشفوا المافيا قبل فوات الأوان.
        </p>
      </section>

      {/* الأدوار */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Users className="size-5 shrink-0" strokeWidth={2} />
          الأدوار
        </h3>
        <div className="flex flex-col gap-2">
          {[
            {
              title: "المافيا",
              description:
                "بتحاول تقلل عدد المدنيين. في كل ليلة بتختار ضحية وتسكت لاعب.",
            },
            {
              title: "الشرطة",
              description:
                "كل ليلة بتشك في لاعب واحد وبتعرف إذا كان مافيا ولا لأ.",
            },
            {
              title: "الدكتور",
              description:
                "كل ليلة بيختار لاعب ينقذه من القتل، ومسموحله ينقذ نفسه.",
            },
            {
              title: "المدني",
              description:
                "مفيش عنده قدرة خاصة، لكن عنده أهم سلاح: الكلام والتحليل والتصويت.",
            },
          ].map((role) => (
            <div
              key={role.title}
              className="border-2 border-ink/15 bg-paper p-4 shadow-[2px_2px_0_var(--color-ink)]"
            >
              <h4 className="font-black text-ink">{role.title}</h4>
              <p className="mt-1 text-xs leading-relaxed font-semibold text-ink-soft">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* الجولة الليلية */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Moon className="size-5 shrink-0" strokeWidth={2} />
          الجولة الليلية
        </h3>
        <ul className="flex flex-col gap-2">
          {[
            "المافيا بتختار الضحية.",
            "المافيا بتختار لاعب يتسكت صوته.",
            "الشرطة بتحقق مع لاعب.",
            "الدكتور بيختار لاعب ينقذه.",
          ].map((step) => (
            <li
              key={step}
              className="flex items-start gap-3 text-sm font-semibold text-ink-soft"
            >
              <span className="mt-1.5 size-1.5 shrink-0 bg-copper" />
              {step}
            </li>
          ))}
        </ul>
      </section>

      {/* الصبح والمناقشة */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Sun className="size-5 shrink-0" strokeWidth={2} />
          الصبح والمناقشة
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          الصبح بيظهر مين مات، وهل الدكتور أنقذه، وهل الشرطة اكتشفت مافيا،
          ومين اتسكت صوته. بعدها كل اللاعبين الأحياء بيتناقشوا ويحاولوا
          يعرفوا مين المافيا. بعد المناقشة بيصوتوا على لاعب واحد — اللاعب
          اللي ياخد أعلى تصويت بيطلع من اللعبة ويتكشف دوره.
        </p>
      </section>

      {/* مين يكسب */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Trophy className="size-5 shrink-0" strokeWidth={2} />
          مين يكسب؟
        </h3>
        <div className="flex flex-col gap-2 text-sm font-semibold text-ink-soft">
          <p>
            <span className="font-black text-ink">المدنيين: </span>
            بيكسبوا لما كل أفراد المافيا يطلعوا من اللعبة.
          </p>
          <p>
            <span className="font-black text-ink">المافيا: </span>
            بتكسب لما عددها يبقى مساوي لعدد غير المافيا لو الدكتور ميت، أو
            أكبر منهم لو الدكتور لسه حي.
          </p>
        </div>
      </section>

      {/* مهم */}
      <section className="flex flex-col gap-3 border-2 border-copper bg-copper/8 p-4 shadow-[2px_2px_0_var(--color-copper)]">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <AlertTriangle className="size-5 shrink-0" strokeWidth={2} />
          مهم جداً
        </h3>
        <ul className="flex flex-col gap-2">
          {[
            "اللاعب الميت ميشاركش في المناقشة.",
            "اللاعب المكتوم ميتكلمش في جولة النهار.",
            "الأدوار سرية تماماً طول اللعبة.",
            "التطبيق بيساعد الـ Host يدير اللعبة، لكن الكلام والتمثيل والشك هم اللي بيعملوا القعدة.",
          ].map((note) => (
            <li
              key={note}
              className="flex items-start gap-3 text-xs font-bold text-ink"
            >
              <span className="mt-1 size-1.5 shrink-0 bg-copper" />
              {note}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export function PlatformGuide() {
  return (
    <>
      {/* المقدمة */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <ChevronLeft className="size-5 shrink-0" strokeWidth={2} />
          القعدة إيه؟
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          القعدة تطبيق للشلة. بيفتحوه مع بعض في الخروجة أو على القهوة ويبدأ
          الكلام والضحك والمنافسة. مفيش حسابات، مفيش تسجيل، افتح وابدأ.
        </p>
      </section>

      {/* مواضيع */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <MessageCircle className="size-5 shrink-0" strokeWidth={2} />
          مواضيع
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          بتفتح الصفحة وبتلاقي سؤال أو موضوع عشوائي تفتح بيه كلام مع الشلة.
          لو مش عاجبك اضغط Shuffle وياخدك لموضوع تاني. مفيش نقاط ومفيش
          فايزين — بس كلام وحوار.
        </p>
        <div className="flex items-start gap-3 border-2 border-ink/15 bg-paper p-4 shadow-[2px_2px_0_var(--color-ink)]">
          <Shuffle className="mt-0.5 size-4 shrink-0 text-copper" strokeWidth={2} />
          <p className="text-xs font-bold text-ink-soft">
            اضغط Shuffle عدد ما تحب لحد ما تلاقي الموضوع المناسب للقعدة.
          </p>
        </div>
      </section>

      {/* تحديات */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Zap className="size-5 shrink-0" strokeWidth={2} />
          تحديات
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          زي المواضيع بالظبط، بس التحديات أجرأ وأكتر حركة. ممكن تطلب منك
          تعمل حاجة، تقلد حد، أو تعترف بموقف. نفس الفكرة — Shuffle لحد ما
          تلاقي التحدي المناسب.
        </p>
        <div className="flex items-start gap-3 border-2 border-ink/15 bg-paper p-4 shadow-[2px_2px_0_var(--color-ink)]">
          <Zap className="mt-0.5 size-4 shrink-0 text-copper" strokeWidth={2} />
          <p className="text-xs font-bold text-ink-soft">
            التحديات مش إجبارية — الشلة هي اللي بتحدد مين بيعمل إيه.
          </p>
        </div>
      </section>

      {/* ألعاب */}
      <section className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <Gamepad2 className="size-5 shrink-0" strokeWidth={2} />
          ألعاب
        </h3>
        <p className="text-sm leading-relaxed font-semibold text-ink-soft">
          هنا بيبدأ التنافس الحقيقي. بتختار لعبة، بتضيف أسماء اللاعبين،
          وبتحدد عدد الجولات — وبعدين اللعبة بتبدأ.
        </p>
        <div className="flex flex-col gap-2">
          {[
            {
              icon: Users,
              text: "ضيف أسماء اللاعبين قبل ما تبدأ — مفيش حسابات.",
            },
            {
              icon: Trophy,
              text: "النقاط بتتراكم على مدار الجولات وفي الآخر بيتحدد أقل لاعب في النقاط.",
            },
            {
              icon: ChevronLeft,
              text: "اللاعب الأقل نقاطًا بيقعد على كرسي الاعتراف وبياخد العقوبة.",
            },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 border-2 border-ink/15 bg-paper p-4 shadow-[2px_2px_0_var(--color-ink)]"
            >
              <Icon className="mt-0.5 size-4 shrink-0 text-copper" strokeWidth={2} />
              <p className="text-xs font-bold text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* نصيحة */}
      <section className="flex flex-col gap-3 border-2 border-copper bg-copper/8 p-4 shadow-[2px_2px_0_var(--color-copper)]">
        <h3 className="flex items-center gap-2 text-base font-black text-copper">
          <MessageCircle className="size-5 shrink-0" strokeWidth={2} />
          نصيحة
        </h3>
        <ul className="flex flex-col gap-2">
          {[
            "التطبيق معمول يشتغل على موبايل واحد والكل يتفرج — مش محتاج كل واحد يفتحه.",
            "في الألعاب، الـ Host هو اللي بيمسك الموبايل ويدير اللعبة.",
,"في القعدة مش بنتنافس على الفوز ، كلنا كسبانين وفي واحد خسران هو الكوز ونحكم عليه."
          ].map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-3 text-xs font-bold text-ink"
            >
              <span className="mt-1 size-1.5 shrink-0 bg-copper" />
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
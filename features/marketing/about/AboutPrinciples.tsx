const principles = [
  {
    label: "الفكرة",
    text: "تطبيق يخلي القعدة تبدأ في ثواني — ألعاب، تحديات، ومواضيع جاهزة للشلة.",
  },
  {
    label: "المبدأ",
    text: "بسيط، سريع، مش محتاج تسجيل. تفتحه وتبدأ.",
  },
  {
    label: "لمين؟",
    text: "لأي شلة عندها قعدة وناقصها بس الـ spark.",
  },
]

export default function AboutPrinciples() {
  return (
    <section className="mt-16 space-y-10 border-t border-ink/10 pt-14">
      {principles.map((item) => (
        <div key={item.label} className="grid grid-cols-[100px_1fr] gap-6">
          <span className="pt-1 font-mono text-xs font-bold tracking-widest text-copper">
            {item.label}
          </span>

          <p className="leading-8 text-ink-soft">{item.text}</p>
        </div>
      ))}
    </section>
  )
}


import Link from "next/link"
import {
  ArrowUpLeft,
  CircleQuestionMark,
  Dices,
  Gamepad2,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react"


export const activities: ActivityCardItem[] = [
  {
    number: "01",
    stamp: "TOPICS",
    title: "مواضيع وحوارات",
    description: "سؤال يفتح الكلام... والباقي على القعدة.",
    href: "/topics",
    icon: MessageCircle,
  },
  {
    number: "02",
    stamp: "CHALLENGE",
    title: "تحديات",
    description: "الدور على مين؟",
    href: "/challenges",
    icon: Zap,
  },
  {
    number: "03",
    stamp: "QUESTIONS",
    title: "شيح الحارة",
    description: "جاهز للإستجواب؟",
    href: "/sheikh",
    icon: CircleQuestionMark,
  },
  {
    number: "04",
    stamp: "GAMES",
    title: "ألعاب",
    description: "هنا القعدة هتبدأ بجد.",
    href: "/games",
    icon: Gamepad2,
    className: "col-span-2",
  },
]
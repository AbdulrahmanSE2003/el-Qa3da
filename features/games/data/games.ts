import { Dices, Ghost, Glasses, LucideIcon, Skull } from "lucide-react"
import { GameTheme } from "../lib/gameTheme"

export interface GameItem {
  id: string
  title: string
  description: string
  status: "متاحة" | "قريبًا"
  icon: LucideIcon
  href?: string
  theme: GameTheme
  isRecommended?: boolean
}

export const GAMES_LIST: GameItem[] = [
  {
    id: "amir-el-zalam",
    title: "أمير الظلام",
    description: "مين هيعرف يكتشف المافيا قبل ما القعدة تقع؟",
    status: "متاحة",
    icon: Ghost,
    href: "/games/amir-el-zalam",
    theme: "dark",
    isRecommended: true,
  },
  {
    id: "casino",
    title: "كافيه الألعاب",
    description: "لعبة أسألة عامة جماعية تنافسية.",
    status: "متاحة",
    icon: Dices,
    href: "/games/casino",
    theme: "nordic",
  },
  {
    id: "bekasa",
    title: "بكاسة",
    description: "لعبة جديدة للقعدة ولسه بنجهزها.",
    status: "قريبًا",
    icon: Glasses,
    theme: "copper",
  },
]

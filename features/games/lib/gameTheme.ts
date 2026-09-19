export const gameThemes = {
  dark: {
    card: "bg-zinc-950 border-zinc-800 shadow-[4px_4px_0_#18181b]",
    hoverShadow: "hover:shadow-[7px_7px_0_#18181b]",
    title: "text-zinc-100 group-hover:text-rose-400",
    description: "text-zinc-400",
    accent: "text-rose-500",
    badge: "bg-rose-600 text-white font-bold border border-rose-500/40",
    iconBox: "bg-zinc-900 border-zinc-700 text-rose-500",
    iconBg: "text-zinc-800",
    actionBtn: "bg-rose-600 text-white border-rose-500 group-hover:bg-rose-500",
  },
  sepia: {
    card: "bg-amber-950 border-amber-900 shadow-[4px_4px_0_#451a03]",
    hoverShadow: "hover:shadow-[7px_7px_0_#451a03]",
    title: "text-amber-100 group-hover:text-amber-400",
    description: "text-amber-300/70",
    accent: "text-amber-500",
    badge: "bg-amber-900 text-amber-300 border border-amber-700/50",
    iconBox: "bg-amber-900/60 border-amber-800 text-amber-400",
    iconBg: "text-amber-900/40",
    actionBtn: "bg-amber-900 text-amber-200 border-amber-700",
  },
  copper: {
    card: "bg-stone-900 border-stone-800 shadow-[4px_4px_0_#1c1917]",
    hoverShadow: "hover:shadow-[7px_7px_0_#1c1917]",
    title: "text-stone-100 group-hover:text-copper",
    description: "text-stone-400",
    accent: "text-copper",
    badge: "bg-stone-800 text-copper border border-copper/30",
    iconBox: "bg-stone-800 border-stone-700 text-copper",
    iconBg: "text-stone-800/80",
    actionBtn: "bg-stone-800 text-copper border-copper/40",
  },
} as const

export type GameTheme = keyof typeof gameThemes

import * as React from "react"
import { ChevronLeft } from "lucide-react"

interface SettingsRowProps {
  icon: React.ElementType
  label: string
  subtitle: string
  onClick?: () => void
  right?: React.ReactNode
  variant?: "default" | "copper"
  disabled?: boolean
}

export function SettingsRow({
  icon: Icon,
  label,
  subtitle,
  onClick,
  right,
  variant = "default",
  disabled = false,
}: SettingsRowProps) {
  const base =
    "flex w-full items-center justify-between border-2 bg-paper p-4 text-right transition-all"

  const variants = {
    default:
      "border-ink/15 shadow-[2px_2px_0_var(--color-ink)] hover:border-ink/40 hover:-translate-x-0.5",
    copper:
      "border-copper/50 bg-copper/5 shadow-[2px_2px_0_var(--color-copper)] hover:-translate-x-0.5",
  }

  const Tag = onClick ? "button" : "div"

  return (
    <Tag
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "cursor-default opacity-50" : "cursor-pointer"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex size-10 items-center justify-center border ${
            variant === "copper"
              ? "border-copper/30 bg-paper text-copper"
              : "bg-warm-paper border-ink/10 text-copper"
          }`}
        >
          <Icon className="size-5" />
        </div>
        <div className="text-right">
          <p className="text-sm font-black text-ink">{label}</p>
          <p
            className={`text-[11px] font-semibold ${
              variant === "copper" ? "text-copper" : "text-ink-soft"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
      {right ??
        (onClick && <ChevronLeft className="size-4 shrink-0 text-ink-soft" />)}
    </Tag>
  )
}

"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export interface AppDialogProps {
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function AppDialog({
  trigger,
  open,
  onOpenChange,
  title,
  subtitle,
  children,
  className = "",
}: AppDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={`max-h-[85vh] w-[95vw] max-w-lg overflow-y-auto rounded-2xl border-2 border-ink bg-paper p-0 shadow-[8px_8px_0_var(--color-ink)] sm:rounded-2xl ${className}`}
      >
        <DialogHeader className="sticky top-0 z-10 border-b-2 border-ink bg-paper px-6 py-4">
          <DialogTitle className="flex items-center gap-2 text-2xl font-black text-ink">
            {title}
          </DialogTitle>
          {subtitle && (
            <p className="mt-1 text-sm font-bold text-ink-soft/80">
              {subtitle}
            </p>
          )}
        </DialogHeader>

        <div className="flex flex-col gap-6 p-6 pt-0 text-ink">{children}</div>
      </DialogContent>
    </Dialog>
  )
}

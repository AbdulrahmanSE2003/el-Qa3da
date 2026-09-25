"use client"

import { useEffect, useState } from "react"

export default function UpdatePrompt() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        setShow(true)
      })
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-x-4 bottom-20 z-50 flex items-center justify-between gap-4 rounded-xl border-2 border-ink bg-paper p-4 shadow-[4px_4px_0_var(--color-ink)]">
      <p className="text-sm font-bold">في تحديث جديد 🎉</p>
      <button
        onClick={() => window.location.reload()}
        className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-paper"
      >
        تحديث
      </button>
    </div>
  )
}

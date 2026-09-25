// components/layout/MobilePlatform.tsx
"use client"

import { useEffect, useState } from "react"
import Platform from "./Platform"
import LandingPage from "./LandingPage"
import MobilePlatformLoader from "./MobilePlatformLoader"

export const MobilePlatform = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    setIsMounted(true)

    const mediaQuery = window.matchMedia("(max-width: 1024px)")

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobileOrTablet(e.matches)
    }

    handleChange(mediaQuery)
    mediaQuery.addEventListener(
      "change",
      handleChange as (e: MediaQueryListEvent) => void
    )

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange as (e: MediaQueryListEvent) => void
      )
    }
  }, [])

  if (!isMounted) return <MobilePlatformLoader />

  return isMobileOrTablet ? <Platform /> : <LandingPage />
}

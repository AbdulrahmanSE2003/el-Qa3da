import { Cairo, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "القعدة — كل قعدة وليها حكاية",
  description: "تطبيق ويب مصري اجتماعي للشلة على القهوة أو في أي قعدة.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(
        "antialiased selection:bg-primary/30 selection:text-foreground",
        cairo.variable,
        ibmPlexMono.variable
      )}
    >
      <body className="min-h-screen bg-paper font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

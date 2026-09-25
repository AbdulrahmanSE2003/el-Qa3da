import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-ink/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs font-bold text-ink-soft">
        <span>القعدة · كل قعدة وليها حكاية</span>
        <Link href="/about" className="transition-opacity hover:opacity-60">
          عن القعدة
        </Link>
      </div>
    </footer>
  )
}

export default Footer

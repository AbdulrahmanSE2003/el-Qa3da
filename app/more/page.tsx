
import MoreRows from "@/features/more/MoreRows"

export default function MorePage() {

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col px-4 pt-6 pb-28 text-ink">
      {/* Header */}
      <div className="mb-6 border-b-2 border-ink/10 pb-4">
        <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-copper uppercase">
          MORE
        </p>
        <h1 className="mt-1 text-3xl font-black text-ink">المزيد</h1>
      </div>

      <MoreRows/>
    </main>
  )
}

import { BookOpen, Info } from "lucide-react"
import { AppDialog } from "./AppDialog"
import { ReactNode } from "react"

const triggerButton=(<button className="group flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--color-ink)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
      <BookOpen
        className="size-5 text-ink transition-transform group-hover:scale-110 group-hover:text-copper"
        strokeWidth={2}
      />
    </button>
)

const GenericGuide = ({title, children}:{title:string, children:ReactNode}) => {
    return (
        <AppDialog
      trigger={triggerButton}
      title={
        <>
          <Info className="size-6 text-copper" />
          {title}
        </>
      }
      subtitle="لعبة خداع، شك، وتحليل... وكل واحد عنده دور مخبيّه."
    >
      {children}
    </AppDialog>
    )
}

export default GenericGuide

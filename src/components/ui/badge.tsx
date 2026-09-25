import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const badgeVariants = cva(
  // Base styles: Layout, typography, states (بدون ألوان أو ظلال هنا)
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-sm font-bold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-[3px] focus-visible:ring-copper/50 disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 [&>svg]:pointer-events-none [&>svg]:size-3.5!",
  {
    variants: {
      variant: {
        // البادج الأساسي (نحاس + حبر)
        default:
          "border-2 border-ink bg-copper px-2.5 text-xs text-paper shadow-[2px_2px_0px_0px_var(--color-ink)] [a]:hover:translate-x-[1px] [a]:hover:translate-y-[1px] [a]:hover:shadow-[1px_1px_0px_0px_var(--color-ink)] [a]:active:translate-x-[2px] [a]:active:translate-y-[2px] [a]:active:shadow-none",

        // بادج ثانوي (لون البخار Steam)
        secondary:
          "border-2 border-ink bg-steam px-2.5 text-xs text-ink shadow-[2px_2px_0px_0px_var(--color-ink)] [a]:hover:translate-x-[1px] [a]:hover:translate-y-[1px] [a]:hover:shadow-[1px_1px_0px_0px_var(--color-ink)] [a]:hover:brightness-95 [a]:active:translate-x-[2px] [a]:active:translate-y-[2px] [a]:active:shadow-none",

        // بادج مفرغ (ورق + حبر)
        outline:
          "border-2 border-ink bg-paper px-2.5 text-xs text-ink shadow-[2px_2px_0px_0px_var(--color-ink)] [a]:hover:translate-x-[1px] [a]:hover:translate-y-[1px] [a]:hover:bg-paper-warm [a]:hover:shadow-[1px_1px_0px_0px_var(--color-ink)] [a]:active:translate-x-[2px] [a]:active:translate-y-[2px] [a]:active:shadow-none",

        // بادج بدون حدود (للنصوص فقط)
        ghost:
          "rounded-md px-2 text-xs text-ink-soft hover:bg-copper/10 hover:text-ink [a]:hover:bg-copper/10 [a]:hover:text-ink",

        // بادج الخطر/العقوبات
        destructive:
          "border-2 border-ink bg-danger-brand px-2.5 text-xs text-paper shadow-[2px_2px_0px_0px_var(--color-ink)] [a]:hover:translate-x-[1px] [a]:hover:translate-y-[1px] [a]:hover:shadow-[1px_1px_0px_0px_var(--color-ink)] [a]:active:translate-x-[2px] [a]:active:translate-y-[2px] [a]:active:shadow-none",

        // رابط
        link: "px-1 text-xs text-copper underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

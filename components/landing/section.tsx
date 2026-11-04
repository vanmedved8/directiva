import { cn } from '@/lib/utils'

type SectionProps = {
  id?: string
  index?: string
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, index, title, children, className }: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn('border-t border-slate-200 px-5 py-20 sm:px-8 md:py-28', className)}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12 flex flex-col gap-4 md:mb-16">
            {index && (
              <span className="font-mono text-xs font-medium tracking-widest text-slate-500 uppercase">
                {index}
              </span>
            )}
            <h2
              id={headingId}
              className="max-w-4xl text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl md:text-5xl"
            >
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

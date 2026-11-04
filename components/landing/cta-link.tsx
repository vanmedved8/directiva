import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const TELEGRAM_URL = 'https://t.me/vanmedved'

type CtaLinkProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function CtaLink({ children, variant = 'primary', className }: CtaLinkProps) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex w-full items-center justify-center gap-3 rounded-md px-8 py-6 text-lg font-semibold tracking-tight transition-all outline-none focus-visible:ring-4 focus-visible:ring-blue-700/30 sm:w-auto',
        variant === 'primary'
          ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-800 hover:shadow-xl'
          : 'border border-slate-300 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-50',
        className,
      )}
    >
      {children}
      <ArrowRight
        className="size-5 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  )
}

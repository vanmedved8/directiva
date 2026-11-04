import { CheckCircle2, FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'

const rows = [
  {
    label: 'Поручение',
    value: 'Подготовить график отгрузок по цеху № 2 на следующий месяц и согласовать его с отделом снабжения',
  },
  { label: 'Исполнитель', value: 'Начальник производства, Петров А. В.' },
  { label: 'Срок', value: 'до 16:00, четверг, 16 апреля' },
]

export function ProtocolCard() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center">
      <Card className="w-full gap-0 rounded-md border border-slate-200 bg-white py-0 text-left shadow-sm ring-0">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <FileText className="size-4 text-slate-500" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              Протокол совещания № 47
            </span>
          </div>
          <span className="font-mono text-xs text-slate-500">14.04.2026</span>
        </div>

        <dl className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 px-5 py-5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-8"
            >
              <dt className="flex items-center gap-3 text-xs font-medium tracking-wider text-slate-500 uppercase">
                <span className="font-mono text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                {row.label}
              </dt>
              <dd className="text-base leading-relaxed font-medium text-slate-900">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-slate-200 px-5 py-4 sm:px-8">
          <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            Открытые проблемы: 2
          </span>
          <span className="text-sm text-slate-600">решения пока нет · не забыты</span>
        </div>

        <div className="flex items-center gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-8">
          <CheckCircle2 className="size-5 text-blue-700" aria-hidden="true" />
          <span className="text-sm font-semibold text-slate-900">Ознакомлен, вопросов нет.</span>
        </div>
      </Card>

      <figcaption className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
        Бумажная роспись не нужна. Запись совещания остаётся у вас. Если при приёме поручения вопросов не было, в протоколе
        фиксируется, что возражений не прозвучало.
      </figcaption>
    </figure>
  )
}

import { Cloud, Server, ShieldCheck } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Section } from './section'

const options = [
  {
    label: 'Вариант А',
    title: '«На вашем железе»',
    icon: Server,
    text: 'Система разворачивается на серверах предприятия. Записи совещаний, протоколы и документы не покидают ваш контур. В этом случае требуется закупка подходящего для ИИ оборудования.',
  },
  {
    label: 'Вариант Б',
    title: '«Через публичное облако»',
    icon: Cloud,
    text: 'Перед отправкой в облако данные обезличиваются: ФИО, должности и реквизиты заменяются условными метками. Обратно их сопоставляют только у вас.',
  },
]

export function DataSecurity() {
  return (
    <Section id="data" index="152-ФЗ" title="Ваши данные остаются под вашим контролем">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {options.map(({ label, title, icon: Icon, text }) => (
          <Card
            key={label}
            className="gap-0 rounded-md border border-slate-200 bg-white p-6 shadow-sm ring-0 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50">
                <Icon className="size-5 text-blue-700" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-medium tracking-widest text-slate-500 uppercase">
                {label}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
      <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-slate-600">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-slate-900" aria-hidden="true" />
        <span>
          В обоих вариантах обработка персональных данных идёт по требованиям Федерального закона №
          152-ФЗ «О персональных данных».
        </span>
      </p>
    </Section>
  )
}

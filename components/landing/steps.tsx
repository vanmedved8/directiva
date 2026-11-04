import { FileAudio, Scale, UserCheck } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Section } from './section'

const steps = [
  {
    numeral: 'I',
    icon: FileAudio,
    title: 'ИИ пишет протокол',
    text: 'Звук или видео совещания превращаются в четыре поля по каждому поручению: что сделать, кто делает, до какого часа, кто принял. Не «на этой неделе», а «до 16:00 в четверг». Нерешённые проблемы идут отдельным списком: проблема записана, ответа пока нет, и она не потеряется.',
  },
  {
    numeral: 'II',
    icon: UserCheck,
    title: 'Свой человек проверяет',
    text: 'Один доверенный сотрудник, которого мы обучаем, за час или два сверяет запись и рассылает протокол исполнителям. Каждый отмечает: ознакомлен, вопросов нет.',
  },
  {
    numeral: 'III',
    icon: Scale,
    title: 'Реальность и закон',
    text: 'Прежде чем поручение войдет в протокол, ставятся три вопроса. Соответствует ли оно законодательству и должностным обязанностям сотрудника? Реален ли срок при нынешней загрузке человека? Управляет ли исполнитель тем, от чего зависит результат? Только после этого поручение считается принятым, и дальше работает Трудовой кодекс. Не выполнил в первый раз: объяснительная и приказ о взыскании по статьям 192 и 193. Сорвал срок повторно, когда взыскание уже есть: можно увольнять по пункту 5 части 1 статьи 81.',
  },
]

export function Steps() {
  return (
    <Section id="steps" index="Как это работает" title="Контроль уходит из вашей головы в систему">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {steps.map(({ numeral, icon: Icon, title, text }) => (
          <Card
            key={numeral}
            className="gap-0 rounded-md border border-slate-200 bg-white p-6 shadow-sm ring-0 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-medium text-slate-400">{numeral}</span>
              <Icon className="size-5 text-blue-700" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{text}</p>
          </Card>
        ))}
      </div>

      <blockquote className="mt-12 border-l-4 border-blue-700 bg-white py-6 pr-6 pl-6 shadow-sm sm:pl-8 md:mt-16">
        <p className="text-2xl leading-snug font-semibold tracking-tight text-balance text-slate-900 md:text-3xl">
          В суд вы приходите с бумагами, а не с пересказом того, что говорили на планёрке.
        </p>
      </blockquote>
    </Section>
  )
}

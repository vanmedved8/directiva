import { Card } from '@/components/ui/card'
import { Section } from './section'

const modules = [
  {
    num: '02',
    name: '«Рентген»',
    text: 'Сверяет оговорки на совещаниях с документами. Показывает, где лежат доказательства воровства или саботажа, без обвинений по догадкам.',
  },
  {
    num: '03',
    name: '«Рычаг»',
    text: 'Находит узкое место, которое держит весь поток, и считает, сколько маржи даст его расшивка. Ищет новые направления по вашим активам.',
  },
  {
    num: '04',
    name: '«Оракул»',
    text: 'Моделирует инерцию бизнеса без ручного управления. Сценарий: прорыв, расшивка, кайдзен или «лошадь сдохла, слезь».',
  },
  {
    num: '05',
    name: '«Moneyball»',
    text: 'Видит, что каждый делает на самом деле. Ищет не лучших на рынке, а тех, кто закроет именно вашу дыру.',
  },
  {
    num: '06',
    name: '«Crew resource management»',
    text: 'Нагрузка по ценности человека и важности задач. Перекрёстный контроль на критичных узлах, как в авиации.',
  },
  {
    num: '07',
    name: '«Стимул»',
    text: 'Премия 5–15% из фонда оплаты труда за реальный результат. Раз в месяц: люди видят свои очки, появляется азарт.',
  },
  {
    num: '08',
    name: '«Манёвр»',
    text: 'Задает цель, срок и границу допустимого, но оставляет выбор способа за исполнителем. Уничтожает микроменеджмент: вы требуете результат к назначенному часу, а не стоите над душой с пошаговой инструкцией.',
  },
  {
    num: '09',
    name: '«Макиавелли»',
    text: 'Закрытый контур для первого лица. Что внутри, знаете только вы. Настраивается под ваши понятия о допустимом.',
  },
]

export function Modules() {
  return (
    <Section id="modules" index="Модули со 2 по 9 · в разработке" title="Что дальше">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <Card
            key={m.num}
            className="gap-0 rounded-md border border-slate-200 bg-white p-6 shadow-none ring-0 transition-colors hover:border-slate-400"
          >
            <span className="font-mono text-3xl font-medium tracking-tight text-slate-300">
              {m.num}
            </span>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">{m.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

import { summaryStats } from './data'
import { Card, CardHeader } from '@/components/ui/card'

const SummaryStats = () => {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-3">
      {summaryStats.map((item) => (
        <Card key={item.label} className={item.accent}>
          <CardHeader className="border-b-0 pb-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">{item.label}</div>
              <div className="mt-3 flex items-end gap-3">
                <div className="text-xl font-semibold tracking-tight text-on-surface">{item.value}</div>
                <div className="pb-1 text-xs font-medium text-primary">{item.delta}</div>
              </div>
            </div>
            <item.icon className="h-5 w-5 text-on-surface-variant" />
          </CardHeader>
        </Card>
      ))}
    </section>
  )
}

export default SummaryStats
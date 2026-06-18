import { KPICard } from "./KPICard";
import { HotspotsPanel } from "./HotspotsPanel";
import { MapPanel } from "./MapPanel";
import { SummaryCharts } from "./SummaryCharts";
import { executiveKpis } from "./data";

export function AnalyticsExecutiveDashboard() {
  return (
    <>
      <section className="grid gap-4 lg:grid-cols-3">
        {executiveKpis.map((item) => (
          <KPICard key={item.label} {...item} />
        ))}
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <MapPanel />
        <HotspotsPanel />
      </section>

      <section className="mt-4">
        <SummaryCharts />
      </section>     
    </>
  );
}

import { Clock3, Filter, PieChart, TrendingUp } from "lucide-react";

import { TrendChart, ViolationsChart } from "@/components/dashboards/dashboard-charts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { breakdown } from "./data";

export function SummaryCharts() {
  return (
    <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr_0.85fr]">
      <Card className="flex flex-col">
        <CardHeader>
          <div>
            <CardTitle>Violations by Hour</CardTitle>
            <CardDescription>Observed enforcement volume across the day.</CardDescription>
          </div>
          <Filter className="h-5 w-5 text-on-surface-variant" />
        </CardHeader>
        <CardContent className="min-w-0 flex-1">
          <ViolationsChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>7-Day Trend</CardTitle>
            <CardDescription>Alpha and beta model projection overlap.</CardDescription>
          </div>
          <div className="text-xs font-medium text-on-surface-variant">~4.2%</div>
        </CardHeader>
        <CardContent className="min-w-0">
          <TrendChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Violation Breakdown</CardTitle>
            <CardDescription>Category mix for current shift.</CardDescription>
          </div>
          <div className="h-5 w-5 rounded-full border border-outline-variant" />
        </CardHeader>
        <CardContent className="space-y-4">
          {breakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className={
                    item.tone === "primary"
                      ? "h-2.5 w-2.5 rounded-full bg-primary"
                      : item.tone === "secondary"
                        ? "h-2.5 w-2.5 rounded-full bg-secondary"
                        : item.tone === "error"
                          ? "h-2.5 w-2.5 rounded-full bg-error"
                          : "h-2.5 w-2.5 rounded-full bg-outline-variant"
                  }
                />
                <span className="text-on-surface">{item.label}</span>
              </div>
              <span className="text-on-surface-variant">{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

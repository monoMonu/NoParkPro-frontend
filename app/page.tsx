import { ArrowRight, Download, Filter, RefreshCcw, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardShell } from "@/components/dashboard-shell";
import { TrendChart, ViolationsChart } from "@/components/dashboard-charts";
import {
  breakdown,
  forecastStats,
  hotspotRanking,
  impactMetrics,
  simulationMetrics,
  summaryStats,
  zoneAssignments,
} from "@/data/dashboard";

export default function Home() {
  return (
    <DashboardShell
      title="Analytics & Executive Summary"
      subtitle="Historical trends, geographic distribution, and operational KPIs for the current shift."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-on-surface-variant">Real-time resource optimization and AI deployment recommendations.</div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">
            <RefreshCcw className="h-4 w-4" /> Revert
          </Button>
          <Button size="sm">
            <ShieldAlert className="h-4 w-4" /> Approve Plan
          </Button>
        </div>
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {summaryStats.map((item) => (
          <Card key={item.label} className={item.accent}>
            <CardHeader className="border-b-0 pb-2">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">{item.label}</div>
                <div className="mt-3 flex items-end gap-3">
                  <div className="text-4xl font-semibold tracking-tight text-on-surface">{item.value}</div>
                  <div className="pb-1 text-xs font-medium text-primary">{item.delta}</div>
                </div>
              </div>
              <item.icon className="h-5 w-5 text-on-surface-variant" />
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.3fr] xl:grid-cols-[340px_minmax(0,1fr)]">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Simulation Parameters</CardTitle>
                <CardDescription>Adjust the available field capacity before running a new recommendation pass.</CardDescription>
              </div>
              <Sparkles className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent className="space-y-4">
              {simulationMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-on-surface-variant">
                    <span>{metric.label}</span>
                    <span className="font-semibold text-on-surface">{metric.value}</span>
                  </div>
                  <div className="flex items-center overflow-hidden rounded-md border border-outline-variant">
                    <button className="h-8 w-8 bg-surface-container-low text-lg text-on-surface-variant">-</button>
                    <div className="flex h-8 flex-1 items-center justify-center bg-surface text-sm font-medium text-on-surface">{metric.value}</div>
                    <button className="h-8 w-8 bg-surface-container-low text-lg text-on-surface-variant">+</button>
                  </div>
                </div>
              ))}
              <Button className="w-full">
                <TrendingUp className="h-4 w-4" /> Run AI Simulation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div>
                <CardTitle>Impact Prediction</CardTitle>
                <CardDescription>Baseline versus projected intervention outcome.</CardDescription>
              </div>
              <TrendingUp className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent className="space-y-4">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-on-surface-variant">
                    <span>{metric.label}</span>
                    <span className="text-xs font-medium text-primary">{metric.change}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1/2 space-y-1">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">Before</div>
                      <div className="h-2 rounded-full bg-surface-container-high">
                        <div className="h-2 rounded-full bg-error" style={{ width: `${metric.before}%` }} />
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-on-surface-variant" />
                    <div className="w-1/2 space-y-1">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">After</div>
                      <div className="h-2 rounded-full bg-surface-container-high">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${metric.after}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <CardHeader>
            <div>
              <CardTitle>AI Zone Assignments</CardTitle>
              <CardDescription>Recommended deployment spread for the current planning window.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              <Download className="h-4 w-4" /> Export Plan
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-surface-container-low text-[11px] uppercase tracking-[0.22em] text-on-surface-variant">
                <tr>
                  <th className="px-4 py-3 font-medium">Zone Sector</th>
                  <th className="px-4 py-3 font-medium">Officers</th>
                  <th className="px-4 py-3 font-medium">Tow Trucks</th>
                  <th className="px-4 py-3 font-medium">Priority</th>
                  <th className="px-4 py-3 font-medium">Est. Reduction</th>
                </tr>
              </thead>
              <tbody>
                {zoneAssignments.map((zone) => (
                  <tr key={zone.zone} className="border-t border-outline-variant/70">
                    <td className="px-4 py-4 align-top">
                      <div className="font-medium text-on-surface">{zone.zone}</div>
                      <div className="mt-1 text-xs text-on-surface-variant">{zone.detail}</div>
                    </td>
                    <td className="px-4 py-4 align-top text-on-surface">{zone.officers}</td>
                    <td className="px-4 py-4 align-top text-on-surface">{zone.trucks}</td>
                    <td className="px-4 py-4 align-top">
                      <Badge tone={zone.tone as never}>{zone.priority}</Badge>
                    </td>
                    <td className="px-4 py-4 align-top text-on-surface-variant">{zone.reduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CardFooter className="flex items-center justify-between text-sm text-on-surface-variant">
            <span>Showing top 5 zones prioritized by AI</span>
            <button className="inline-flex items-center gap-1 text-primary hover:underline">
              View All Zones <ArrowRight className="h-4 w-4" />
            </button>
          </CardFooter>
        </Card>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Geographic Concentration</CardTitle>
              <CardDescription>Visualized cluster density for the current operating area.</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Badge tone="muted">Live</Badge>
              <Badge tone="muted">Historical</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-80 overflow-hidden rounded-md border border-outline-variant bg-[radial-gradient(circle_at_center,rgba(4,74,198,0.14),rgba(4,74,198,0.04)_35%,transparent_70%)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(196,201,214,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(196,201,214,0.55)_1px,transparent_1px)] bg-size-[32px_32px]" />
              <div className="absolute left-1/3 top-1/3 h-8 w-8 rounded-full border-2 border-error bg-error/10 shadow-[0_0_24px_rgba(186,26,26,0.35)]" />
              <div className="absolute left-1/2 top-[58%] h-5 w-5 rounded-full border-2 border-outline bg-surface shadow-[0_0_18px_rgba(15,23,42,0.18)]" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Recurring Hotspots</CardTitle>
              <CardDescription>Clusters sorted by current violation volume.</CardDescription>
            </div>
            <ShieldAlert className="h-5 w-5 text-error" />
          </CardHeader>
          <CardContent className="space-y-4">
            {hotspotRanking.map((hotspot) => (
              <div key={hotspot.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface">{hotspot.label}</span>
                  <span className="font-medium text-on-surface-variant">{hotspot.value}</span>
                </div>
                <div className="h-2 rounded-full bg-surface-container-high">
                  <div
                    className={
                      hotspot.tone === "critical"
                        ? "h-2 rounded-full bg-error"
                        : hotspot.tone === "default"
                          ? "h-2 rounded-full bg-primary"
                          : "h-2 rounded-full bg-secondary"
                    }
                    style={{ width: `${Math.min(100, hotspot.value / 2.5)}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr_0.85fr]">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Violations by Hour</CardTitle>
              <CardDescription>Observed enforcement volume across the day.</CardDescription>
            </div>
            <Filter className="h-5 w-5 text-on-surface-variant" />
          </CardHeader>
          <CardContent>
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
          <CardContent>
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

      <section className="mt-4 grid gap-4 xl:grid-cols-3">
        {forecastStats.map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <div>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </div>
              <Badge tone="muted">{item.delta}</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-semibold tracking-tight text-on-surface">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </section>
    </DashboardShell>
  );
}

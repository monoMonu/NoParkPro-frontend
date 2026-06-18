import { ArrowRight, Download, Filter, RefreshCcw, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  impactMetrics,
  simulationMetrics,
  summaryStats,
  zoneAssignments,
} from "@/data/dashboard";
import SummaryStats from "@/components/dashboards/resource-allocation/SummaryStats";
import SimulationNImpact from "@/components/dashboards/resource-allocation/SimulationNImpact";
import ZoneAssignment from "@/components/dashboards/resource-allocation/ZoneAssignment";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-on-surface-variant"></div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">
            <RefreshCcw className="h-4 w-4" /> Revert
          </Button>
          <Button size="sm">
            <ShieldAlert className="h-4 w-4" /> Approve Plan
          </Button>
        </div>
      </div>

      <section className="mt-6">
        <SummaryStats />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.3fr] xl:grid-cols-[340px_minmax(0,1fr)]">
        <SimulationNImpact />
        <ZoneAssignment />
      </section>
    </>
  );
}

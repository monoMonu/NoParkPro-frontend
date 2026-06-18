import { Flame, ShieldAlert } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { hotspots } from "./data";

export function HotspotsPanel() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Recurring Hotspots</CardTitle>
          <CardDescription>Clusters sorted by current violation volume.</CardDescription>
        </div>
        <ShieldAlert className="h-5 w-5 text-error" />
      </CardHeader>
      <CardContent className="space-y-4">
        {hotspots.map((hotspot) => (
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
  );
}

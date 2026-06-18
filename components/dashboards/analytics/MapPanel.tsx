import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MapPanel() {
  return (
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
  );
}

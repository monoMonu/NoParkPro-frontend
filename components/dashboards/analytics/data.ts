import { AlertTriangle, Crosshair, ShieldCheck } from "lucide-react";

export const executiveKpis = [
  {
    label: "Overall City Risk Level",
    value: "Critical",
    detail: "92/100",
    subdetail: "+14 pts VS baseline",
    tone: "border-t-error",
    icon: AlertTriangle,
  },
  {
    label: "Critical Zones Today",
    value: "14",
    detail: "Downtown Core Sector 7",
    subdetail: "North Stadium Arterial",
    tone: "border-t-tertiary",
    icon: Crosshair,
  },
  {
    label: "Recommended Deployments",
    value: "32",
    detail: "↓ 4 units",
    subdetail: "Optimal coverage met",
    tone: "border-t-primary",
    icon: ShieldCheck,
  },
];

export const hotspots = [
  { label: "Downtown Sector 7", value: 245, tone: "critical" },
  { label: "North Stadium Arterial", value: 182, tone: "muted" },
  { label: "Westside Commercial Loop", value: 134, tone: "default" },
  { label: "Transit Hub Alpha", value: 98, tone: "routine" },
];

export const breakdown = [
  { label: "No Parking", value: "45%", tone: "primary" },
  { label: "Loading Zone", value: "30%", tone: "secondary" },
  { label: "Fire Lane", value: "20%", tone: "error" },
  { label: "Other", value: "5%", tone: "muted" },
];
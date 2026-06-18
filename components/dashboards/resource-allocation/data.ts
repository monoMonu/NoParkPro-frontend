import {
  AlertTriangle,
  BarChart3,
  Bell,
  Compass,
  Gauge,
  LayoutDashboard,
  MapPinned,
  Radar,
  Settings,
  ShieldAlert,
  SquareChartGantt,
  Users,
} from "lucide-react";

export const summaryStats = [
  {
    label: "Total Active Resources",
    value: "142",
    delta: "+12",
    icon: Gauge,
    accent: "border-primary",
  },
  {
    label: "Projected Coverage",
    value: "94.5%",
    delta: "+2.1%",
    icon: Radar,
    accent: "border-primary-container",
  },
  {
    label: "Simulated Impact",
    value: "Optimal",
    delta: "Expected Violation Reduction: ~28%",
    icon: AlertTriangle,
    accent: "border-tertiary",
  },
];

export const zoneAssignments = [
  {
    zone: "Downtown Core (Z-01)",
    detail: "High Congestion Alert",
    officers: 24,
    trucks: 8,
    priority: "Critical",
    reduction: "-42%",
    tone: "critical",
  },
  {
    zone: "Stadium District (Z-14)",
    detail: "Event Day Profile",
    officers: 18,
    trucks: 5,
    priority: "Elevated",
    reduction: "-35%",
    tone: "elevated",
  },
  {
    zone: "Financial Hub (Z-03)",
    detail: "Standard Routine",
    officers: 12,
    trucks: 3,
    priority: "Routine",
    reduction: "-18%",
    tone: "routine",
  },
  {
    zone: "Westside Transit (Z-08)",
    detail: "Bus Lane Enforcement",
    officers: 8,
    trucks: 2,
    priority: "Routine",
    reduction: "-12%",
    tone: "routine",
  },
  {
    zone: "Industrial Park (Z-22)",
    detail: "Low Activity",
    officers: 2,
    trucks: 0,
    priority: "Low",
    reduction: "-2%",
    tone: "muted",
  },
];

export const hotspotRanking = [
  { label: "Downtown Sector 7", value: 245, tone: "critical" },
  { label: "North Stadium Arterial", value: 182, tone: "muted" },
  { label: "Westside Commercial Loop", value: 134, tone: "default" },
  { label: "Transit Hub Alpha", value: 98, tone: "routine" },
];

export const simulationMetrics = [
  { label: "Available Officers", value: 115 },
  { label: "Available Tow Trucks", value: 27 },
];

export const impactMetrics = [
  { label: "Congestion Index", before: 78, after: 58, change: "-15%" },
  { label: "Active Violations", before: 68, after: 49, change: "-28%" },
];


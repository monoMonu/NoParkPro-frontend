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

export const navItems = [
  { label: "City Risk Map", icon: MapPinned },
  { label: "Resource Allocation", icon: SquareChartGantt, active: true },
  { label: "Prediction Center", icon: Radar },
  { label: "Analytics", icon: LayoutDashboard },
  { label: "Settings", icon: Settings },
];

export const sidebarFooterItems = [
  { label: "Support", icon: Compass },
  { label: "System Status", icon: ShieldAlert },
];

export const topbarIcons = [Bell, BarChart3, Users];

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

export const trendData = [
  { day: "Mon", alpha: 22, beta: 18 },
  { day: "Tue", alpha: 25, beta: 22 },
  { day: "Wed", alpha: 30, beta: 28 },
  { day: "Thu", alpha: 34, beta: 30 },
  { day: "Fri", alpha: 41, beta: 37 },
  { day: "Sat", alpha: 38, beta: 34 },
  { day: "Sun", alpha: 46, beta: 40 },
  { day: "Next Tue", alpha: 48, beta: 44 },
];

export const violationBars = [
  { slot: "08:00", value: 6 },
  { slot: "10:00", value: 8 },
  { slot: "12:00", value: 16 },
  { slot: "14:00", value: 22 },
  { slot: "16:00", value: 20 },
  { slot: "18:00", value: 14 },
  { slot: "20:00", value: 9 },
  { slot: "22:00", value: 5 },
];

export const breakdown = [
  { label: "No Parking", value: "45%", tone: "primary" },
  { label: "Loading Zone", value: "30%", tone: "secondary" },
  { label: "Fire Lane", value: "20%", tone: "error" },
  { label: "Other", value: "5%", tone: "muted" },
];

export const simulationMetrics = [
  { label: "Available Officers", value: 115 },
  { label: "Available Tow Trucks", value: 27 },
];

export const impactMetrics = [
  { label: "Congestion Index", before: 78, after: 58, change: "-15%" },
  { label: "Active Violations", before: 68, after: 49, change: "-28%" },
];

export const forecastStats = [
  { label: "Projected Violations", value: "14,285", delta: "+12.4%", detail: "Expected next 7 days based on current trajectory." },
  { label: "High Risk Zones Detected", value: "08", delta: "/ 45 Monitored", detail: "Sector Alpha requires immediate intervention." },
  { label: "Avg Model Confidence", value: "94.2%", delta: "Stable", detail: "Model outputs are ready for action review." },
];
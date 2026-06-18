import { BarChart3, Bell, Compass, LayoutDashboard, MapPinned, Radar, Settings, ShieldAlert, SquareChartGantt, Users } from "lucide-react";

export type DashboardNavItem = {
  label: string;
  icon: typeof MapPinned;
  href: string;
};

export type DashboardRouteConfig = DashboardNavItem & {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
};

export const dashboardRoutes: DashboardRouteConfig[] = [
  {
    label: "City Risk Map",
    icon: MapPinned,
    href: "/dashboard/city-risk-map",
    title: "City Risk Map",
    subtitle: "Live spatial risk monitoring across stations, violations, and field-unit availability.",
    searchPlaceholder: "Search zones, active vehicles, or station IDs...",
  },
  {
    label: "Resource Allocation",
    icon: SquareChartGantt,
    href: "/dashboard/resource-allocation",
    title: "Resource Allocation",
    subtitle: "Simulate coverage, model impact, and assign resources across priority zones.",
    searchPlaceholder: "Search parameters, zones, or IDs...",
  },
  {
    label: "Prediction Center",
    icon: Radar,
    href: "/dashboard/prediction-center",
    title: "Predictive Analytics Engine",
    subtitle: "Generating 7-day algorithmic forecasts based on historical spatial data and live sensor feeds.",
    searchPlaceholder: "Query location, vehicle plate, or zone ID...",
  },
  {
    label: "Analytics",
    icon: LayoutDashboard,
    href: "/dashboard/analytics",
    title: "Analytics & Executive Summary",
    subtitle: "Historical trends, geographic distribution, and operational KPIs for the current shift.",
    searchPlaceholder: "Search parameters, zones, or IDs...",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
    title: "Settings",
    subtitle: "Manage system preferences, access controls, and operational defaults.",
    searchPlaceholder: "Search settings...",
  },
];

export const navItems = dashboardRoutes;

export const defaultDashboardRoute = dashboardRoutes[1];

export function getDashboardRoute(pathname: string | null | undefined) {
  if (!pathname) {
    return defaultDashboardRoute;
  }

  const route = dashboardRoutes.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  return route ?? defaultDashboardRoute;
}

export const sidebarFooterItems = [
  { label: "Support", icon: Compass },
  { label: "System Status", icon: ShieldAlert },
];

export const topbarIcons = [Bell, BarChart3, Users];


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
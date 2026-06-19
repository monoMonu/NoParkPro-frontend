# Frontend API Requirements

This document lists the API endpoints needed by the current `components/dashboards/` frontend. The frontend is currently powered by local mock data; these contracts describe the backend responses needed to replace those mocks.

## General Conventions

- Base path suggestion: `/api/v1`
- Response format: JSON
- Timestamps: ISO 8601 strings, for example `2026-06-19T09:30:00+05:30`
- Percentages: send numeric values where possible, for example `94.2`, not `"94.2%"`
- Counts and scores: send numbers, not formatted strings. The frontend can format commas, percent signs, arrows, and labels.
- Recommended dashboard query params:
  - `from`: ISO date or datetime
  - `to`: ISO date or datetime
  - `window`: enum such as `today`, `24h`, `7d`, `30d`
  - `zoneId`: optional zone filter
  - `stationId`: optional station filter
  - `violationType`: optional violation type filter

Common enums used below:

```ts
type RiskLevel = "critical" | "high" | "elevated" | "routine" | "nominal" | "low";
type ImpactLevel = "severe" | "moderate" | "low";
type ActionType = "deploy_unit" | "monitor" | "automated" | "dispatch" | "details";
type TrendDirection = "up" | "down" | "flat";
```

## 1. Dashboard Shell

The current navigation is static in the frontend, so this endpoint is optional unless the backend should control visible dashboards by role.

### `GET /api/v1/dashboard/routes`

Returns dashboard route metadata.

```json
{
  "data": [
    {
      "id": "city-risk-map",
      "label": "City Risk Map",
      "href": "/dashboard/city-risk-map",
      "title": "City Risk Map",
      "subtitle": "Live spatial risk monitoring across stations, violations, and field-unit availability.",
      "searchPlaceholder": "Search zones, active vehicles, or station IDs..."
    }
  ]
}
```

## 2. City Risk Map Dashboard

Frontend route: `/dashboard/city-risk-map`

### `GET /api/v1/dashboards/city-risk-map/summary`

Used by the stat cards.

Query params: `window`, `zoneId`, `stationId`, `violationType`

```json
{
  "data": {
    "generatedAt": "2026-06-19T09:30:00+05:30",
    "stats": [
      {
        "id": "total-active",
        "label": "Total Active",
        "value": 1248,
        "delta": 18,
        "trend": "up",
        "tone": "primary"
      },
      {
        "id": "predicted-24h",
        "label": "Predicted 24h",
        "value": 3105,
        "delta": 0,
        "trend": "flat",
        "tone": "tertiary"
      }
    ]
  }
}
```

### `GET /api/v1/dashboards/city-risk-map/hotspots`

Used by the right sidebar hotspot list and search.

Query params: `window`, `q`, `limit`, `zoneId`, `stationId`, `violationType`

```json
{
  "data": [
    {
      "id": "zone-financial-district-alpha",
      "rank": 1,
      "zoneId": "Z-01A",
      "zoneName": "Financial District Alpha",
      "shortName": "Fin. District",
      "detail": "Est. 120 violations",
      "estimatedViolations": 120,
      "riskScore": 98,
      "riskLevel": "critical",
      "badgeLabel": "Critical"
    }
  ],
  "meta": {
    "total": 4
  }
}
```

### `GET /api/v1/dashboards/city-risk-map/map`

Used by the map canvas, hotspot pins, selected hotspot details, and violation mix panel.

Query params: `window`, `zoneId`, `stationId`, `violationType`

```json
{
  "data": {
    "viewport": {
      "center": { "lat": 28.6139, "lng": 77.209 },
      "zoom": 12
    },
    "pins": [
      {
        "id": "pin-z01a",
        "zoneId": "Z-01A",
        "zoneName": "Financial District Alpha",
        "lat": 28.628,
        "lng": 77.218,
        "riskScore": 98,
        "riskLevel": "critical",
        "estimatedViolations": 120
      }
    ],
    "selectedZone": {
      "zoneId": "Z-01A",
      "zoneName": "Financial District Alpha",
      "riskScore": 98,
      "riskLevel": "critical",
      "violationMix": [
        {
          "type": "double_parking",
          "label": "Double Parking",
          "percentage": 45,
          "count": 54
        },
        {
          "type": "loading_zone_blocked",
          "label": "Loading Zone Blocked",
          "percentage": 30,
          "count": 36
        }
      ],
      "actions": [
        { "type": "dispatch", "label": "Dispatch", "enabled": true },
        { "type": "details", "label": "Details", "enabled": true }
      ]
    }
  }
}
```

### `POST /api/v1/dispatches`

Triggered by the City Risk Map `Dispatch` button.

Request:

```json
{
  "zoneId": "Z-01A",
  "priority": "critical",
  "recommendedUnits": {
    "officers": 4,
    "towTrucks": 1
  },
  "reason": "High predicted parking violation risk"
}
```

Response:

```json
{
  "data": {
    "dispatchId": "DSP-20260619-0001",
    "status": "queued",
    "createdAt": "2026-06-19T09:31:00+05:30"
  }
}
```

## 3. Analytics Dashboard

Frontend route: `/dashboard/analytics`

### `GET /api/v1/dashboards/analytics/summary`

Used by executive KPI cards.

Query params: `from`, `to`, `window`, `zoneId`

```json
{
  "data": {
    "generatedAt": "2026-06-19T09:30:00+05:30",
    "kpis": [
      {
        "id": "overall-city-risk",
        "label": "Overall City Risk Level",
        "value": "Critical",
        "numericValue": 92,
        "unit": "score",
        "detail": "92/100",
        "subdetail": "+14 pts vs baseline",
        "tone": "error"
      },
      {
        "id": "critical-zones",
        "label": "Critical Zones Today",
        "value": 14,
        "detail": "Downtown Core Sector 7",
        "subdetail": "North Stadium Arterial",
        "tone": "tertiary"
      }
    ]
  }
}
```

### `GET /api/v1/dashboards/analytics/geographic-concentration`

Used by the geographic concentration map.

Query params: `from`, `to`, `window`, `zoneId`

```json
{
  "data": {
    "mode": ["live", "historical"],
    "clusters": [
      {
        "id": "cluster-downtown-7",
        "zoneId": "Z-07",
        "zoneName": "Downtown Sector 7",
        "lat": 28.628,
        "lng": 77.218,
        "density": 0.94,
        "riskLevel": "critical",
        "violationCount": 245
      }
    ]
  }
}
```

### `GET /api/v1/dashboards/analytics/hotspots`

Used by the recurring hotspots panel.

Query params: `from`, `to`, `window`, `limit`

```json
{
  "data": [
    {
      "id": "downtown-sector-7",
      "label": "Downtown Sector 7",
      "value": 245,
      "riskLevel": "critical"
    },
    {
      "id": "north-stadium-arterial",
      "label": "North Stadium Arterial",
      "value": 182,
      "riskLevel": "elevated"
    }
  ]
}
```

### `GET /api/v1/dashboards/analytics/charts`

Used by violations-by-hour chart, 7-day trend chart, and violation breakdown.

Query params: `from`, `to`, `window`, `zoneId`, `violationType`

```json
{
  "data": {
    "violationsByHour": [
      { "slot": "08:00", "value": 6 },
      { "slot": "10:00", "value": 8 }
    ],
    "sevenDayTrend": [
      { "date": "2026-06-15", "label": "Mon", "alpha": 22, "beta": 18 },
      { "date": "2026-06-16", "label": "Tue", "alpha": 25, "beta": 22 }
    ],
    "trendDeltaPercentage": 4.2,
    "violationBreakdown": [
      {
        "type": "no_parking",
        "label": "No Parking",
        "percentage": 45,
        "count": 450
      },
      {
        "type": "loading_zone",
        "label": "Loading Zone",
        "percentage": 30,
        "count": 300
      }
    ]
  }
}
```

## 4. Prediction Center Dashboard

Frontend route: `/dashboard/prediction-center`

### `GET /api/v1/dashboards/prediction-center/summary`

Used by forecast KPI cards.

Query params: `horizonDays`, `zoneId`, `modelVersion`

```json
{
  "data": {
    "generatedAt": "2026-06-19T09:30:00+05:30",
    "horizonDays": 7,
    "cards": [
      {
        "id": "projected-violations",
        "label": "Projected Violations",
        "value": 14285,
        "delta": 12.4,
        "trend": "up",
        "detail": "Expected next 7 days based on current trajectory.",
        "tone": "error"
      },
      {
        "id": "high-risk-zones",
        "label": "High Risk Zones Detected",
        "value": 8,
        "total": 45,
        "detail": "Sector Alpha requires immediate intervention.",
        "tone": "tertiary"
      }
    ]
  }
}
```

### `GET /api/v1/dashboards/prediction-center/confidence-trend`

Used by the confidence trend chart.

Query params: `horizonDays`, `zoneId`, `modelVersion`

```json
{
  "data": [
    {
      "date": "2026-06-15",
      "label": "Mon",
      "alpha": 78,
      "beta": 72
    },
    {
      "date": "2026-06-16",
      "label": "Tue",
      "alpha": 82,
      "beta": 75
    }
  ]
}
```

### `GET /api/v1/dashboards/prediction-center/ledger`

Used by the detailed forecast ledger table.

Query params: `horizonDays`, `zoneId`, `riskLevel`, `page`, `pageSize`, `sort`

```json
{
  "data": [
    {
      "zoneId": "Z-01A",
      "zoneName": "Financial District",
      "displayName": "Z-01A Financial District",
      "estimatedViolations": 450,
      "confidence": 98,
      "riskLevel": "critical",
      "riskLabel": "Critical",
      "congestionImpact": "severe",
      "impactLabel": "Severe",
      "recommendedAction": "deploy_unit",
      "recommendedActionLabel": "Deploy Unit"
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 25,
    "total": 4
  }
}
```

### `GET /api/v1/dashboards/prediction-center/scenarios`

Used by the Scenario Engine panel.

Query params: `horizonDays`, `zoneId`

```json
{
  "data": [
    {
      "id": "model-a-baseline",
      "label": "Model A (Baseline)",
      "name": "Status Quo Routing",
      "status": "active",
      "projectedTotal": 14285
    },
    {
      "id": "model-b-max-enforcement",
      "label": "Model B (What-If)",
      "name": "Max Enforcement",
      "status": "draft",
      "projectedTotal": 11040
    }
  ]
}
```

### `POST /api/v1/dashboards/prediction-center/scenarios/run`

Triggered by `Run Simulation`.

Request:

```json
{
  "horizonDays": 7,
  "zoneIds": ["Z-01A", "Z-12C"],
  "scenario": {
    "name": "Max Enforcement",
    "officerCapacity": 115,
    "towTruckCapacity": 27,
    "strategy": "max_enforcement"
  }
}
```

Response:

```json
{
  "data": {
    "scenarioId": "SCN-20260619-001",
    "status": "completed",
    "projectedTotal": 11040,
    "projectedReductionPercentage": 22.7,
    "completedAt": "2026-06-19T09:32:00+05:30"
  }
}
```

### `POST /api/v1/dashboards/prediction-center/models/retrain`

Triggered by `Retrain Model`.

Request:

```json
{
  "model": "alpha",
  "trainingWindowDays": 90,
  "includeLiveSensorFeeds": true
}
```

Response:

```json
{
  "data": {
    "jobId": "TRAIN-20260619-001",
    "status": "queued",
    "queuedAt": "2026-06-19T09:33:00+05:30"
  }
}
```

## 5. Resource Allocation Dashboard

Frontend route: `/dashboard/resource-allocation`

### `GET /api/v1/dashboards/resource-allocation/summary`

Used by the summary stat cards.

Query params: `planningWindow`, `zoneId`

```json
{
  "data": {
    "planId": "PLAN-20260619-001",
    "generatedAt": "2026-06-19T09:30:00+05:30",
    "stats": [
      {
        "id": "total-active-resources",
        "label": "Total Active Resources",
        "value": 142,
        "delta": 12,
        "trend": "up",
        "tone": "primary"
      },
      {
        "id": "projected-coverage",
        "label": "Projected Coverage",
        "value": 94.5,
        "unit": "percentage",
        "delta": 2.1,
        "trend": "up",
        "tone": "primary"
      }
    ]
  }
}
```

### `GET /api/v1/dashboards/resource-allocation/plan`

Used by AI zone assignments, simulation parameters, and impact prediction.

Query params: `planningWindow`, `zoneId`, `limit`

```json
{
  "data": {
    "planId": "PLAN-20260619-001",
    "status": "draft",
    "simulationParameters": {
      "availableOfficers": 115,
      "availableTowTrucks": 27
    },
    "impactMetrics": [
      {
        "id": "congestion-index",
        "label": "Congestion Index",
        "before": 78,
        "after": 58,
        "changePercentage": -15
      },
      {
        "id": "active-violations",
        "label": "Active Violations",
        "before": 68,
        "after": 49,
        "changePercentage": -28
      }
    ],
    "zoneAssignments": [
      {
        "zoneId": "Z-01",
        "zoneName": "Downtown Core",
        "displayName": "Downtown Core (Z-01)",
        "detail": "High Congestion Alert",
        "officers": 24,
        "towTrucks": 8,
        "priority": "critical",
        "priorityLabel": "Critical",
        "estimatedReductionPercentage": -42
      }
    ],
    "meta": {
      "showing": 5,
      "totalZones": 22
    }
  }
}
```

### `POST /api/v1/dashboards/resource-allocation/simulations`

Triggered by `Run AI Simulation`.

Request:

```json
{
  "planningWindow": "today",
  "availableOfficers": 115,
  "availableTowTrucks": 27,
  "constraints": {
    "maxOfficersPerZone": 24,
    "maxTowTrucksPerZone": 8,
    "includeLowPriorityZones": true
  }
}
```

Response:

```json
{
  "data": {
    "simulationId": "SIM-20260619-001",
    "planId": "PLAN-20260619-002",
    "status": "completed",
    "projectedCoverage": 94.5,
    "expectedViolationReductionPercentage": 28,
    "createdAt": "2026-06-19T09:34:00+05:30"
  }
}
```

### `POST /api/v1/dashboards/resource-allocation/plans/{planId}/approve`

Triggered by `Approve Plan`.

Request:

```json
{
  "approvedBy": "current-user-id",
  "notes": "Approved from NoParkPro dashboard"
}
```

Response:

```json
{
  "data": {
    "planId": "PLAN-20260619-001",
    "status": "approved",
    "approvedAt": "2026-06-19T09:35:00+05:30"
  }
}
```

### `POST /api/v1/dashboards/resource-allocation/plans/{planId}/revert`

Triggered by `Revert`.

Request:

```json
{
  "reason": "Restore previous allocation plan"
}
```

Response:

```json
{
  "data": {
    "planId": "PLAN-20260619-0009",
    "status": "active",
    "revertedAt": "2026-06-19T09:36:00+05:30"
  }
}
```

### `GET /api/v1/dashboards/resource-allocation/plans/{planId}/export`

Triggered by `Export Plan`.

Query params: `format=csv|xlsx|pdf`

Response options:

- For file download: return the binary file with a correct `Content-Type` and `Content-Disposition`.
- For async export:

```json
{
  "data": {
    "exportId": "EXP-20260619-001",
    "status": "ready",
    "downloadUrl": "https://backend.example.com/downloads/EXP-20260619-001.csv",
    "expiresAt": "2026-06-19T10:36:00+05:30"
  }
}
```

## 6. Settings Dashboard

Frontend route: `/dashboard/settings`

The current page is a placeholder. These endpoints are recommended for the planned settings area.

### `GET /api/v1/settings`

```json
{
  "data": {
    "timezone": "Asia/Calcutta",
    "defaultPlanningWindow": "today",
    "alertThresholds": {
      "criticalRiskScore": 90,
      "highRiskScore": 75
    },
    "notifications": {
      "email": true,
      "dashboard": true
    }
  }
}
```

### `PATCH /api/v1/settings`

```json
{
  "timezone": "Asia/Calcutta",
  "defaultPlanningWindow": "today",
  "alertThresholds": {
    "criticalRiskScore": 90,
    "highRiskScore": 75
  },
  "notifications": {
    "email": true,
    "dashboard": true
  }
}
```

Response:

```json
{
  "data": {
    "updated": true,
    "updatedAt": "2026-06-19T09:37:00+05:30"
  }
}
```

## Suggested MVP Endpoint Set

If the backend team wants the smallest useful first version, implement these first:

1. `GET /api/v1/dashboards/city-risk-map/summary`
2. `GET /api/v1/dashboards/city-risk-map/hotspots`
3. `GET /api/v1/dashboards/city-risk-map/map`
4. `GET /api/v1/dashboards/analytics/summary`
5. `GET /api/v1/dashboards/analytics/charts`
6. `GET /api/v1/dashboards/prediction-center/summary`
7. `GET /api/v1/dashboards/prediction-center/confidence-trend`
8. `GET /api/v1/dashboards/prediction-center/ledger`
9. `GET /api/v1/dashboards/resource-allocation/summary`
10. `GET /api/v1/dashboards/resource-allocation/plan`

Action endpoints can follow once the buttons are wired to mutations.

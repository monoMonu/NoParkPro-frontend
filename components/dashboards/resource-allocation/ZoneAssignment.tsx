import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Download } from 'lucide-react'
import React from 'react'
import { zoneAssignments } from './data'
import { Badge } from '@/components/ui/badge'

const ZoneAssignment = () => {
  return (
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
  )
}

export default ZoneAssignment
import { CityMapCanvas } from "./CityMapCanvas";
import { FilterBar } from "./FilterBar";
import { HotspotSidebar } from "./HotspotSidebar";
import { StatCards } from "./StatCards";

export function CityRiskMapDashboard() {
  return (
    <>
      <FilterBar />
      <div className="overflow-hidden rounded-lg border border-outline-variant">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative">
            <div className="absolute left-6 right-6 top-6 z-10">
              <StatCards />
            </div>
            <CityMapCanvas />
          </div>
          <HotspotSidebar />
        </div>
      </div>
    </>
  );
}

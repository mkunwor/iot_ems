import React from "react";
import DeviceStatus from "./DeviceStatus";
import AlarmSituation from "./AlarmSituation";
import AlarmDistribution from "./AlarmDistribution";
import MapView from "./MapView";
import AlarmDetails from "./AlarmDetails";
import EnergyStats from "./EnergyStats";
import EnergyTrendChart from "./EnergyTrendChart";
import CarbonEmissionsChart from "./CarbonEmissionsChart";

const MainDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-4">
        <DeviceStatus />
        <AlarmSituation />
        <AlarmDistribution />
      </div>
      <div className="space-y-4">
        <MapView />
        <AlarmDetails />
      </div>
      <div className="space-y-4">
        <EnergyStats />
        <EnergyTrendChart />
        <CarbonEmissionsChart />
      </div>
    </div>
  );
};

export default MainDashboard;

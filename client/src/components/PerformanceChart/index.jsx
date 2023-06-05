import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

function PerformanceChart({ performances }) {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={performances}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis/>
      <Radar
        name="Performance"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}

export default PerformanceChart;

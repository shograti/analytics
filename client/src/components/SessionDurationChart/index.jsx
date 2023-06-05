import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SessionDurationChart({ sessions }) {
  const data = sessions.map((session, index) => ({
    name: index + 1,
    pv: session.sessionLength,
  }));

  return (
    <LineChart width={258} height={263} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    </LineChart>
  );
}

export default SessionDurationChart;

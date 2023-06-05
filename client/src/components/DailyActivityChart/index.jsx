import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const DailyActivityChart = ({ sessions }) => {

  const data = sessions.map((session, index) => ({
    name: index + 1,
    kilograms: session.kilogram,
    kcal: session.calories,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis orientation="right" />
        <Tooltip />
        <Bar
          name=" "
          dataKey="kilograms"
          fill="#282D30"
          barSize={10}
          radius={5}
        />
        <Bar name="" dataKey="kcal" fill="#E60000" barSize={10} radius={5} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyActivityChart;

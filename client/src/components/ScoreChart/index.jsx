import { Cell, Label, Pie, PieChart } from "recharts";

function ScoreChart({ score }) {
  console.log(score);
  const scoreInAngle = (score / 100) * 360;
  console.log(scoreInAngle);
  const data = [{ score: scoreInAngle }, { score: 360 - scoreInAngle }];
  const COLORS = ["#0088FE", "#FFF"];

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="score"
        startAngle={90}
        endAngle={450}
      >
        <Label
          value={`${score}%`}
          position="center"
        />
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default ScoreChart;

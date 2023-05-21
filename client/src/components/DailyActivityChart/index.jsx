import styles from "./styles.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function DailyActivityChart({ sessions }) {
  const labels = sessions.map((session, index) => index);
  const data = {
    labels,
    datasets: [
      {
        label: "Poids (kg)",
        data: sessions.map((session) => session.kilogram),
        backgroundColor: "#282D30",
        borderRadius: 3,
        barThickness: 10,
      },
      {
        label: "Calories brûlées (kCal)",
        data: sessions.map((session) => session.calories),
        backgroundColor: "#E60000",
        borderRadius: 3,
        barThickness: 10,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default DailyActivityChart;

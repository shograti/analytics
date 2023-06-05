import {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
} from "../api";

import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import proteinsIcon from "../assets/protein-icon.png";

class Model {
  async getUserById(id) {
    const { data } = await getUserById(id);

    const user = {
      userInfos: data.userInfos,
      todayScore: data.todayScore ? data.todayScore * 100 : data.score * 100,
      mainData: [
        {
          value: data.keyData.calorieCount,
          unit: "kCal",
          image: caloriesIcon,
          text: "Calories",
        },
        {
          value: data.keyData.proteinCount,
          unit: "g",
          image: proteinsIcon,
          text: "Protéines",
        },
        {
          value: data.keyData.carbohydrateCount,
          unit: "g",
          image: carbsIcon,
          text: "Glucides",
        },
        {
          value: data.keyData.lipidCount,
          unit: "g",
          image: fatIcon,
          text: "Lipides",
        },
      ],
    };
    return user;
  }

  async getUserActivityById(id) {
    const { data } = await getUserActivityById(id);
    return data.sessions;
  }

  async getUserAverageSessionsById(id) {
    const { data } = await getUserAverageSession(id);
    return data.sessions;
  }

  async getUserPerformanceById(id) {
    const { data } = await getUserPerformance(id);
    const performances = data.data.map((item) => ({
      value: item.value,
      kind: this.translate(data.kind[item.kind]),
    }));
    return performances;
  }

  translate(kind) {
    switch (kind) {
      case "cardio":
        return "Cardio";
      case "energy":
        return "Energie";
      case "endurance":
        return "Endurance";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      default:
        break;
    }
  }
}

const model = new Model();

export default model;

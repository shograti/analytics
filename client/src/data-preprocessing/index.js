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

export const dataProcessor = {
  async getUserById(id) {
    const { data } = await getUserById(id);

    const processedUser = {
      userInfos: data.userInfos,
      todayScore: data.todayScore,
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
    return processedUser;
  },
  async getUserActivityById(id) {
    const { data } = await getUserActivityById(id);
    return data.sessions;
  },
};

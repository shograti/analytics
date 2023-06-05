import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import model from "../../models";
import Welcome from "../../components/Welcome";
import { useEffect, useState } from "react";
import DataCard from "../../components/DataCard";
import DailyActivityChart from "../../components/DailyActivityChart";
import SessionDurationChart from "../../components/SessionDurationChart";
import PerformanceChart from "../../components/PerformanceChart";
import ScoreChart from "../../components/ScoreChart";
const USER_ID = import.meta.env.VITE_APP_USER_ID;

function Dashboard() {
  const [user, setUser] = useState();
  const [dailyActivitySessions, setDailyActivitySessions] = useState();
  const [sessionsDurations, setSessionsDurations] = useState();
  const [performances, setPerformances] = useState();

  useEffect(() => {
    const getUserData = async (id) => {
      const data = await model.getUserById(id);
      setUser(data);
    };
    const getUserDailyActivity = async (id) => {
      const data = await model.getUserActivityById(id);
      setDailyActivitySessions(data);
    };
    const getSessionsDurations = async (id) => {
      const data = await model.getUserAverageSessionsById(id);
      setSessionsDurations(data);
    };
    const getUserPerformance = async (id) => {
      const data = await model.getUserPerformanceById(id);
      setPerformances(data);
    };

    getSessionsDurations(USER_ID);
    getUserDailyActivity(USER_ID);
    getUserData(USER_ID);
    getUserPerformance(USER_ID);

  }, []);

  return (
    <Layout>
      {user ? (
        <>
          <Welcome firstName={user.userInfos.firstName} />
          <div className={styles.main_container}>
            <div className={styles.chart_container}>
              <DailyActivityChart sessions={dailyActivitySessions} />
              <div className={styles.squared_charts_container}>
                <div className={styles.squared_container}>
                  <SessionDurationChart sessions={sessionsDurations} />
                </div>
                <div className={styles.squared_container}>
                  <PerformanceChart performances={performances} />
                </div>
                <div className={styles.squared_container}>
                  <ScoreChart score={user.todayScore} />
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              {user.mainData.map((dataCard, index) => (
                <DataCard
                  key={index}
                  value={dataCard.value}
                  unit={dataCard.unit}
                  image={dataCard.image}
                  text={dataCard.text}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </Layout>
  );
}

export default Dashboard;

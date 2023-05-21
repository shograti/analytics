import styles from "./styles.module.css";
import Layout from "../../components/Layout";
import { dataProcessor } from "../../data-preprocessing";
import Welcome from "../../components/Welcome";
import { useEffect, useState } from "react";
import DataCard from "../../components/DataCard";
import DailyActivityChart from "../../components/DailyActivityChart";

function Dashboard() {
  const [user, setUser] = useState();
  const [sessions, setSessions] = useState();

  useEffect(() => {
    const getUserData = async (id) => {
      const data = await dataProcessor.getUserById(id);
      setUser(data);
    };
    const getUserActivity = async (id) => {
      const data = await dataProcessor.getUserActivityById(id);
      setSessions(data);
    };
    getUserActivity(12);
    getUserData(12);
  }, []);

  return (
    <Layout>
      {user ? (
        <>
          <Welcome firstName={user.userInfos.firstName} />
          <div className={styles.main_container}>
            <div className={styles.chart_container}>
              <DailyActivityChart sessions={sessions} />
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

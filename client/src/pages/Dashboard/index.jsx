import styles from './styles.module.css';
import Layout from '../../components/Layout';
import { getUserById } from '../../api';
import Welcome from '../../components/Welcome';
import { useEffect, useState } from 'react';
import DataCard from '../../components/DataCard';
import caloriesIcon from '../../assets/calories-icon.png';
import carbsIcon from '../../assets/carbs-icon.png';
import fatIcon from '../../assets/fat-icon.png';
import proteinsIcon from '../../assets/protein-icon.png';

function Dashboard() {
  const [user, setUser] = useState();
  const [dataCards, setDataCards] = useState([]);

  useEffect(() => {
    getUserById(12).then((data) => {
      setUser(data.data);
    });
  }, []);

  useEffect(() => {
    if (user) {
      setDataCards([
        {
          value: user.keyData.calorieCount,
          unit: 'kCal',
          image: caloriesIcon,
          text: 'Calories',
        },
        {
          value: user.keyData.proteinCount,
          unit: 'g',
          image: proteinsIcon,
          text: 'Protéines',
        },
        {
          value: user.keyData.carbohydrateCount,
          unit: 'g',
          image: carbsIcon,
          text: 'Glucides',
        },
        {
          value: user.keyData.lipidCount,
          unit: 'g',
          image: fatIcon,
          text: 'Lipides',
        },
      ]);
    }
  }, [user]);

  return (
    <Layout>
      {user && (
        <>
          <Welcome firstName={user.userInfos.firstName} />
          <div className={styles.card_container}>
            {dataCards.map((dataCard, index) => (
              <DataCard
                key={index}
                value={dataCard.value}
                unit={dataCard.unit}
                image={dataCard.image}
                text={dataCard.text}
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}

export default Dashboard;

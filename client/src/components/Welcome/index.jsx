import styles from './styles.module.css';

function Welcome({ firstName }) {
  return (
    <div className={styles.welcome}>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs d'hier 👏</h2>
    </div>
  );
}

export default Welcome;

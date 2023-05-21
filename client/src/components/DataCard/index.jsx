import styles from './styles.module.css';

function DataCard({ value, unit, image, text }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={text} />
      <div className={styles.text_container}>
        <p className={styles.emphasized_text}>
          {value}
          {unit}
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default DataCard;

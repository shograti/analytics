import styles from './styles.module.css';
import fitnessIcon from '../../assets/fitness.png';
import yogaIcon from '../../assets/yoga.png';
import ridingIcon from '../../assets/riding.png';
import swimmingIcon from '../../assets/swimming.png';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.icons}>
        <img src={yogaIcon} alt="yoga" />
        <img src={swimmingIcon} alt="swimming" />
        <img src={ridingIcon} alt="riding" />
        <img src={fitnessIcon} alt="fitness" />
      </div>
      <p className={styles.copyright}>Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;

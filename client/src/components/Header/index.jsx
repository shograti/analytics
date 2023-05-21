import styles from './styles.module.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <img src={logo} alt="logo" />
        <a href="/">Accueil</a>
        <a href="/">Profil</a>
        <a href="/">Réglages</a>
        <a href="/">Communauté</a>
      </nav>
    </header>
  );
}

export default Header;

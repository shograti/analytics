import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
}

export default Layout;

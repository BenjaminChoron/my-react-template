import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.navbar__link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navbar__link} to="/page">
        Page
      </NavLink>
    </nav>
  );
}

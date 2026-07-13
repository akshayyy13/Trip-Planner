import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          <NavLink to="/" className={styles.logo}>
            🌴 Kerala Trip 2026
          </NavLink>

          <nav className={styles.navigation}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/itinerary"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Itinerary
            </NavLink>

            <NavLink
              to="/transport"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Transport
            </NavLink>

            <NavLink
              to="/hotels"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Hotels
            </NavLink>

            <NavLink
              to="/budget"
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              Budget
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

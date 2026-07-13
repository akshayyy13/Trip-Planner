import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h2>🌴 Kerala Trip 2026</h2>

            <p>Your complete travel planner for our Kerala adventure.</p>
          </div>

          <div className={styles.info}>
            <div className={styles.item}>
              <span>📅</span>
              <div>
                <strong>Trip</strong>
                <p>11–20 September 2026</p>
              </div>
            </div>

            <div className={styles.item}>
              <span>👥</span>
              <div>
                <strong>Travellers</strong>
                <p>4 People</p>
              </div>
            </div>

            <div className={styles.item}>
              <span>🚆</span>
              <div>
                <strong>Transport</strong>
                <p>Train • Car • Boat</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>Made with ❤️ by Akshay</span>

          <span>© 2026 Kerala Trip Planner</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

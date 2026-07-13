import { motion } from "framer-motion";

import { trip } from "../../../data/trip";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.badge}>🌴 Kerala Trip Planner 2026</span>

        <h1>{trip.title}</h1>

        <p>
          {trip.startDate} • {trip.endDate}
        </p>

        <div className={styles.info}>
          <div className={styles.item}>
            <span>👥</span>

            <div>
              <h3>{trip.members}</h3>
              <p>Travellers</p>
            </div>
          </div>

          <div className={styles.item}>
            <span>🚗</span>

            <div>
              <h3>{trip.vehicle}</h3>
              <p>Transport</p>
            </div>
          </div>

          <div className={styles.item}>
            <span>🧳</span>

            <div>
              <h3>
                {trip.luggage.trolleyPerPerson} +{" "}
                {trip.luggage.backpackPerPerson}
              </h3>

              <p>Per Person</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

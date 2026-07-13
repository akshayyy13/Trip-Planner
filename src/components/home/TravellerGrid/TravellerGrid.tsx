import { motion } from "framer-motion";

import { travellers } from "../../../data/travellers";

import Card from "../../common/Card/Card";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

import styles from "./TravellerGrid.module.css";

function TravellerGrid() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="👥 Travellers"
        subtitle="Everyone's starting point, destination and travel status."
      />

      <div className={styles.grid}>
        {travellers.map((traveller, index) => (
          <motion.div
            key={traveller.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
            }}
          >
            <Card>
              <div
                className={styles.avatar}
                style={{ backgroundColor: traveller.color }}
              >
                {traveller.name.charAt(0)}
              </div>

              <h3>{traveller.name}</h3>

              <span className={styles.city}>📍 {traveller.city}</span>

              <div className={styles.details}>
                <div>
                  <strong>From</strong>
                  <span>{traveller.startLocation}</span>
                </div>

                <div>
                  <strong>To</strong>
                  <span>{traveller.destination}</span>
                </div>

                <div>
                  <strong>Arrival</strong>
                  <span>Kochi</span>
                </div>
              </div>

              {traveller.train && (
                <div className={styles.train}>🚆 {traveller.train}</div>
              )}

              <div className={styles.status}>
                <span className={styles.dot} />
                Confirmed
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TravellerGrid;

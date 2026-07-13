import { motion } from "framer-motion";

import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

import { itinerary } from "../../../data/itinerary";

import styles from "./TripTimeline.module.css";

function TripTimeline() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="🗺️ Trip Timeline"
        subtitle="Complete day-wise itinerary for the Kerala adventure."
      />

      <div className={styles.timeline}>
        {itinerary.map((day, index) => (
          <motion.article
            key={day.day}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
            }}
          >
            <div className={styles.dayHeader}>
              <div>
                <span className={styles.day}>Day {day.day}</span>

                <h3>{day.title}</h3>

                <p>{day.date}</p>
              </div>

              <span className={styles.count}>
                {day.activities.length} Activities
              </span>
            </div>

            <div className={styles.activities}>
              {day.activities.map((activity) => (
                <div
                  key={`${day.day}-${activity.time}-${activity.title}`}
                  className={styles.activity}
                >
                  <div className={styles.time}>{activity.time}</div>

                  <div className={styles.dot} />

                  <div className={styles.content}>
                    <h4>{activity.title}</h4>

                    <p>{activity.description}</p>

                    <div className={styles.badges}>
                      {activity.preBook && (
                        <span className={styles.prebook}>Pre-book</span>
                      )}

                      {activity.location && (
                        <span className={styles.location}>
                          📍 {activity.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              🏨 Stay : <strong>{day.stay}</strong>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default TripTimeline;

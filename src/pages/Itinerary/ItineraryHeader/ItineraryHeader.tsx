import { CalendarDays, MapPinned } from "lucide-react";

import styles from "./ItineraryHeader.module.css";

function ItineraryHeader() {
  return (
    <section className={styles.header}>
      {" "}
      <div>
        {" "}
        <h1>Kerala Trip Itinerary</h1>{" "}
        <p>
          {" "}
          12 September 2026 – 20 September 2026 • Kochi → Munnar → Thekkady →
          Varkala → Kovalam → Trivandrum{" "}
        </p>{" "}
      </div>{" "}
      <div className={styles.stats}>
        {" "}
        <div className={styles.item}>
          {" "}
          <CalendarDays size={20} /> <span>9 Days</span>{" "}
        </div>{" "}
        <div className={styles.item}>
          {" "}
          <MapPinned size={20} /> <span>650+ km</span>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default ItineraryHeader;

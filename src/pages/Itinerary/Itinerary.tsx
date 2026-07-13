import DayCard from "../../features/itinerary/DayCard/DayCard";
import ItineraryHeader from "./ItineraryHeader/ItineraryHeader";

import { itinerary } from "../../data/itinerary";

import styles from "./Itinerary.module.css";

function Itinerary() {
  return (
    <section className={styles.page}>
      <div className="container">
        <ItineraryHeader />

        <div className={styles.days}>
          {itinerary.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Itinerary;

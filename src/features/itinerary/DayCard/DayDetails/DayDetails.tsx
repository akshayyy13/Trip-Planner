import ActivityItem from "./ActivityItem/ActivityItem";
import BookingCard from "./BookingCard/BookingCard";
import HotelCard from "./HotelCard/HotelCard";
import LuggageCard from "./LuggageCard/LuggageCard";
import SummaryCard from "./SummaryCard/SummaryCard";

import type { TripDay } from "../../../../types/itinerary";

import styles from "./DayDetails.module.css";

interface DayDetailsProps {
  day: TripDay;
}

function DayDetails({ day }: DayDetailsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {day.activities.map((activity, index) => (
          <ActivityItem key={`${day.day}-${index}`} activity={activity} />
        ))}
      </div>

      <aside className={styles.sidebar}>{/* Existing cards here */}</aside>
    </div>
  );
}

export default DayDetails;

import { getTripCountdown } from "../../../utils/date";

import { trip } from "../../../data/trip";

import "./CountdownCard.css";

function CountdownCard() {
  const days = getTripCountdown(trip.startDate);

  return (
    <section className="countdown">
      <h2>{days} Days Left</h2>

      <p>{trip.title}</p>

      <span>
        {trip.startDate} → {trip.endDate}
      </span>
    </section>
  );
}

export default CountdownCard;

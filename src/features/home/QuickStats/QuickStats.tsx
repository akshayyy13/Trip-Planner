import {
  CalendarDays,
  Users,
  Car,
  Hotel,
  MapPinned,
  Ticket,
  Train,
  Backpack,
} from "lucide-react";

import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

import useTripStats from "../../../hooks/useTripStats";

import styles from "./QuickStats.module.css";

function QuickStats() {
  const stats = useTripStats();

  const cards = [
    {
      title: "Trip Days",
      value: stats.tripDays,
      icon: CalendarDays,
    },
    {
      title: "Travellers",
      value: stats.travellers,
      icon: Users,
    },
    {
      title: "Vehicle",
      value: "Innova",
      icon: Car,
    },
    {
      title: "Hotel Nights",
      value: stats.hotelNights,
      icon: Hotel,
    },
    {
      title: "Destinations",
      value: stats.destinations,
      icon: MapPinned,
    },
    {
      title: "Pre-bookings",
      value: stats.totalPreBookings,
      icon: Ticket,
    },
    {
      title: "Train Trips",
      value: stats.trainTrips,
      icon: Train,
    },
    {
      title: "Luggage",
      value: "1+1",
      icon: Backpack,
    },
  ];

  return (
    <section className={styles.section}>
      <SectionHeader
        title="📊 Trip Overview"
        subtitle="Everything important at a glance."
      />

      <div className={styles.grid}>
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article key={card.title} className={styles.card}>
              <div className={styles.icon}>
                <Icon size={28} />
              </div>

              <h3>{card.value}</h3>

              <p>{card.title}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default QuickStats;

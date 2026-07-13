import { CheckCircle2, Circle, AlertTriangle } from "lucide-react";

import Card from "../../../components/common/Card/Card";
import Badge from "../../../components/common/Badge/Badge";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

import { bookings } from "../../../data/bookings";

import styles from "./BookingChecklist.module.css";

function BookingChecklist() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="🎟 Booking Checklist"
        subtitle="Complete these before starting the trip."
      />

      <div className={styles.grid}>
        {bookings.map((booking) => (
          <Card key={booking.id}>
            <div className={styles.header}>
              <div>
                {booking.completed ? (
                  <CheckCircle2 size={26} color="#16a34a" />
                ) : (
                  <Circle size={26} color="#9ca3af" />
                )}
              </div>

              {booking.mandatory ? (
                <Badge variant="danger">Mandatory</Badge>
              ) : (
                <Badge variant="info">Optional</Badge>
              )}
            </div>

            <h3>{booking.title}</h3>

            <p>{booking.category}</p>

            <div className={styles.footer}>
              <span>{booking.estimatedCost}</span>

              <div className={styles.due}>
                <AlertTriangle size={16} />

                {booking.due}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default BookingChecklist;

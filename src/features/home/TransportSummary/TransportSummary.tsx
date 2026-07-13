import { Car, Train, Bike, Footprints } from "lucide-react";

import Card from "../../../components/common/Card/Card";
import Badge from "../../../components/common/Badge/Badge";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

import { transport } from "../../../data/transport";

import styles from "./TransportSummary.module.css";

function TransportSummary() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Train":
        return <Train size={24} />;

      case "Car":
        return <Car size={24} />;

      case "Scooter":
        return <Bike size={24} />;

      default:
        return <Footprints size={24} />;
    }
  };

  const getVariant = (status: string): "success" | "warning" | "info" => {
    switch (status) {
      case "Booked":
        return "success";

      case "Pending":
        return "warning";

      default:
        return "info";
    }
  };

  return (
    <section className={styles.section}>
      <SectionHeader
        title="🚗 Transport"
        subtitle="Travel bookings and rentals."
      />

      <div className={styles.grid}>
        {transport.map((item) => (
          <Card key={item.id}>
            <div className={styles.header}>
              {getIcon(item.type)}

              <Badge variant={getVariant(item.status)}>{item.status}</Badge>
            </div>

            <h3>{item.title}</h3>

            <p>{item.provider}</p>

            <div className={styles.footer}>
              <span>{item.price}</span>

              <small>{item.note}</small>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default TransportSummary;

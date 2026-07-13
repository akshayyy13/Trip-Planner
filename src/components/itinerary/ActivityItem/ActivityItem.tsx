import {
  Clock3,
  MapPin,
  Timer,
  Backpack,
  IndianRupee,
  ExternalLink,
  Star,
} from "lucide-react";

import Badge from "../../common/Badge/Badge";

import type { Activity } from "../../../types/itinerary";

import styles from "./ActivityItem.module.css";

interface ActivityItemProps {
  activity: Activity;
}

function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.time}>
        <Clock3 size={18} />

        {activity.time}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{activity.title}</h3>

          {activity.highlight && <Badge variant="warning">Highlight</Badge>}
        </div>

        <p>{activity.description}</p>

        <div className={styles.info}>
          {activity.duration && (
            <span>
              <Timer size={16} />

              {activity.duration}
            </span>
          )}

          {activity.location && (
            <span>
              <MapPin size={16} />

              {activity.location}
            </span>
          )}

          {activity.estimatedCost && (
            <span>
              <IndianRupee size={16} />

              {activity.estimatedCost}
            </span>
          )}

          {activity.luggage && (
            <span>
              <Backpack size={16} />

              {activity.luggage}
            </span>
          )}
        </div>

        {activity.maps && (
          <a
            href={activity.maps}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Google Maps
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ActivityItem;

import { useState } from "react";
import DayDetails from "./DayDetails/DayDetails";
import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Hotel,
  Route,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import Card from "../../../components/common/Card/Card";
import Badge from "../../../components/common/Badge/Badge";

import ActivityItem from "./DayDetails/ActivityItem/ActivityItem";

import type { TripDay } from "../../../types/itinerary";

import styles from "./DayCard.module.css";

interface DayCardProps {
  day: TripDay;
}

function DayCard({ day }: DayCardProps) {
  const [expanded, setExpanded] = useState(day.day === 1);

  return (
    <Card padding="lg">
      <button
        className={styles.header}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div>
          <Badge variant="success">Day {day.day}</Badge>

          <h2>{day.title}</h2>

          <div className={styles.meta}>
            <span>
              <CalendarDays size={16} />
              {day.date}
            </span>

            <span>
              <Hotel size={16} />
              Stay : {day.stay}
            </span>
          </div>
        </div>

        {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className={styles.body}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className={styles.route}>
              <Route size={18} />
              {day.title}
            </div>

            <DayDetails day={day} />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export default DayCard;

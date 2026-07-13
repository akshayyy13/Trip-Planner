import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;

  className?: string;

  padding?: "none" | "sm" | "md" | "lg";

  hover?: boolean;
}

function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[padding],
        hover && styles.hover,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;

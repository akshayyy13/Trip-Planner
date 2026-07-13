import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

function Card({
  children,
  hover = true,
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        styles.card,
        hover ? styles.hover : "",
        styles[padding],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

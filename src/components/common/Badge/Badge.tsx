import type { ReactNode } from "react";

import styles from "./Badge.module.css";

export type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

function Badge({ children, variant = "primary" }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>
  );
}

export default Badge;

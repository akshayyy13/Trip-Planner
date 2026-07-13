import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`${styles.header} ${align === "center" ? styles.center : ""}`}
    >
      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;

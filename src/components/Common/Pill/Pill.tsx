import styles from "./Pill.module.css";

interface IPill {
  children: React.ReactNode;
}

export const Pill = ({ children }: IPill) => {
  return <div className={styles.pill}>{children}</div>;
};

export default Pill;

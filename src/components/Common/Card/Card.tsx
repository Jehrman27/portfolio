import styles from "./Card.module.css";

interface ICard {
  children: React.ReactNode;
}

export const Card = ({ children }: ICard) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;

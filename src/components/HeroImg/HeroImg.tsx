import styles from "./HeroImg.module.css";

interface HeroImgProps {
  src: string;
  alt: string;
}

const HeroImg = (props: HeroImgProps) => {
  return <img {...props} className={styles.hero} />;
};

export default HeroImg;

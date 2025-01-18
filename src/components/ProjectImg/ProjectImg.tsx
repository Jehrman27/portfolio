import styles from "./ProjectImg.module.css";

interface HeroImgProps {
  src: string;
  alt: string;
}

const ProjectImg = (props: HeroImgProps) => {
  return <img {...props} className={styles.hero} />;
};

export default ProjectImg;

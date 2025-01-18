import Card from "../Common/Card/Card";
import ProjectImg from "../ProjectImg/ProjectImg";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <a href="https://calculator.ehrmantraut.me">
        <Card>
          <ProjectImg src="/images/calc.png" alt="Calculator App" />
          <p>Mixed Frameworks with Astro</p>
        </Card>
      </a>
    </div>
  );
};

export default Projects;

import HeroImg from "./components/HeroImg/HeroImg";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };
  return (
    <>
      <section className={styles.hero}>
        <HeroImg
          src="/images/self-hero.jpg"
          alt="hero image of the author in front of a fountain"
        />
        <p>
          Hey, I'm Jonathan Ehrmantraut. I currently work as a Front End
          Developer. This is a space to check out what I'm working on!
        </p>
        <p>(Currently it's this website)</p>
      </section>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <Projects />
      </section>
      <aside className={styles.socials}>
        <Socials />
      </aside>
      <section className={styles.footer}>
        <Footer />
      </section>
      <button onClick={toggleMode} className={styles.toggleMode}>
        {isLightMode ? (
          <img src="./images/dark_mode.svg" alt="dark mode" />
        ) : (
          <img src="./images/light_mode.svg" alt="light mode" />
        )}
      </button>
    </>
  );
}

export default App;

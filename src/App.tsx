import HeroImg from "./components/HeroImg/HeroImg";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Projects from "./components/Projects/Projects";

function App() {
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
    </>
  );
}

export default App;

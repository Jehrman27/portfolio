import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <ul>
        <li>
          <a href="https://github.com/Jehrman27" target="_blank">
            <img src="/images/social-github-white.svg" alt="The GitHub Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonathan-ehrmantraut/"
            target="_blank"
          >
            <img src="/images/social-linkedin.png" alt="The LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a href="mailto:jehrman27@gmail.com">
            <img src="/images/social-email.png" alt="The Email Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Designed and built by Jonathan Ehrmantraut</p>
      <a href="https://www.flaticon.com/free-icons/email" title="email icons">
        Email icon created by BeeLove - Flaticon
      </a>
    </div>
  );
};

export default Footer;

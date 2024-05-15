import styles from "./Footer.module.css";
import navbarItems from "../../utils/constants/navbarItems";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerDescription}>
        <h2 className={styles.footerTittle}>Covid ID</h2>
        <h2 className={styles.footerAuthor}>Develop by aufaroot18</h2>
      </section>
      <section className={styles.footerMenu}>
        {navbarItems.map((item, index) => (
          <li key={index}>
            <ScrollLink
              className="link"
              to={item.link}
              smooth={true}
              duration={500}
            >
              <h4>{item.title}</h4>
            </ScrollLink>
          </li>
        ))}
      </section>
    </footer>
  );
};

export default Footer;

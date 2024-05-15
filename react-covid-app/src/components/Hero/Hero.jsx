import { Element } from "react-scroll";
import styles from "./Hero.module.css"
import hero from "../../assets/hero.svg";
// import Button from "../Button/Button";
const Hero = () => {

    return(
        <Element className={styles.container} name="about">
            <section className={styles.hero}>
                <div className={styles.heroTitle}>
                    <h2>Covid ID</h2>
                    <h3>Monitoring Perkembangan Covid</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since.
                    </p>
                    <button className={styles.heroButton}>Vaccine</button>
                </div>
                <div className={styles.heroImage}>
                    <img src={hero} alt="Movie-img"/>
                </div>
            </section>
        </Element>
    );

};

export default Hero
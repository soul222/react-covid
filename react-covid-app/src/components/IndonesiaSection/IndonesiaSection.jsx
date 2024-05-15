import { Element } from "react-scroll";
import data from "../../utils/constants/indonesia";
import styles from "./IndonesiaSection.module.css";
import formatColor from "../../handler/formatColor";
const IndonesiaSection = () => {

  const { setTotalColor } = formatColor();

  return (
    
    <Element className={styles.container} name="indonesia">
      <div className={styles.indonesiaSectionTitle}>
        <h2>Indonesia</h2>
        <p>Data Covid Indonesia Tahun {data.last_update.split("-")[0]}</p>
      </div>
      <div className={styles.indonesiaSectionDescription}>
        {data.indonesia.map((item, index) => (
          <div className={styles.indonesiaSectionCard} key={index}>
            <h2>{item.status}</h2>
            <h1 style={{ color: setTotalColor(item.status) }}>
              {item.total.toLocaleString("id-ID").replace(/,/g, '.')}
            </h1>
          </div>
        ))}
      </div>
    </Element>

  );

};

export default IndonesiaSection;
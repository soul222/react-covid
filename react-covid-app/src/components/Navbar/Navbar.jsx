/* eslint-disable react/jsx-key */
import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link as ScrollLink} from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';
import navbarItems from "../../utils/constants/navbarItems";

const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <h1>Covid ID</h1>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={showMenu ? `${styles.menu} ${styles.show}` : styles.menu}>
                    {navbarItems.map((item, index) => (
                        <li key={index}>
                            <ScrollLink className="link" to={item.link} smooth={true} duration={500}>
                            <h4>{item.title}</h4>
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
    
};

export default Navbar;

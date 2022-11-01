import React from 'react';
//Components
import CenterMenu from './CenterMenu';
//STYLES
import styles from "./styles/Header.module.css";
//IMAGES
import Logo from "../image/MuzicLogo.png";

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="LogoMusic" />
            <CenterMenu />
            <div className={styles.button}>
                <button>Sign Up</button>
                <button>Log Up</button>

            </div>
        </div>
    );
};

export default Header;
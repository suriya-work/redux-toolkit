import React from 'react';
//STYLES
import styles from './styles/CenterMenu.module.css';

const CenterMenu = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Preformer</li>
                <li>Event Shedule</li>
            </ul>
        </div>
    );
};

export default CenterMenu;
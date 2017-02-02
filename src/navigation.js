import React from 'react';
import styles from './page.css';


export default () => (
    <div id='nav-bar-container' className={styles.navBarContainer}>
        <div className={styles.navBarSpacer} />
        <nav id='nav-bar' className={styles.navBar}>
            <div className={styles.container}>
                <div className={styles.navBarInner}>
                    <a className={styles.navItem} href='#about'>About</a>
                    <a className={styles.navItem} href='#speakers'>Speakers</a>
                    <a className={styles.navItem} href='#schedule'>Schedule</a>
                    <a className={styles.navItem} href='#projects'>Projects</a>
                    <a className={styles.navItem} href='#venue'>Venue</a>
                    <a className={styles.navItem} href='#contact'>Contact</a>
                </div>
            </div>
        </nav>
    </div>
);

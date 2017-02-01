import React from 'react';
import {twitterIcon, githubIcon, clockIcon} from './icons.js';
import styles from './page.css';


const Speaker = ({img, title, author, github, twitter, children}) => (
    <div className={styles.talk}>
        <div className={styles.talkTop}>
            <img alt={author} className={'lazyload ' + styles.talkImage} data-src={img} />

            <div className={styles.talkMeta}>
                <h2 className={styles.talkTitle}>{author}</h2>
                <div className={styles.talkMetaTop}>
                    { false && <div className={styles.talkAuthor}>{author}</div>}
                    {github && <a className={styles.talkIconLink} href={"https://github.com/" + github}>{githubIcon}</a>}
                    {twitter && <a className={styles.talkIconLink} href={"https://twitter.com/" + twitter}>{twitterIcon}</a>}
                </div>
            </div>
        </div>
        {false && <div className={styles.talkWhen}>
            <div className={styles.talkClockIcon}>{clockIcon}</div>
            Sunday 1am
        </div>}
        <div className={styles.talkAbstract}>{children}</div>
    </div>
);




export default () => (
    <div className={styles.talks}>
        <h1>Speakers</h1>

        <section className={styles.talksSection}>
            <Speaker author="Edward Kmett" img={require('../static/ekmett.jpg')} github='ekmett' twitter='kmett'>
                Prolific Haskell programmer, mathematician, lapsed graphics guru and demo scener, defense contractor and financial toolsmith.
            </Speaker>

            <Speaker author="Stephen Diehl" img={require('../static/stephen-diehl.jpg')} github='sdiehl' twitter='smdiehl'>
                Software engineer in Boston, Massachusetts.
                Author of <a href="http://dev.stephendiehl.com/hask/">What I Wish I Knew When Learning Haskell</a>.
            </Speaker>

            <Speaker author="Julie Moronuki" img={require('../static/julie.jpg')}>
                Julie Moronuki is one of the authors of the great <a href="http://haskellbook.com/">Haskell programming from first principles book</a>.
            </Speaker>

            <Speaker author="Neil Mitchell" img={require('../static/ndmitchell.jpg')} github='ndmitchell' twitter='ndm_haskell'>
                Professional Haskell programmer working at Barclays Bank.
                Some of the more famous projects he helped create are Shake,
                Hoogle, and Hlint.
            </Speaker>
        </section>
    </div>
);

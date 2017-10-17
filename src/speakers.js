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


const TimeAndPlace = ({children}) => (
    <div className={styles.speakerTimeAndPlace}>{children}</div>
);


export default () => (
    <div className={styles.talks}>
        <a id='speakers' />
        <h1>Speakers</h1>

        <div className={styles.talksSection}>
            <Speaker author="Niki Vazou" img={require('../static/niki-vazou.jpg')} twitter='nikivazou'>
                Niki Vazou is a post-doc scholar at PLUM of University of Maryland, focusing mostly on refinement types, static program verification, and type systems.  She is the author of <a href="https://ucsd-progsys.github.io/liquidhaskell-blog/">Liquid Haskell</a>, a type system extension to GHC that lets you add sophisticated predicates to type signatures.
            </Speaker>

            <Speaker author="Stephen Diehl" img={require('../static/stephen-diehl.jpg')} github='sdiehl' twitter='smdiehl'>
                Stephen is a Haskell developer, entrepreneur, and financial systems architect from Boston. His open source
                work is around numerical computing, compilers, security, and improving Haskell documentation.
                Author of the amazing <a href="http://dev.stephendiehl.com/hask/">What I Wish I Knew When Learning Haskell</a>.
            </Speaker>

            <Speaker author="Edward Kmett" img={require('../static/ekmett.jpg')} github='ekmett' twitter='kmett'>
                {/* <TimeAndPlace>Keynote on Sunday 10:00</TimeAndPlace> */}
                Prolific Haskell programmer, mathematician, lapsed graphics guru and demo scener, defense contractor, financial toolsmith,
                author of the widely-known <a href="https://github.com/ekmett/lens/">lens</a> library.
            </Speaker>

            <Speaker author="And more..." img={require('../static/unknown-speaker.svg')}>
                Further speakers will be announced
            </Speaker>
        </div>
    </div>
);

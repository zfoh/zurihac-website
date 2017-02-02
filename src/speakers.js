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
        <a id='speakers' />
        <h1>Speakers</h1>

        <section className={styles.talksSection}>
            <Speaker author="Edward Kmett" img={require('../static/ekmett.jpg')} github='ekmett' twitter='kmett'>
                Prolific Haskell programmer, mathematician, lapsed graphics guru and demo scener, defense contractor, financial toolsmith,
                author of the widely-known <a href="https://github.com/ekmett/lens/">lens</a> library.
            </Speaker>

            <Speaker author="Stephen Diehl" img={require('../static/stephen-diehl.jpg')} github='sdiehl' twitter='smdiehl'>
                Stephen is a Haskell developer, entrepreneur, and financial systems architect from Boston. His open source
                work is around numerical computing, compilers, security, and improving Haskell documentation.
                Author of the amazing <a href="http://dev.stephendiehl.com/hask/">What I Wish I Knew When Learning Haskell</a>.
            </Speaker>

            <Speaker author="Julie Moronuki" img={require('../static/julie.jpg')} github='GinBaby' twitter='argumatronic'>
                Julie Moronuki is one of the authors of the great <a href="http://haskellbook.com/">Haskell programming from first principles</a> book.
            </Speaker>

            <Speaker author="Neil Mitchell" img={require('../static/ndmitchell.jpg')} github='ndmitchell' twitter='ndm_haskell'>
                Neil Mitchell has been a Haskell programmer since his PhD at York
                University, where he worked on making functional programs shorter,
                faster and safer. Since then he's worked in industry, taking the
                lessons of functional programming and applying them in finance. Neil
                is the author of numerous open-source Haskell packages including <a href="https://hackage.haskell.org/package/hlint">Hlint</a> (which makes suggestions on how to improve your Haskell code), <a href="https://www.haskell.org/hoogle/">Hoogle</a> (which searches for functions by both name and type signature) and <a href="http://shakebuild.com/">Shake</a> (a build system, being used for the next iteration of the GHC
                build system).
            </Speaker>
        </section>
    </div>
);

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
            <Speaker author="Edward Kmett" img={require('../static/ekmett.jpg')} github='ekmett' twitter='kmett'>
                <TimeAndPlace>Keynote on Sunday 10:00</TimeAndPlace>
                Prolific Haskell programmer, mathematician, lapsed graphics guru and demo scener, defense contractor, financial toolsmith,
                author of the widely-known <a href="https://github.com/ekmett/lens/">lens</a> library.
            </Speaker>

            <Speaker author="Stephen Diehl" img={require('../static/stephen-diehl.jpg')} github='sdiehl' twitter='smdiehl'>
                <TimeAndPlace>Keynote on Saturday 10:00</TimeAndPlace>
                Stephen is a Haskell developer, entrepreneur, and financial systems architect from Boston. His open source
                work is around numerical computing, compilers, security, and improving Haskell documentation.
                Author of the amazing <a href="http://dev.stephendiehl.com/hask/">What I Wish I Knew When Learning Haskell</a>.
            </Speaker>

            <Speaker author="Julie Moronuki" img={require('../static/julie.jpg')} github='GinBaby' twitter='argumatronic'>
                <TimeAndPlace>Keynote on Friday 17:00</TimeAndPlace>
                Julie is a linguist and teacher who decided, on a whim, to learn Haskell. As her interest in lambdas and
                static typing grew, she decided to use her teaching expertise to write a Haskell book for beginners,
                and the result was <a href='http://haskellbook.com/'>Haskell Programming from First Principles</a>.
                Currently she lives in Austin, Texas, where she homeschools her children, adopts too many animals,
                teaches Haskell at a local meetup, and is working on a new book, called The Joy of Haskell.
            </Speaker>

            <Speaker author="Neil Mitchell" img={require('../static/ndmitchell.jpg')} github='ndmitchell' twitter='ndm_haskell'>
                <TimeAndPlace>Keynote on Friday 10:00</TimeAndPlace>
                Neil Mitchell has been a Haskell programmer since his PhD at York
                University, where he worked on making functional programs shorter,
                faster and safer. Since then he's worked in industry, taking the
                lessons of functional programming and applying them in finance. Neil
                is the author of numerous open-source Haskell packages including <a href="https://hackage.haskell.org/package/hlint">Hlint</a> (which makes suggestions on how to improve your Haskell code), <a href="https://www.haskell.org/hoogle/">Hoogle</a> (which searches for functions by both name and type signature) and <a href="http://shakebuild.com/">Shake</a> (a build system, being used for the next iteration of the GHC
                build system).
            </Speaker>

            <Speaker author="Simon Thompson" img={require('../static/simon-thompson.jpg')} twitter='thompson_si'>
                <TimeAndPlace>Keynote on Saturday 17:00</TimeAndPlace>
                Simon Thompson is Professor of Logic and Computation in the
                School of Computing at
                the <a href="https://www.cs.kent.ac.uk/people/staff/sjt/">University of Kent</a>.
                His main research interests are in functional programming, most
                recently in designing tools to help people to write and test
                programs more effectively.  One example of such a tool is
                the <a href="https://hackage.haskell.org/package/HaRe">Haskell Refactorer</a>.
                He is also the author of introductory texts on Haskell, Erlang
                and Miranda, as well as Type Theory and Functional Programming.
            </Speaker>
        </div>
    </div>
);

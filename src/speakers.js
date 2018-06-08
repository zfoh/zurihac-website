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
            <Speaker author="Niki Vazou" img={require('../static/speakers/niki-vazou.jpg')} twitter='nikivazou'>
                <TimeAndPlace><strong>Liquid Haskell: Refinement Types for Haskell</strong>: Saturday, 10:00</TimeAndPlace>
                Niki Vazou is a post-doc scholar at <a href="http://www.cs.umd.edu/projects/PL/">PLUM of University of Maryland</a>, focusing mostly on refinement types, static program verification, and type systems.  She is the author of <a href="https://ucsd-progsys.github.io/liquidhaskell-blog/">Liquid Haskell</a>, a type system extension to GHC that lets you add sophisticated predicates to type signatures.
            </Speaker>

            <Speaker author="Stephen Diehl" img={require('../static/speakers/stephen-diehl.jpg')} github='sdiehl' twitter='smdiehl'>
                <TimeAndPlace><strong>Building compilers with llvm-hs</strong>: Friday, 14:00</TimeAndPlace>
                Stephen is a Haskell developer, entrepreneur, and financial systems architect from Boston. His open source
                work is around numerical computing, compilers, security, and improving Haskell documentation.
                Author of the amazing <a href="http://dev.stephendiehl.com/hask/">What I Wish I Knew When Learning Haskell</a>.
            </Speaker>

            <Speaker author="Edward Kmett" img={require('../static/speakers/ekmett.jpg')} github='ekmett' twitter='kmett'>
                <TimeAndPlace><strong>Combinators Revisited</strong>: Sunday, 10:00</TimeAndPlace>
                Prolific Haskell programmer, mathematician, lapsed graphics guru and demo scener, defense contractor, financial toolsmith,
                author of the widely-known <a href="https://github.com/ekmett/lens/">lens</a> library.
            </Speaker>

            <Speaker author="Gabriel Gonzalez" img={require('../static/speakers/gabriel-gonzalez.jpg')} github='Gabriel439' twitter='GabrielG439'>
                <TimeAndPlace><strong>Fast and parallel state machines</strong>: Friday, 10:00</TimeAndPlace>
                Haskell Enthusiast and programmer at <a href="https://awakesecurity.com/">Awake Security</a>. Author of a host of Haskell libraries and tools including <a href="https://hackage.haskell.org/package/pipes">pipes</a> and <a href="https://hackage.haskell.org/package/dhall">Dhall</a>, and writer behind the <a href="http://www.haskellforall.com/">Haskell for all</a> blog.
            </Speaker>

            <Speaker author="Joachim Breitner" img={require('../static/speakers/joachim-breitner.jpg')} github='nomeata' twitter='nomeata'>
                <TimeAndPlace><strong>A promise checked is a promise kept: Inspection Testing</strong>: Saturday, 13:30</TimeAndPlace>
                Post-doc researcher at the University of Pennsylvania and one of the core contributors to the Glasgow Haskell Compiler.  Author of <a href="http://incredible.pm/">The Incredible Proof Machine</a> and not afraid to try <a href="http://www.joachim-breitner.de/blog/717-Why_prove_programs_equivalent_when_your_compiler_can_do_that_for_you_">funky</a> <a href="http://www.joachim-breitner.de/blog/735-The_magic_%E2%80%9CJust_do_it%E2%80%9D_type_class">ideas</a>.
            </Speaker>
        </div>
    </div>
);

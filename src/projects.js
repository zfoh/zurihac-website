import React from 'react';
import styles from './page.css';
import {starIcon, starBorderIcon} from './icons.js';



const projects = [
    // { title: 'Hadrian'
    // , contact: 'Andrey Mokhov'
    // , skillLevel: 'advanced'
    // , homepage: 'https://github.com/snowleopard/hadrian'
    // , children: (
    //     'Hadrian is a new build system for the Glasgow Haskell Compiler. It is based on the Shake library and we hope that it will eventually replace the current make-based build system. You can find more details about the motivation behind this project and our implementation approach in this document.'
    //   )
    // },
    { title: 'Hakyll'
    , contact: 'Jasper Van der Jeugt'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://jaspervdj.be/hakyll/'
    , children: (
        'Hakyll is a Haskell library for generating static sites, mostly aimed at small-to-medium sites and personal blogs. It is written in a very configurable way and uses an xmonad-like DSL for configuration.'
      )
    },
    { title: 'ghc-mod'
    , contact: 'Daniel Gröber'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/DanielG/ghc-mod'
    , children: (
        'ghc-mod provides editors and IDEs with support for advanced Haskell compiler features, it supports both Cabal and Stack based projects and integrations exist for Emacs, Vim, Atom, IntelliJ and VSCode.'
      )
    },
    { title: 'HaskellDO'
    , contact: 'Nikita Tchayka'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/theam/haskell-do'
    , children: (
        'HaskellDO is a Haskell code editor, centered around interactive development. It\'s main goal is to help data science tasks be easy in Haskell, as inline plotting and fast development iterations.'
      )
    },
    { title: 'haskell-opencv'
    , contact: 'Bas van Dijk'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/LumiGuide/haskell-opencv'
    , children: (
        'opencv is a Haskell library providing a binding to the OpenCV-3.x C++ library. It binds directly with the C++ API using the inline-c Haskell library.'
      )
    },
    { title: 'Aelve Guide'
    , contact: 'Artyom Kazak'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/aelve/guide'
    , children: (
        'Aelve Guide is a wiki for all Haskell-related things. It provides package comparisons/recommendations, code examples and usage notes; it also has pages on Haskell tools, papers, books, and so on.'
      )
    },
];









const Star = () => (<div className={styles.star}>{starIcon}</div>);
const StarBorder = () => (<div className={styles.star}>{starBorderIcon}</div>);

const SkillLevelBeginnerIcon = () => (<div className={styles.skillLevelIcon}><Star /><StarBorder /><StarBorder /></div>);
const SkillLevelAdvancedIcon = () => (<div className={styles.skillLevelIcon}><Star /><Star /><StarBorder /></div>);
const SkillLevelExpertIcon = () => (<div className={styles.skillLevelIcon}><Star /><Star /><Star /></div>);

const toSkillLevelIcon = skillLevel => {
    switch (skillLevel) {
    case 'beginner': return <SkillLevelBeginnerIcon />
    case 'advanced': return <SkillLevelAdvancedIcon />
    case 'expert':   return <SkillLevelExpertIcon />
    default:         return '?'
    }
}

const Project = ({title, contact, skillLevel, skillLevelTo, homepage, children}) => (
    <div className={styles.project}>
        <div className={styles.projectContact}>{contact}</div>
        <h2 className={styles.projectTitle}>{title}</h2>
        <div className={styles.projectSkillLevel}>
            {toSkillLevelIcon(skillLevel)}
            {skillLevelTo && ' — '}
            {skillLevelTo && toSkillLevelIcon(skillLevelTo)}
        </div>
        <div className={styles.projectHomepage}><a className={styles.projectHomepageLink} href={homepage}>{homepage}</a></div>
        <div>{children}</div>
    </div>
);


export default () => (
    <div className={styles.projects}>
        <a id='projects' />
        <h1>Projects</h1>

        <div className={styles.container}>
            <p>
                In between the talks you can join one of these projects and help the maintainers
                out with bug fixes or new features. We have plenty of space available in 10 separate
                rooms where you can team up with your peers and work on your favourite project.
            </p>
            <p>
                To submit your project, please open a <a href="https://github.com/wereHamster/zurihac">pull request</a>.
            </p>
        </div>

        <div className={styles.container}>
            <div className={styles.projectsLegend}>
                <div className={styles.projectLegendItem}>
                    <div className={styles.projectLegendItemLabel}>Beginner</div><SkillLevelBeginnerIcon />
                </div>
                <div className={styles.projectLegendItem}>
                    <div className={styles.projectLegendItemLabel}>Advanced</div> <SkillLevelAdvancedIcon />
                </div>
                <div className={styles.projectLegendItem}>
                    <div className={styles.projectLegendItemLabel}>Expert</div> <SkillLevelExpertIcon />
                </div>
            </div>
        </div>

        <div className={styles.projectsContainer}>
            {projects.map((p, i) => <Project key={i} {...p} />)}
        </div>
    </div>
);

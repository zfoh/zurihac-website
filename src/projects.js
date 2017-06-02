import React from 'react';
import styles from './page.css';
import {starIcon, starBorderIcon} from './icons.js';



const projects = [
    { title: 'LambdaHack and haskell-game/sdl2-ttf'
    , contact: 'Mikolaj Konarski'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://lambdahack.github.io'
    , children: (
        'If there are any Haskell+Games(+SDL) people around, I\'d love to chat and brainstorm with you. Apart of that, I will be playtesting my ASCII roguelike game and I could really use some help. Also, if you\'d like to create your own world in the LambdaHack game engine, that can be accomplished within a single hackathon. Regarding sdl2-ttf, if anybody would like to join me, we could hack a PR that merges the two completely separate sets of Haskell bindings to the SDL2 True Type font library — there is goodwill of all the present and past maintainers of both packages.'
      )
    },
    { title: 'Haskell-Serbia'
      , contact: 'Sasa Bogicevic'
      , skillLevel: 'beginner'
      , skillLevelTo: 'advanced'
      , homepage: 'http://haskell-serbia.com'
      , children: (
          'Haskell-Serbia is a Serbian haskell user group website. It is written in Yesod and has basic functionality for managing users and creating tutorials.'
      )
    },

    { title: 'Hakyll'
    , contact: 'Jasper Van der Jeugt'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://jaspervdj.be/hakyll/'
    , children: (
        'Hakyll is a Haskell library for generating static sites, mostly aimed at small-to-medium sites and personal blogs. It is written in a very configurable way and uses an xmonad-like DSL for configuration.'
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
    { title: 'servant'
    , contact: 'Oleg Grenrus'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/haskell-servant/servant'
    , children: (
        'servant is a set of packages for declaring web APIs at the type-level and then using those API specifications to write server, obtain client functions etc'
      )
    },
    { title: 'Blast'
    , contact: 'Jean-Christophe Mincke'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/jcmincke/Blast'
    , children: (
        'Blast is a distributed computing library inspired by Apache Spark. The current implementation provides local thread and CloudHaskell backends.The next step is to develop a set tools to easily deploy Blast on a cluster.'
      )
    },
    { title: 'Intermediate Haskell'
    , contact: 'Vladislav Zavialov'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'http://intermediatehaskell.com/'
    , children: (
        'Intermediate Haskell is a book that aims to fill the gap between reading LYAH and research papers. It covers topics one usually reads about in blog posts and wiki pages.'
      )
    },
    { title: 'Nomyx'
    , contact: 'Corentin Dupont'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'http://www.nomyx.net/'
    , children: (
        'Nomyx is a game where you can change the rules of the game itself, while playing it! In fact, changing the rules is the goal of the game.'
      )
    },
    { title: 'qua-kit'
    , contact: 'Artem Chirkin'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/achirkin/qua-kit'
    , children: (
        'Qua-kit is a web platform for collaborative analysis and manipulation of simple 3D urban geometry. The website provides means to set up urban design exercises, show demos, and share proposals. We use yesod, GHCJS, and WebGL.'
      )
    },
    { title: 'haskell-indexer'
    , contact: 'Robin Palotai, Ivan Krišto'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/google/haskell-indexer'
    , children: (
        'Haskell Indexer generates kythe.io code crossreference data, which can then be used to browse huge codebases (similar to the former Google Code Search).'
      )
    },
    { title: 'Screeps AI'
    , contact: 'Daniel Latzer'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/tourn/screeps-haskell'
    , children: (
        'An AI for the programmer MMO RTS sandbox game Screeps. Some basic GHCJS bindings already work, but are still quite rudimentary.'
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

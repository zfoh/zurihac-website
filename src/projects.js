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
        'ASCII roguelike game and LambdaHack game engine. Regarding sdl2-ttf, merge the two sets of Haskell bindings for the SDL2 True Type font library.'
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
    { title: 'haskell.do'
    , contact: 'Nikita Tchayka'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'http://haskell.do'
    , children: (
        'haskell.do is a Haskell code editor, centered around interactive development. Its main goal is to help data science tasks be easy in Haskell, as inline plotting and fast development iterations.'
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
    { title: 'Quid2'
    , contact: 'Pasqualino Titto Assini'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'http://quid2.org/'
    , children: (
        'Open, evolvable, consistent and efficient distributed systems (with an awful lot of Haskell code to hack, guaranteed fun for beginners and experts alike or your money back).'
      )
    },
    { title: 'Kubernetes controller'
    , contact: 'Thomas Koch'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://hackage.haskell.org/package/haskell-kubernetes'
    , children: (
        'I want to test writing a K8s controller in Haskell and compare the experience with Go. Bonus: Try to use Quickcheck to test K8s code.'
      )
    },
    { title: 'Cabal'
    , contact: 'Mikhail Glushenkov'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://www.haskell.org/cabal/'
    , children: (
        'Common Architecture for Building Applications and Libraries.'
      )
    },
    { title: 'Caledon'
    , contact: 'Matthew Mirman'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/mmirman/caledon'
    , children: (
        'Caledon is a higher order dependently typed logic programing language.'
      )
    },
    { title: 'Cellular automata'
    , contact: 'Siddharth Bhat'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/bollu/cellularautomata'
    , children: (
        'Encoding pretty cellular automata in Haskell.'
      )
    },
    { title: 'Fedora Haskell Stackage LTS'
    , contact: 'Jens Petersen'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/fedora-haskell/fedora-haskell-tools'
    , children: (
        'Building parts of Stackage LTS in Fedora Copr.'
      )
    },
    { title: 'Foundation'
    , contact: 'Vincent Hanquez'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/haskell-foundation/foundation'
    , children: (
        'Modern Haskell prelude with batteries.'
      )
    },
    { title: 'Foundation (networking)'
    , contact: 'Nicolas Di Prima'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/haskell-foundation/foundation'
    , children: (
        'Network and network protocols for Haskell Foundation.'
      )
    },
    { title: 'Girella and Opaleye'
    , contact: 'Adam Bergmark'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: ''
    , children: (
        'Functional-relational framework using PostgreSQL.'
      )
    },
    { title: 'Haskell IDE support'
    , contact: 'Cyrill Schenkel'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: ''
    , children: (
        'Implement IDE features which help Haskell developers to be more efficient.'
      )
    },
    { title: 'Pandoc'
    , contact: 'Mauro Bieg'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: 'http://pandoc.org'
    , children: (
        'Document converter (from and to markdown, HTML, LaTeX, docx, ePUB and many more).'
      )
    },
    { title: 'Rome'
    , contact: 'Tommaso Piazza'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/blender/Rome'
    , children: (
        'Shared cache for build artifacts specific to iOS/MacOS/tvOS/watchOS development.'
      )
    },
    { title: 'Sparkle'
    , contact: 'Mathieu Boespflug'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: 'http://github.com/tweag/sparkle'
    , children: (
        'Run Haskell analytics apps on Apache Spark.'
      )
    },
    { title: 'Spock'
    , contact: 'Alexander Thiemann'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://www.spock.li/'
    , children: (
        'Spock is a lightweight Haskell web framework inspired by Ruby\'s Sinatra.'
      )
    },
    { title: 'Basic'
    , contact: 'Luka Horvat, Nikola Henezi'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://gitlab.com/haskell-hr/basic'
    , children: (
        'Database first database library with focus on: type safety, ease of use, flexibility and user friendly error messages'
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

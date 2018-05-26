import React from 'react';
import styles from './page.css';
import {starIcon, starBorderIcon} from './icons.js';



const projects = [
    { title: 'eqsat'
    , contact: 'Remy Goldschmidt'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/taktoa/eqsat'
    , children: (
        'eqsat is a Haskell library for equality saturation-based superoptimization of arbitrary referentially-transparent languages, with a focus on performance. Equality saturation is a method of optimization based on automated theorem proving (congruence closure) in propositional equational logic.'
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
    { title: 'Frege - a Haskell for Java Programmers'
    , contact: 'Dierk König'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/Frege/frege#readme'
    , children: (
        'Learn how to use Haskell in your Java projects, incl. type-safe interaction with Java libraries.'
      )
    },
    { title: 'arithmoi'
    , contact: 'Andrew Lelechenko'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/cartazio/arithmoi'
    , children: (
        'arithmoi is a Haskell library for number theory: modular arithmetic, primes, elliptic curves, etc. It is also an excellent tool for Project Euler.'
      )
    },
    { title: 'massiv'
    , contact: 'Alexey Kuleshevich'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/lehins/massiv'
    , children: (
        'massiv is a Haskell library for manipulating multi-dimensional Arrays. It features fusion, stencils and parallel computation.'
      )
    },
    { title: 'http2-client-grpc'
    , contact: 'Lucas DiCioccio'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/lucasdicioccio/http2-client-grpc'
    , children: (
        'A native gRPC client for Haskell. Needs some updating to a more recent proto-lens, helpers, and some CI-runnable examples.'
      )
    },

    { title: 'Labyrinth'
    , contact: 'Leon Coto Rodriguez'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/grancalavera/labyrinth'
    , children: (
        "WIP: A clone of Ravensburger's Labyrinth."
      )
    },


    { title: 'Ginger'
    , contact: 'Tobias Dammers'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://ginger.tobiasdammers.nl/'
    , children: (
        'Jinja2-style HTML template engine'
      )
    },


    { title: 'Secure Haskell Programming with LiquidHaskell'
    , contact: 'Alexander Diemand'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/CodiePP/'
    , children: (
        "Let's dig into Haskell code (libraries, apps or yours) and have a look at how we can prove termination and correct behaviour with LiquidHaskell. Beyound 'head', there are a lot of pitfalls. A vivid discussion and hands-on coding is envisaged."
      )
    },


    { title: 'IHaskell'
    , contact: 'Vaibhav Sagar'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/gibiansky/IHaskell'
    , children: (
        'A Haskell kernel for Jupyter notebooks'
      )
    },


    { title: 'Cabal'
    , contact: 'Mikhail Glushenkov'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://www.haskell.org/cabal/'
    , children: (
        'Common Architecture for Building Applications and Libraries'
      )
    },


    { title: 'Rome'
    , contact: 'Tommaso Piazza'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/blender/Rome'
    , children: (
        'Binary dependency cache specialized for macOS/tvOS/watchOS/iOS'
      )
    },


    { title: 'Nomyx'
    , contact: 'Corentin'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'http://www.nomyx.net'
    , children: (
        'The game in which you can change the rules!'
      )
    },

    { title: 'Enzo Haussecker'
    , contact: 'Enzo Haussecker'
    , skillLevel: 'expert'
    , skillLevelTo: 'expert'
    , homepage: 'https://dfinity.org'
    , children: (
        'We have developed a cryptographic protocol that allows a network of computers to reach a consensus on a stream of random values. A probabilistic mechanism for leader ranking is applied to these random values, which drives the production of blocks for a public blockchain.'
      )
    },


    { title: 'stackage2nix'
    , contact: 'Dmitry Bushev'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: 'https://github.com/typeable/stackage2nix'
    , children: (
        'Generate Nix build instructions from a Stack file'
      )
    },


    { title: 'life-sync'
    , contact: 'Dmitrii Kovanikov'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/ChShersh/life-sync'
    , children: (
        'CLI tool which helps you to synchronize dotfiles repositories'
      )
    },


    { title: 'Haskell Project Project'
    , contact: 'Matt Parsons'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: ''
    , children: (
        'Are you curious about doing Haskell, but not sure where to start? This is a Haskell project that is designed to connect beginners, mentors, and ideas.'
      )
    },


    { title: 'Quid2'
    , contact: ' Pasqualino Titto Assini'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'http://quid2.org'
    , children: (
        'Open, evolvable, consistent and efficient distributed systems'
      )
    },


    { title: 'News Engine'
    , contact: 'Vidas Pleta'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: ''
    , children: (
        'Self driving news engine that would help to personalize user content.'
      )
    },


    { title: 'Basic'
    , contact: 'Nikola Henezi'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://gitlab.com/haskell-hr/basic'
    , children: (
        'Database first database library with focus on: type safety, ease of use, flexibility and user friendly error messages'
      )
    },
    

    { title: 'Basic'
    , contact: 'Luka Horvat'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: ''
    , children: (
        'Database first database library with focus on: type safety, ease of use, flexibility and user friendly error messages'
      )
    },
    

    { title: 'Differential Equation Solvers'
    , contact: 'Dominic Steinitz'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/qnikst/numeric-ode'
    , children: (
        'Small project for different ODE solvers for haskell, in particular symplectic solvers.'
      )
    },


    { title: 'GRIN'
    , contact: 'Csaba Hruska'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/andorp/grin'
    , children: (
        'The name GRIN is short for Graph Reduction Intermediate Notation, and it is an intermediate language for graph reduction. It can be used as a Haskell backend replacing STG.'
      )
    },


    { title: 'Purely functional data structures'
    , contact: 'Juan Carlos Saenz-Carrasco'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: ''
    , children: (
        "Since Okasaki's book and PhD thesis, few efforts have been done towards the design and analysis of purely data structures, specifically the field of dynamic environment"
      )
    },
    

    { title: 'Haskell-wasm'
    , contact: 'Anthony Sheldon'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/haskell-wasm/wasm'
    , children: (
        'Haskell compiler infastructure for WebAssembly'
      )
    },


    { title: 'Quasar-lite'
    , contact: 'Pawel Szulc'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: ''
    , children: (
        "It's an abstraction for a File System build with Free. Attendees will write interpreters for storages of their choice (like HDFS, Elasticsearch, PostgreSQL). At the end of hackhaton we will get a nice website that allows you to connect (mount) to specific storage, list, write and read its content"
      )
    },


    { title: 'Transity'
    , contact: 'Adrian Sieber'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: ''
    , children: (
        'The plain text accounting tool of the future'
      )
    },


    { title: 'Building music types'
    , contact: 'Drew Krause'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: ''
    , children: (
        'Modeling compositional forms (pitch &/or rhythm) using algebraic data types'
      )
    },


    { title: 'sparse-linear-algebra'
    , contact: 'Marco Zocca'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/ocramz/sparse-linear-algebra'
    , children: (
        'A native linear algebra library with multiple backends'
      )
    },


    { title: 'pandoc'
    , contact: 'Mauro Bieg'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: 'https://pandoc.org'
    , children: (
        ''
      )
    },


    { title: 'butler'
    , contact: 'Nicolas Mattia'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/nmattia/butler'
    , children: (
        'just-add-water session types for safe and easy protocols and state machines'
      )
    },


    { title: 'Motor'
    , contact: 'Oskar Wickström'
    , skillLevel: 'advanced'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/owickstrom/motor'
    , children: (
        "Motor is an experimental Haskell library for building finite-state machines with type-safe transitions and effects. It draws inspiration from the Idris ST library. I'd be interested in working with others on this, exploring the design space further."
      )
    },


    { title: 'vindinium-rage'
    , contact: 'Sergey Mironov'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/grwlf/vindinium-rage'
    , children: (
        'Game agent for vindinium.org on-line AI competition'
      )
    },


    { title: 'Debug'
    , contact: 'Pepe Iborra'
    , skillLevel: 'beginner'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/ndmitchell/debug'
    , children: (
        'A debugging toolkit for Haskell'
      )
    },


    { title: 'easytensor'
    , contact: 'Artem Chirkin'
    , skillLevel: 'beginner'
    , skillLevelTo: 'expert'
    , homepage: ''
    , children: (
        'Strongly-typed multidimensional numerical data and operations'
      )
    },


    { title: 'Refract'
    , contact: 'Philip Kamenarsky'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://github.com/pkamenarsky/purescript-refract'
    , children: (
        'Optical Purescript UI library based on React and the Elm architecture, but without the boilerplate.'
      )
    },


    { title: 'Haskell CodingBat'
    , contact: 'Pawel Kruszewski'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: ''
    , children: (
        'CodingBat like website for exercising Haskell.'
      )
    },


    { title: 'Flare Timing'
    , contact: 'Phil de Joux'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: 'https://github.com/BlockScope/flare-timing'
    , children: (
        'Scoring for Free Flight Competition'
      )
    },


    { title: 'Compiler Development'
    , contact: 'Stephen Diehl'
    , skillLevel: 'expert'
    , skillLevelTo: 'expert'
    , homepage: 'https://github.com/llvm-hs'
    , children: (
        'We will informally hack on various tooling on llvm-hs toolchain and related projects.'
      )
    },


    { title: 'Dhall'
    , contact: 'Gabriel Gonzalez'
    , skillLevel: 'advanced'
    , skillLevelTo: 'advanced'
    , homepage: 'https://dhall-lang.org'
    , children: (
        'Non-Turing-complete configuration language'
      )
    },


    { title: 'Distributed Algorithms Framework'
    , contact: 'Jeremy Barisch-Rooney'
    , skillLevel: 'beginner'
    , skillLevelTo: 'beginner'
    , homepage: 'https://github.com/barischrooneyj/disco#readme'
    , children: (
        "It's all in the homepage :)"
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

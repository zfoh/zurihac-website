import React from 'react';
import {Header, About, Sponsors, Venue, Media, Registration, Contact, Footer} from './sections';
import Projects from './projects'
import Schedule from './schedule';
import Speakers from './speakers';
import Navigation from './navigation';

export default () => (
    <div>
        <Header />
        <Navigation />
        <About />
        <Sponsors />
        <Speakers />
        <Schedule />
        <Projects />
        <Venue />
        <Media />
        <Registration />
        <Contact />
        <Footer />
    </div>
);

import React from 'react';
import {Header, About, Sponsors, Venue, Media, Registration, Accomodation, Contact, Footer} from './sections';
import Projects from './projects'
import Schedule from './schedule';
import Speakers from './speakers';

export default () => (
    <div>
        <Header />
        <About />
        {false && <Sponsors />}
        <Speakers />
        <Schedule />
        <Projects />
        <Venue />
        <Media />
        <Registration />
        <Accomodation />
        <Contact />
        <Footer />
    </div>
);

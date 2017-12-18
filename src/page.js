import React from 'react';
import {Header, About, Sponsors, Venue, Beginners, Media, Registration, Contact, Conditions, Footer, Food, Cpp} from './sections';
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
        <Food />
        <Cpp />
        <Projects />
        <Beginners />
        <Venue />
        <Media />
        <Registration />
        <Contact />
        <Conditions />
        <Footer />
    </div>
);

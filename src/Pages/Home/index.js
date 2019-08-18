import React, { Fragment } from 'react';

import Services from './Blocks/services';
import Projects from './Blocks/projects';
import EmailForm from './Blocks/emailForm';
import News from './Blocks/news';
import Facts from './Blocks/facts';
import Contact from './Blocks/contact';
import Carousel from './Blocks/carousel';

const HomePage = props => (
    <Fragment>
        <Carousel />
        <Services />
        <Contact />
        <Projects />
        <Facts />
        <News />
        <EmailForm />
    </Fragment>
);

export default HomePage
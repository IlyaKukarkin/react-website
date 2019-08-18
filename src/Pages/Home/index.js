import React, { Fragment } from 'react';

import Services from './Blocks/services';
import Projects from './Blocks/projects';
import EmailForm from './Blocks/emailForm';
import News from './Blocks/news';
import Facts from './Blocks/facts';
import Contact from './Blocks/contact';

const HomePage = props => (
    <Fragment>
        <Services />
        <Contact />
        <Projects />
        <Facts />
        <News />
        <EmailForm />
    </Fragment>
);

export default HomePage
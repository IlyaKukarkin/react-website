import React, { Fragment } from 'react';

import Services from './Blocks/services';
import Projects from './Blocks/projects';
import EmailForm from './Blocks/emailForm';
import News from './Blocks/news';

const HomePage = props => (
    <Fragment>
        <Services />
        <Projects />
        <News />
        <EmailForm />
    </Fragment>
);

export default HomePage
import React, { Fragment } from 'react';

import Services from './Blocks/services';
import Projects from './Blocks/projects';
import EmailForm from './Blocks/emailForm';

const HomePage = props => (
    <Fragment>
        <Services />
        <Projects />
        <EmailForm />
    </Fragment>
);

export default HomePage
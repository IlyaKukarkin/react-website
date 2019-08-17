import React, { Fragment } from 'react';

import Services from './Blocks/services';
import Projects from './Blocks/projects';

const HomePage = props => (
    <Fragment>
        <Services />
        <Projects />
    </Fragment>
);

export default HomePage
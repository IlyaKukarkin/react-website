import React from 'react';
import { node } from 'prop-types';

const Frame = props => (
    <div className="frame">
        {props.children}
    </div>
);

Frame.propTypes = {
    children: node
}

export default Frame
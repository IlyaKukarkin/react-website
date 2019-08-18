import React from 'react';
import { string } from 'prop-types';

import getImage from 'Utils/getImage';

const Service = props => (
    <div className="service">
        <div className="icon">
            <img
                alt=""
                src={getImage(props.icon)}
                width="50px"
                height="50px"
            />
        </div>
        <div className="header">
            {props.header}
        </div>
        <div className="text">
            {props.text}
        </div>
    </div>
);

Service.propTypes = {
    icon: string.isRequired,
    header: string.isRequired,
    text: string.isRequired
}

export default Service
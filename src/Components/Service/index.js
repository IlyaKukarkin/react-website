import React from 'react';
import { string } from 'prop-types';

import computer from 'Data/icons/computer.png';
import networking2 from 'Data/icons/networking2.png';
import settings from 'Data/icons/settings.png';
import networking from 'Data/icons/networking.png';
import laptop from 'Data/icons/laptop.png';
import startup from 'Data/icons/startup.png';

const getIcon = iconName => {
    switch (iconName) {
        case "computer":
            return computer;
        case "networking2":
            return networking2;
        case "settings":
            return settings;
        case "networking":
            return networking;
        case "laptop":
            return laptop;
        case "startup":
            return startup;
        default:
            return computer;
    }
}

const Service = props => (
    <div className="service">
        <div className="icon">
            <img
                alt=""
                src={getIcon(props.icon)}
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
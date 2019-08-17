import React from 'react';

import site1 from './../../Data/images/site1.jpg';
import site2 from './../../Data/images/site2.jpg';
import site3 from './../../Data/images/site3.jpg';

const getImage = iconName => {
    switch (iconName) {
        case "site1":
            return site1;
        case "site2":
            return site2;
        case "site3":
            return site3;
        default:
            return site3;
    }
}

const Image = props => (
    <div className="image">
        <img
            alt=""
            src={getImage(props.image)}
            width={props.width}
            height={props.height}
        />
    </div>
);

export default Image
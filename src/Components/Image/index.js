import React from 'react';

import site1 from './../../Data/images/site1.jpg';
import site2 from './../../Data/images/site2.jpg';
import site3 from './../../Data/images/site3.jpg';
import news1 from './../../Data/images/news1.jpg';
import news2 from './../../Data/images/news2.jpg';

const getImage = iconName => {
    switch (iconName) {
        case "site1":
            return site1;
        case "site2":
            return site2;
        case "site3":
            return site3;
        case "news1":
            return news1;
        case "news2":
            return news2;
        default:
            return site3;
    }
}

const Image = props => (
    <div className={props.noBorder ? "image-noborder" : "image"}>
        <img
            alt=""
            src={getImage(props.image)}
            width={props.width}
            height={props.height}
        />
    </div>
);

export default Image
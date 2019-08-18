import React from 'react';
import { string, bool } from 'prop-types';

import getImage from 'Utils/getImage';

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

Image.propTypes = {
    noBorder: bool,
    image: string.isRequired,
    width: string,
    height: string
}

export default Image
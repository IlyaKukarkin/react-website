import React from 'react';
import { string, bool, oneOfType } from 'prop-types';

import phone from './../../../../Data/icons/phone.png';
import email from './../../../../Data/icons/email.png';
import address from './../../../../Data/icons/address.png';

const getIcon = iconName => {
    return iconName === 'phone' ? phone : iconName === 'email' ? email : address
}

const FooterLine = props => (
    <div className="footer-line">
        {
            props.icon ? (
                <div className="text-icon">
                    <img
                        alt=""
                        src={getIcon(props.icon)}
                        width="16px"
                        height="16px"
                    />
                    {props.text}
                </div>
            ) : (
                    <div className="text">
                        {props.text}
                    </div>
                )
        }
    </div>
);

FooterLine.propTypes = {
    icon: oneOfType([string, bool]).isRequired,
    text: string.isRequired
}

export default FooterLine
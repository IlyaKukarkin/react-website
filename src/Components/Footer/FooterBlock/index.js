import React from 'react';

import FooterLine from './FooterLine';

const FooterBlock = props => (
    <div className="footer-block">
        <div className="header">
            {props.header}
        </div>
        <div className="content">
            {props.content.map((item) =>
                <FooterLine icon={item.preicon} text={item.text} />
            )}
        </div>
    </div>
);

export default FooterBlock
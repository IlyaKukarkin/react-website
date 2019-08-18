import React from 'react';
import { string, array } from 'prop-types';

import FooterLine from './FooterLine';

const FooterBlock = props => (
    <div className="footer-block">
        <div className="header">
            {props.header}
        </div>
        <div className="content">
            {props.content.map((item) =>
                <FooterLine key={item.id} icon={item.preicon} text={item.text} />
            )}
        </div>
    </div>
);

FooterBlock.propTypes = {
    content: array,
    header: string
}

export default FooterBlock
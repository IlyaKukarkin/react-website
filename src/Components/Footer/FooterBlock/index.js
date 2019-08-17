import React from 'react';
import Col from 'react-bootstrap/Col';

import FooterLine from './FooterLine'

const FooterBlock = props => (
    <Col xs={6} md={4}>
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
    </Col>
);

export default FooterBlock
import React from 'react';
import Col from 'react-bootstrap/Col';

const Service = props => (
    <Col xs={6} md={4}>
        <div className="service">
            <div className="icon">
                {props.icon}
            </div>
            <div className="header">
                {props.header}
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
    </Col>
);

export default Service
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ContentBlock from './../../../Components/ContentBlock';

const ContactBlock = props => (
    <ContentBlock color='#00bdec'>
        <Row>
            <Col xs={9} md={9}>
                <div className="contact">
                    <div className="contact--text">
                        Хотите начать зарабатывать в интернете? Просто свяжитесь с нами.
                    </div>
                </div>
            </Col>
            <Col xs={3} md={3}>
                <Button variant="outline">Подробнее</Button>
            </Col>
        </Row>
    </ContentBlock>
);

export default ContactBlock
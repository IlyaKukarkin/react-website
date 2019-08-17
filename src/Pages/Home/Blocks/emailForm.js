import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import ContentBlock from '../../../Components/ContentBlock';

const EmailFormBlock = props => (
    <ContentBlock color='white' header="Напишите нам">
        <Row>
            <Col xs={6} md={6}>
                <div className="emailFormLeft">
                    <FormControl placeholder="ФИО"/>
                    <FormControl placeholder="Email" />
                    <FormControl placeholder="Телефон" />
                    <Button > Отправить вопрос </Button>
                </div>
            </Col>
            <Col xs={6} md={6}>
                <div className="emailFormRight">
                    <FormControl as="textarea" placeholder="Ваше сообщение" />
                </div>
            </Col>
        </Row>
    </ContentBlock>
);

export default EmailFormBlock
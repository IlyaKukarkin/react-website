import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import ContentBlock from '../../../Components/ContentBlock';

const EmailFormBlock = props => (
    <ContentBlock color='white' header="Напишите нам">
        <div className="emailForm">
            <Row>
                <Col xs={6} md={6}>
                    <FormControl placeholder="ФИО" />
                    <FormControl placeholder="Email" />
                    <FormControl placeholder="Телефон" />
                    <Button> Отправить вопрос </Button>
                </Col>
                <Col xs={6} md={6}>
                    <FormControl as="textarea" placeholder="Ваше сообщение" />
                </Col>
            </Row>
        </div>
    </ContentBlock>
);

export default EmailFormBlock
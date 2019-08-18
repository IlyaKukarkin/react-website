import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContentBlock from 'Components/ContentBlock';
import Service from 'Components/Service';

import ServiceData from 'Data/mock-data/services.json'

const ServiceBlock = () => (
    <ContentBlock color='white'>
        <Row>
            {ServiceData.data.map((item) =>
                <Col key={item.id} xs={6} md={4}>
                    <Service header={item.header} text={item.text} icon={item.icon}/>
                </Col>
            )}
        </Row>
    </ContentBlock>
);

export default ServiceBlock
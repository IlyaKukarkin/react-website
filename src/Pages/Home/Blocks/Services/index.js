import React from 'react';
import Row from 'react-bootstrap/Row';

import ContentBlock from './../../../../Components/ContentBlock';
import Service from './../../../../Components/Services';

import ServiceData from './../../../../Data/mock-data/services.json'

const ServiceBlock = props => (
    <ContentBlock color='white'>
        <Row>
            {ServiceData.data.map((item) =>
                <Service header={item.header} text={item.text} />

            )}
        </Row>
    </ContentBlock>
);

export default ServiceBlock
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContentBlock from './../../../Components/ContentBlock';
import Fact from './../../../Components/Fact';

import FactsData from './../../../Data/mock-data/facts.json'

const FactsBlock = props => (
    <ContentBlock color='#00bdec'>
        <Row>
            {FactsData.data.map((item) =>
                <Col xs={3} md={3}>
                    <Fact value={item.value} text={item.text} />
                </Col>
            )}
        </Row>
    </ContentBlock>
);

export default FactsBlock
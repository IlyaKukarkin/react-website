import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContentBlock from 'Components/ContentBlock';
import Fact from 'Components/Fact';
import variables from 'variables.scss';

import FactsData from 'Data/mock-data/facts.json'

const FactsBlock = () => (
    <ContentBlock color={variables.primaryColor}>
        <Row>
            {FactsData.data.map((item) =>
                <Col key={item.id} xs={3} md={3}>
                    <Fact value={item.value} text={item.text} />
                </Col>
            )}
        </Row>
    </ContentBlock>
);

export default FactsBlock
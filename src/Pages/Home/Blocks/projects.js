import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContentBlock from 'Components/ContentBlock';
import Image from 'Components/Image';

import SiteData from 'Data/mock-data/prevWork.json'

const ProjectBlock = () => (
    <ContentBlock color='white' header="Последние работы">
        <Row>
            {SiteData.data.map((item) =>
                <Col key={item.id} xs={6} md={4}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Image image={item.image} width="100%" height="100%"/>
                    </a>
                </Col>
            )}
        </Row>
    </ContentBlock>
);

export default ProjectBlock
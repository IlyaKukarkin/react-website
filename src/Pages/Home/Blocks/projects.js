import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContentBlock from './../../../Components/ContentBlock';
import Image from './../../../Components/Image';

import SiteData from './../../../Data/mock-data/prevWork.json'

const ProjectBlock = props => (
    <ContentBlock color='white' header="Последние работы">
        <Row>
            {SiteData.data.map((item) =>
                <Col xs={6} md={4}>
                    <Image image={item} width="100%" height="100%"/>
                </Col>
            )}
        </Row>
    </ContentBlock>
);

export default ProjectBlock
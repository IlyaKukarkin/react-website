import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContentBlock from 'Components/ContentBlock';
import NewsItem from 'Components/News';

import NewsData from 'Data/mock-data/news.json'

const NewsBlock = () => (
    <ContentBlock color='white' header="Новости">
        <Row>
            {NewsData.data.map((item) =>
                <Col xs={6} md={6}>
                    <NewsItem date={item.date} text={item.text} image={item.image} />
                </Col>
            )}
        </Row>
    </ContentBlock>
);

export default NewsBlock
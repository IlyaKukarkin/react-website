import React from 'react';
import { string } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'Components/Image';

const NewsItem = props => (
    <div className="newsItem">
        <Row>
            <Col xs={12} md={12} lg={4}>
                <div className="newsItem--image">
                    <Image image={props.image} noBorder width="100%" height="100%"/>
                </div>
            </Col>
            <Col lg={8}>
                <div className="newsItem--date">
                    {props.date}
                </div>
                <div className="newsItem--text">
                    {props.text}
                </div>
                <div className="newsItem--button">
                    <Button variant="flat">Подробнее</Button>
                </div>
            </Col>
        </Row>
    </div>
);

NewsItem.propTypes = {
    image: string.isRequired,
    date: string.isRequired,
    text: string.isRequired
}

export default NewsItem
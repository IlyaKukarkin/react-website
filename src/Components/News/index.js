import React from 'react';
import { string } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'Components/Image';

const NewsItem = props => (
    <div className="newsItem">
        <Row>
            <Col xs={4} md={4}>
                <div className="newsItem--image">
                    <Image image={props.image} noBorder width="100%" height="100%"/>
                </div>
            </Col>
            <Col xs={8} md={8}>
                <div className="newsItem--date">
                    {props.date}
                </div>
                <div className="newsItem--text">
                    {props.text}
                </div>
                <Row>
                    <Col xs={8} md={{ span: 4, offset: 6 }}>
                        <Button variant="flat">Подробнее</Button>
                    </Col>
                </Row>
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
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FooterData from './../../Data/mock-data/footer.json';
import FooterBlock from './FooterBlock';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="main">
                    <Row className="row">
                        {FooterData.data.map((item) =>
                            <Col xs={6} md={4}>
                                <FooterBlock header={item.header} content={item.content} />
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="extra">
                    {FooterData.subFooterText}
                </div>
            </div>
        );
    }
}

export default Footer
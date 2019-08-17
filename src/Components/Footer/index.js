import React, { Component } from 'react';

import FooterData from './../../Data/mock-data/footer.json'
import FooterBlock from './FooterBlock';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="main">
                    {FooterData.data.map((item) =>
                        <FooterBlock header={item.header} content={item.content} />
                    )}
                </div>
                <div className="extra">
                    {FooterData.subFooterText}
                </div>
            </div>
        );
    }
}

export default Footer
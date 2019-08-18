import React from 'react';
import { string, node } from 'prop-types';

const ContentBlock = props => (
    <div className="block" style={{backgroundColor: props.color}}>
        { props.header && (
            <div>
                <div className="header">
                    {props.header}
                </div>
                <div className="line" />
            </div>
        )}
        {props.children}
    </div>
);

ContentBlock.propTypes = {
    header: string,
    color: string,
    children: node
}

export default ContentBlock
import React from 'react';

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

export default ContentBlock
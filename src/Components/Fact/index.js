import React from 'react';

const Fact = props => (
    <div className="fact">
        <div className="fact--value">
            {props.value}
        </div>
        <div className="fact--line" />
        <div className="fact--text">
            {props.text}
        </div>
    </div>
);

export default Fact
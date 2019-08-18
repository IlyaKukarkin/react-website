import React from 'react';
import { string, number } from 'prop-types';

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

Fact.propTypes = {
    value: number.isRequired,
    text: string.isRequired
}

export default Fact
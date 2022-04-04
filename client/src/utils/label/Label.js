import React from 'react';

const Label = (props) => {
    return (

            <label className={`label ${props.required ? 'label_required' : ''}`} >{props.text}</label>

    );
};

export default Label;
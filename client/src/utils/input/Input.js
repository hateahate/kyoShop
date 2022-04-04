import React from 'react';

const Input = (props) => {

    if (!props.options) {
        return(

        <input type={props.type} placeholder={props.placeholder} />)
    } else {
        return(
        <select value={props.options}  placeholder={props.placeholder}>
            {props.options.map((element) => <option value={element}>{element}</option>)}
        </select>)
    }


};

export default Input;
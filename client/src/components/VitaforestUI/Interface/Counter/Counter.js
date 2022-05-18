import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.div`
display: flex;
position: relative;
margin-right: 5px;
border: 1px solid #eaebec;
box-sizing: border-box;
border-radius: 4px;
background: #f7f8f9;
width: ${props => props.width ? props.width : '135px'};
height: ${props => props.height ? props.height : '30px'};
`;

const Input = styled.input`
font-family: 'Proxima Nova';
border: none;
background: #f7f8f9;
display: block;
height: 32px;
line-height: 32px;
width: 100%;
padding: 0;
margin: 0;
box-sizing: border-box;
text-align: center;
`;

const ButtonPlus = styled.button`
position: absolute;
top: 1px;
right: 1px;
bottom: 1px;
width: 20px;
padding: 0;
display: block;
text-align: center;
border: none;
font-size: 16px;
font-weight: 600;
background: #f7f8f9;
`;

const ButtonMinus = styled(ButtonPlus)`
position: absolute;
top: 1px;
left: 1px;
bottom: 1px;
width: 20px;
padding: 0;
display: block;
text-align: center;
border: none;
border-left: 1px solid #ddd;
font-size: 16px;
font-weight: 600;
`;

const Counter = (props) => {
    const step = Number(props.step);
    const [value, setValue] = useState(props.qty);
    let increment = () => {
        let currentValue = Number(value);
        currentValue += step;
        setValue(currentValue);
    }
    let decrement = () => {
        let currentValue = Number(value);
        if (currentValue >= 1) {
            currentValue -= step;
        }
        setValue(currentValue);
    }

    return (
        <Main width={props.width} height={props.height}>
            <ButtonMinus onClick={decrement}>-</ButtonMinus>
            <Input type='number' value={value} />
            <ButtonPlus onClick={increment}>+</ButtonPlus>
        </Main>
    )
}

export default Counter;
import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.div`
display: flex;
`;

const Input = styled.input`

`;

const Button = styled.button`

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
        <Main>
            <Button onClick={increment}></Button>
            {value}
            <Button onClick={decrement}></Button>
        </Main>
    )
}

export default Counter;
import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const InputElement = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 10px 16px 20px;
gap: 10px;
width: ${props => props.width ? props.width : '248px'};
height: ${props => props.height ? props.height : 'auto'};
background: #FFFFFF;
border: 1px solid #EAEBEC;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
display: flex;
align-items: center;
color: #303236;
opacity: 0.8;
border-radius: 4px;
outline: none;
&:focus{
    border: 1px solid #BBBBBB;
}
&:hover{
    border: 1px solid #BBBBBB;
}
&:focus-visible{
    border: 1px solid #7F878B;
}
&:active{
    border: 1px solid #BBBBBB;
}
&:invalid{
    border: 1px solid #EF5E53;  
}
`;

const Label = styled.label`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: ${props => props.fs ? props.fs : '14px'};
line-height: ${props => props.lh ? props.lh : '17px'};
display: flex;
align-items: center;
color: #303236;
margin: 0px 0px 10px 0px;
`;

const Input = (props) => {
    return (
        <Container>
            <Label fs={props.fs} lh={props.lh}>{props.label}</Label>
            <InputElement placeholder={props.placeholder} type={props.type} />
        </Container>
    )
}

export default Input;
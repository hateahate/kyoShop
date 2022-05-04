import React from "react";
import styled from "styled-components";

const Component = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 17px;
width: ${props => props.width ? props.width : 'auto'};
height: ${props => props.height ? props.height : '23px'};
background: #FFFFFF;
border: 1px solid #40BF6A;
box-sizing: border-box;
border-radius: 12px;
font-family: 'Proxima Nova';
font-weight: 600;
font-size: 12px;
line-height: 19px;
color: #40BF6A;
cursor: pointer;
&:hover{
    background: #61D186;
    border: 1px solid #61D186;
    text-decoration: underline;
    color: white;
}
&:active{
    background: #2E9E53;
    border: 1px solid #2E9E53;
    text-decoration: underline;
    color: white; 
}
`;

const RoundedButton = (props) => {
    return <Component width={props.width} height={props.height}>{props.title}</Component>
}

export default RoundedButton;
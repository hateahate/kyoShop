import React from "react";
import styled from "styled-components";

const Component = styled.p`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 8px 6px;
background: ${props => props.status === 'soon' ? '#18A0FB' : '#40BF6A'};
width: ${props => props.width ? props.width : '53px'};
height: ${props => props.height ? props.height : '19px'};
border-radius: 4px;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 19px;
color: #FFFFFF;
margin: ${props => props.margin ? props.margin : '0px'};
`;


const CartStatus = (props) => {
    return <Component width={props.width} height={props.height} status={props.status} className={props.className}>{props.status === 'soon' ? 'Soon' : 'Avaliable'}</Component>
}

export default CartStatus;
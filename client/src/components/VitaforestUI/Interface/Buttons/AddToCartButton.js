import React from "react";
import styled from "styled-components";
import { ReactComponent as Image } from './svg/cart.svg';

const Component = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: ${props => props.width ? props.width : '135px'};
height: ${props => props.height ? props.height : '30px'};
padding: 2px 10px;
background: ${props => props.variant == 'dark' ? '#3C3F54' : '#40BF6A'};
border-radius: 4px;
border: none;
color: white;
font-family: 'Proxima Nova';
font-weight: 700;
font-size: 13px;
line-height: 16px;
cursor: pointer;
&:hover{
    background: ${props => props.variant == 'dark' ? '#525673' : '#61D186'};
}
&:active{
    background: ${props => props.variant == 'dark' ? '#242638' : '#2E9E53'};
}
svg{
    margin-right: 10px;
}
`;


const AddToCartButton = (props) => {
    return <Component width={props.width} height={props.height} variant={props.variant} className={props.className}><Image />Add to cart</Component>
}

export default AddToCartButton;
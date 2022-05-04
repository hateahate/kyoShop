import React from "react";
import styled from "styled-components";

const Component = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
background: #F3F7F2;
width: ${props => props.width ? props.width : '90px'};
height: ${props => props.height ? props.height : '19px'};
border-radius: 4px;
`;

const InStock = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #303236;
margin-right: 6px;
`;

const Quatity = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 11px;
line-height: 13px;
color: #40BF6A;
`;


const StockInfo = (props) => {
    return <Component width={props.width} height={props.height} className={props.className}><InStock>In stock:</InStock><Quatity>{props.quantity} kg</Quatity></Component>
}

export default StockInfo;
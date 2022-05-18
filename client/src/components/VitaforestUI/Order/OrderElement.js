import React from "react";
import styled from "styled-components";
import DefaultButton from "../Interface/Buttons/DefaultButton";


const Component = styled.div`
position: relative;
padding: 10.5px 15px;
width: ${props => props.width ? props.width : '100%'};
height: ${props => props.height ? props.height : 'auto'};
@media screen and (min-width: 1128px){
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 0px;
}
`;


const OrderNumber = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #18A0FB;
margin: 0px 0px 5px 0px;
`;

const OrderDate = styled.p`
margin: 0px 0px 5px 0px;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 19px;
color: #303236;
`;

const TotalRow = styled.div`
display: flex;
`;

const OrderTotal = styled(OrderDate)`
margin: 0px;
`;

const ForItems = styled(OrderDate)`
margin: 0px;
color: #7f878b;
`;

// Оформление On Hold

const OrderStatus = styled.p`
position: absolute;
top: 10.5px;
right: 15px;
display: flex;
margin: 0px;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 3px 15px;
background: #F7F8F9;
border-radius: 2px;
width: 69px;
height: 19px;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: ${props => props.status === 'Complete' ? '#2E9E53' : props.status === 'Cancelled' ? '#EF5E53' : '#303236'};
@media screen and (min-width: 1128px){
position: relative;
display: flex;
font-family: 'Proxima Nova';
box-sizing: border-box;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 4px 15px;
width: 100px;
height: 25px;
background: #F7F8F9;
border-radius: 2px;
margin: 0px;
}
`;




const OrderButton = styled(DefaultButton)`
margin-top: 10px;
width: 100%;
@media screen and (min-width: 1128px){
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 14px;
width: 110px;
height: 30px;   
}
`;

const OrderElement = (props) => {
    return (
        <Component width={props.width} height={props.height} className={props.className}>
            <OrderNumber>{props.number}</OrderNumber>
            <OrderDate>{props.date}</OrderDate>
            <OrderStatus status={props.status}>{props.status}</OrderStatus>
            <TotalRow>
                <OrderTotal>€{props.total}&nbsp;</OrderTotal>
                <ForItems>for {props.items} items</ForItems>
            </TotalRow>
            <OrderButton title='View Order' />
        </Component>
    )
}

export default OrderElement;
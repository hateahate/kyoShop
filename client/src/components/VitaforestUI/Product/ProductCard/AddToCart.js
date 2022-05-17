import React from "react";
import styled from "styled-components";
import AddToCartButton from "../../Interface/Buttons/AddToCartButton";

const Main = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
height: 105px;
width: 100%;
padding: 15px;
border: 1px solid #eaebec;
box-sizing: border-box;
border-radius: 4px;
@media screen and (min-width: 1128px){
padding: 20px;
width: 384px;
height: 135px;    
}
`;

const FirstRow = styled.div`
display: flex;
width: 100%;
`;

const SecondRow = styled.div`
display: flex;
width: 100%;
`;

const PricePerUnit = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 17px;
color: #303236;
margin: 0px;
@media screen and (min-width: 1128px){
    font-size: 26px;
    line-height: 28px;
    }
`;

const Kg = styled.span`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 17px;
color: #7F878B;
margin: 0px;
@media screen and (min-width: 1128px){
    font-size: 26px;
    line-height: 28px;
    }
`;

const Total = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`;

const TotalTitle = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #7F878B;
margin: 0px;
@media screen and (min-width: 1128px){
    font-size: 12px;
    line-height: 19px;
    }
`;

const TotalPrice = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #303236;
margin: 0px;
@media screen and (min-width: 1128px){
    font-size: 16px;
    line-height: 19px;
    }
`;

const AddButton = styled(AddToCartButton)`
width: 50%;
@media screen and (min-width: 1128px){
    width: 175px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
}
`;


const AddToCart = (props) => {
    return (
        <Main variant={props.variant}>
            <FirstRow>
                <PricePerUnit>€{props.price}<Kg> / kg</Kg></PricePerUnit>
            </FirstRow>
            <SecondRow>
                <Total>
                    <TotalTitle>total price</TotalTitle>
                    <TotalPrice>€{props.price}</TotalPrice>
                </Total>
                <AddButton />
            </SecondRow>
        </Main>
    )
}

export default AddToCart;
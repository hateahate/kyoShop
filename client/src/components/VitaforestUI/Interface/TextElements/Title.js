import React from "react";
import styled from "styled-components";

const ProductCardTitle = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
`;

const H4Title = styled.h4`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 17px;
`;

const SKU = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px
color: #7F878B;
`;

const Title = ({ title, variant }) => {
    switch (variant) {
        case 'product-card':
            return <ProductCardTitle>{title}</ProductCardTitle>
        case 'h4':
            return <H4Title>{title}</H4Title>
        case 'sku':
            return <SKU>SKU: {title}</SKU>
        default:
            return <ProductCardTitle>{title}</ProductCardTitle>
    }

}
export default Title
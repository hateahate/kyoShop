import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Status from "../Status/Status";
import Title from "../Title/Title";
import WishlistButton from "../WishlistButton/WishlistButton";

const AbsoluteRow = styled.div`
position: absolute;
top: 0;
display: flex;
justify-content: space-between;
`;

const CardMain = styled.div`
position: relative;
`;

const ProductCard = (props) => {
    return (
        <CardMain>
            <img src="image.jpg" alt="" />
            <Title variant="product-card" title="sample product" />
            <div class="product-card__row">
                <Title variant='sku' title='2555444' />
                <Button variant='lined-small' title='Request' />
            </div>
            <AbsoluteRow>
                <Status />
                <WishlistButton></WishlistButton>
            </AbsoluteRow>

        </CardMain>
    )
}

export default ProductCard 
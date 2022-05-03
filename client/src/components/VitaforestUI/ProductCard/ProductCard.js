import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Title from "../Title/Title";
import WishlistButton from "../WishlistButton/WishlistButton";

const ProductCard = (props) => {
    return (
        <div class="product-card">
            <img src="image.jpg" alt="" />
            <h4 class="product-card__title">
                Plantain (Plantago) dry extract dry powder
            </h4>
            <div class="product-card__row">
                <p class="product-card__sku">SKU: 00171</p>
            </div>
            <div class="product-card__absolute-row">
                <p class="product-card__status">Avaliable</p>
                <WishlistButton></WishlistButton>

            </div>
        </div>
    )
}

export default ProductCard 
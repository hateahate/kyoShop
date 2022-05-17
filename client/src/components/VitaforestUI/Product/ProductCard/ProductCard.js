import React from 'react';
import styled from 'styled-components';
import Status from '../../Interface/Status/Status';
import WishlistButton from '../../Interface/WishlistButton/WishlistButton';
import LinedButton from '../../Buttons/LinedButton';

const AbsoluteRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardMain = styled.div`
  position: relative;
  box-shadow: 0px 4px 10px rgba(26, 33, 45, 0.05);
  border-radius: 4px;
  width: 30%;
  .request-button {
    display: block;
    margin: 0 auto;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  -o-object-fit: cover;
  object-fit: cover;
`;

const CardInner = styled.div`
  box-sizing: border-box;
  padding: 10px 15px 15px 15px;
`;

const Title = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
`;

const ProductCard = (props) => {
  return (
    <CardMain>
      <CardImage src={'http://5.144.96.71:66/' + props.img} alt="" />
      <CardInner>
        <Title>{props.title}</Title>
        <div class="product-card__row">
          <Title variant="sku" title={props.sku} />
          <LinedButton
            class="request-button"
            variant="lined-small"
            title="Request"
          />
        </div>
        <AbsoluteRow>
          <Status />
          <WishlistButton></WishlistButton>
        </AbsoluteRow>
      </CardInner>
    </CardMain>
  )
}

export default ProductCard

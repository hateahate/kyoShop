import React from "react";
import styled from "styled-components";
import { $host } from "../../../../../api";
import LinedButton from "../../../Interface/Buttons/LinedButton";
import WishlistButton from "../../../Interface/WishlistButton/WishlistButton";
import { getProductImgUrl } from "../../../../../api/productAPI";

const CardContainer = styled.div`
  width: calc(50% - 22px);
  box-shadow: 0px 4px 10px rgba(26, 33, 45, 0.05);
  border-radius: 4px;
  position: relative;
  @media screen and (max-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 1128px) {
    width: calc(33% - 8px);
  }
`;
const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  aspect-ratio: 1.47;
`;
const CardContent = styled.div`
  box-sizing: border-box;
  padding: 10px 15px 1px 15px;
  @media screen and (min-width: 1128px) {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px 15px 15px;
    justify-content: space-between;
    h3 {
      width: 100%;
    }
    button {
      display: inline;
      margin: 0px !important;
    }
  }
  button {
    display: block;
    margin: 15px auto;
  }
`;

const AbsoluteRow = styled.div`
  button {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;

const Sku = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #7f878b;
  margin: auto 0;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #303236;
  margin-bottom: 5px;
`;

const Status = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 19px;
  color: #ffffff;
  background: #40bf6a;
  border-radius: 4px 0px 4px 0px;
  min-width: 70px;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;

function CardUnLogged(props) {
  return (<CardContainer>
    <CardImage src={getProductImgUrl(props.image)} />
    <CardContent>
      <Title>{props.title}</Title>
      <Sku className="SKU">{`SKU: ${props.sku}`}</Sku>
      <LinedButton variant="lined-small" title="Request" />
    </CardContent>
    <AbsoluteRow>
      <WishlistButton className="wish" />
      <Status>{props.status}</Status>
    </AbsoluteRow>
  </CardContainer>);
}

export default CardUnLogged;
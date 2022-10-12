import React from "react";
import styled from "styled-components";
import LinedButton from "../../../Interface/Buttons/LinedButton";
import WishlistButton from "../../../Interface/WishlistButton/WishlistButton";


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
const LineContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(26, 33, 45, 0.05);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 27px 10px 10px 10px;
  position: relative;
  width: 100%;
`;

const RowContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.first {
    margin-bottom: 8px;
    @media screen and (min-width: 1128px) {
      margin-bottom: 10px;
    }
  }
`;


function LineLoged(props) {
    return ( <LineContainer>
        <RowContent className="first">
          <Title>{props.title}</Title>
          <WishlistButton></WishlistButton>
        </RowContent>
        <RowContent>
          <Sku>{"SKU: " + props.sku}</Sku>
          <LinedButton variant="lined-small" title="buy" />
        </RowContent>
        <AbsoluteRow>
          <Status>{props.status}</Status>
        </AbsoluteRow>
      </LineContainer> );
}

export default LineLoged;
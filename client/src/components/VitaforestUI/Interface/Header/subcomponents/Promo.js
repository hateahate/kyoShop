import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  padding: 30px;
  background-image: ${(props) => props.image};
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 8px;
  margin-top: auto;
`;
export default function Promo(props) {
  return <Container></Container>;
}

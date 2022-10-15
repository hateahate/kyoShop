import React from "react";
import styled from "styled-components";
import HeaderMenu from "./subcomponents/HeaderMenu";
const HeaderContainer = styled.div`
  margin: 0px 0px 10px 0px;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderMenu />
    </HeaderContainer>
  );
};

export default Header;

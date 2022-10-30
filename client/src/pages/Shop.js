import React, { useState } from "react";
import styled from "styled-components";
import ShopProducts from "../components/VitaforestUI/Shop/ShopProducts";
import Page from "../components/VitaforestUI/Interface/Page/Page";
import { ReactComponent as Burger } from "../components/VitaforestUI/Shop/images/Burger.svg";
import { ReactComponent as Filter } from "../components/VitaforestUI/Shop/images/filter.svg";
import { ReactComponent as Sliders } from "../components/VitaforestUI/Shop/images/sliders.svg";
import { ReactComponent as Sort } from "../components/VitaforestUI/Shop/images/sort.svg";
import MediaQuery from "react-responsive";
import ShopFilter from "../components/VitaforestUI/Shop/ShopFilter";
const ShopContainer = styled.div`
  width: calc(100vw - 36px);
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 1128px) {
    width: 1128px;
  }
  .darked {
    z-index: 2;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: 0.7;
    display: none;
    left: -18px;
  }
  .darked.shown {
    display: block;
  }
`;

const ShopFlex = styled.div`
  @media screen and (min-width: 1128px) {
    display: flex;
  }
`;

const ShopHeading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 17px;
  color: #303236;
`;

const MobileButtons = styled.div`
  position: absolute;
  top: -6px;
  right: 5px;
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const FiltersButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

function Shop() {
  const [isCard, setIsCard] = useState(true);
  const [isFilterShown, setIsFilterShown] = useState(false);
  return (
    <Page>
      <ShopContainer>
        <ShopHeading>Products</ShopHeading>
        <div className={isFilterShown ? "darked shown" : "darked"}></div>
        <MediaQuery maxWidth={1127}>
          <MobileButtons>
            <FiltersButton onClick={() => setIsCard(!isCard)}>
              <Burger />
            </FiltersButton>
            <FiltersButton>
              <Filter />
            </FiltersButton>
            <FiltersButton onClick={() => setIsFilterShown(!isFilterShown)}>
              <Sliders />
            </FiltersButton>
            <FiltersButton>
              <Sort />
            </FiltersButton>
          </MobileButtons>
        </MediaQuery>
        <ShopFlex>
          <ShopFilter
            isShown={isFilterShown}
            onClick={() => setIsFilterShown(!isFilterShown)}
          />
          <ShopProducts isCard={isCard} />
        </ShopFlex>
      </ShopContainer>
    </Page>
  );
}

export default Shop;

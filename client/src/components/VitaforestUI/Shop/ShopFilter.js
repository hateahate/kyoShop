import React from "react";
import { CloseButton } from "react-bootstrap";
import styled from "styled-components";
import FiltersLists from "./FilterComponents/FilterLists";
import { ReactComponent as Close } from "../Interface/Header/images/close.svg";

const FilterContainer = styled.div`
  .filter {
    display: none;
    z-index: 2;
    position: absolute;
    width: 100vw;
    left: -10px;
    background-color: #ffffff;
    @media screen and (min-width: 1128px) {
      display: block;
      width: 264px;
      position: relative;
      left: none;
    }
  }
  .shown {
    display: block;
  }
`;

const FilterTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 17px;
  color: #303236;
  padding: 10px 15px 10px 18px;
  width: 100%;
  background: #f3f7f2;
  margin-bottom: 0;
  @media screen and (min-width: 1128px) {
    display: none;
  }
`;

const CloseFilters = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 18px;
  top: 7px;
  @media screen and (min-width: 1128px) {
    display: none;
  }
`;

function ShopFilter(props) {
  return (
    <FilterContainer>
      <div className={props.isShown ? "filter shown" : "filter"}>
        <FilterTitle>Filters</FilterTitle>
        <CloseFilters onClick={() => props.onClick()}>
          <Close />
        </CloseFilters>
        <FiltersLists />
      </div>
    </FilterContainer>
  );
}

export default ShopFilter;

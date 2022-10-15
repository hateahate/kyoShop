import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  .filter {
    display: none;
    z-index: 2;
    position: absolute;
    width: 100vw;
    left: -10px;
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
  padding: 10px 12px 10px 18px;
  width: 100%;
  background: #f3f7f2;
`;

function ShopFilter(props) {
  return (
    <FilterContainer>
      <div className={props.isShown ? "filter shown" : "filter"}>
        <FilterTitle>Filters</FilterTitle>
      </div>
    </FilterContainer>
  );
}

export default ShopFilter;

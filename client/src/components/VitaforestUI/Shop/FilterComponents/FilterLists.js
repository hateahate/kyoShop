import React from "react";
import styled from "styled-components";
import SingleList from "./SinglieList";

const FiltersContainer = styled.div`
  box-sizing: border-box;
  padding: 15px 18px;
  @media screen and (min-width: 1128px) {
    padding: 0px;
  }
`;

function FiltersLists() {
  return (
    <FiltersContainer>
      <SingleList
        title="Category"
        items={[
          { title: "CHACHA", value: "CHACHA" },
          { title: "JIJA", value: "CHACHA" },
          { title: "HUETA", value: "CHACHA" },
        ]}
      />
      <SingleList
        title="Category"
        items={[
          { title: "CHACHA", value: "CHACHA" },
          { title: "JIJA", value: "CHACHA" },
          { title: "HUETA", value: "CHACHA" },
        ]}
      />
      <SingleList
        title="Category"
        items={[
          { title: "CHACHA", value: "CHACHA" },
          { title: "JIJA", value: "CHACHA" },
          { title: "HUETA", value: "CHACHA" },
        ]}
      />
      <SingleList
        title="Category"
        items={[
          { title: "CHACHA", value: "CHACHA" },
          { title: "JIJA", value: "CHACHA" },
          { title: "HUETA", value: "CHACHA" },
        ]}
      />
    </FiltersContainer>
  );
}

export default FiltersLists;

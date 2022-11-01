import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleList from "./SinglieList";
import { fetchFilterAttributes } from "../../../../api/categoriesAPI";

const FiltersContainer = styled.div`
  box-sizing: border-box;
  padding: 15px 18px;
  @media screen and (min-width: 1128px) {
    padding: 0px;
  }
`;

function FiltersLists() {
  const [attributes, setAttributes] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchFilterAttributes()
      .then((data) => {
        setAttributes(data);
        console.log(data);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [isLoaded]);

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

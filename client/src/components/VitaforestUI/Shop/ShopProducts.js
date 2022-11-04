import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../..";
import { fetchProducts } from "../../../api/productAPI";
import ProductCard from "../Product/ProductCard/ProductCard";

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function ShopProducts(props) {
  const { user } = useContext(Context);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts(null, 1, 100, user.isAuth).then(
      (data) => {
        setIsLoaded(true);
        setItems(data.rows);
      },
      (e) => {
        setIsLoaded(true);
        setError(e);
      }
    );
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка</div>;
  } else {
    return (
      <section>
        <ProductsContainer>
          {items.map((item) => (
            <ProductCard
              variant={props.isCard ? "card" : "line"}
              image={item.img}
              title={item.title}
              sku={item.sku}
              status={item.status}
            />
          ))}
        </ProductsContainer>
      </section>
    );
  }
}

export default ShopProducts;

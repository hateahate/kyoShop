import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../Product/ProductCard/ProductCard";

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function ShopProducts(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("http://5.144.96.71:66/api/product")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.rows);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
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
              title={item.name}
              sku={item.sku}
            />
          ))}
        </ProductsContainer>
      </section>
    );
  }
}

export default ShopProducts;
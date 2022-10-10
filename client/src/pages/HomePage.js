import React, { useState, useEffect } from "react";
import Header from "../../src/components/VitaforestUI/Interface/Header/Header";
import ProductCard from "../components/VitaforestUI/Product/ProductCard/ProductCard";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { fetchProducts } from "../api/productAPI";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [needReload, setNeedReload] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchProducts(null, 1, 100).then(
      (result) => {
        setIsLoaded(true);
        setItems(result.rows);
        setNeedReload(false);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
    return () => {};
  }, [needReload]);
  if (error) {
    return (
      <div>
        {NotificationManager.error(`${error.message}`, "Error")}
        <NotificationContainer />
      </div>
    );
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Header />
        {items.map((element) => {
          console.log(element);
          return (
            <ProductCard
              variant="card"
              key={element.name}
              title={element.name}
              image={element.img}
              status={element.status}
            />
          );
        })}
      </div>
    );
  }
};

export default HomePage;

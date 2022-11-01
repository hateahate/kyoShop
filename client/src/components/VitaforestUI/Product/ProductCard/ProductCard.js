import React, { useContext } from "react";
import { Context } from "../../../..";
import CardLogged from "./subcomponents/CardLogged";
import CardUnLogged from "./subcomponents/CardUnLogged";
import LineLogged from "./subcomponents/LineLogged";
import LineUnLogged from "./subcomponents/LineUnLogged";

const userloged = true

function ProductCard(props) {
  const { user } = useContext(Context);
  if (props.variant == "card" && !user.isAuth) {
    return (
      <CardUnLogged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    );
  } else if (props.variant == 'line' && user.isAuth) {
    return (
      <LineUnLogged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    );
  } else if (props.variant == "card" && user.isAuth) {
    return (
      <CardLogged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    )
  } else {
    return (
      <LineLogged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    );
  }
}

export default ProductCard;

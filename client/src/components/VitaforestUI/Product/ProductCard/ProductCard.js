import React, { useContext } from "react";
import { Context } from "../../../..";
import CardLoged from "./subcomponents/CardLoged";
import CardUnLoged from "./subcomponents/CardUnLoged";
import LineLoged from "./subcomponents/LineLoged";
import LineUnLoged from "./subcomponents/LineUnLoged";

const userloged = true

function ProductCard(props) {
  const { user } = useContext(Context);
  if (props.variant == "card" && !user.isAuth) {
    return (
      <CardUnLoged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    );
  } else if (props.variant == 'line' && user.isAuth) {
    return (
      <LineUnLoged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    );
  } else if (props.variant == "card" && user.isAuth) {
    return (
      <CardLoged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    )
  } else {
    return (
      <LineLoged title={props.title} sku={props.sku} image={props.image} status={props.status} />
    );
  }
}

export default ProductCard;

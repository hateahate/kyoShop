import React from "react";
import CardLoged from "./subcomponents/CardLoged";
import CardUnLoged from "./subcomponents/CardUnLoged";
import LineLoged from "./subcomponents/LineLoged";
import LineUnLoged from "./subcomponents/LineUnLoged";

const userloged = true

function ProductCard(props) {
  console.log(props.variant == "card");
  if (props.variant == "card" && userloged == false) {
    return (
      <CardUnLoged title={props.title} sku={props.sku} image={props.image} status={props.status}/>
    );
  } else  if(props.variant == 'line' && userloged == false){
    return (
      <LineUnLoged title={props.title} sku={props.sku} image={props.image} status={props.status}/>
    );
  } else if(props.variant == "card" && userloged == true){
    return(
    <CardLoged title={props.title} sku={props.sku} image={props.image} status={props.status}/>
    )
  } else{
    return (
      <LineLoged title={props.title} sku={props.sku} image={props.image} status={props.status}/>
    );
  }
}

export default ProductCard;

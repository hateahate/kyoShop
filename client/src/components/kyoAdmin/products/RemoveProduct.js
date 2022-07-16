import React from "react";
import { removeProduct } from "../../../http/productAPI";
import { Button } from "react-bootstrap";

const RemoveAction = (props) => {
    const formData = new FormData();
    formData.append('id', props.itemId);
    removeProduct(formData);
}

const RemoveProduct = (props) => {
    return (
        <Button onClick={() => RemoveAction(props)}>Remove</Button>
    )
}

export default RemoveProduct
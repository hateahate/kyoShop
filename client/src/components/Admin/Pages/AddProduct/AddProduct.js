import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Context } from "../../../../index";
import {
  createProduct,
  fetchProducts,
  fetchCategories,
} from "../../../../api/productAPI";
import styled from "styled-components";
import AdminUI from "../../Ui/AdminUI";
import { Card } from "react-bootstrap";
import "./AddProduct.css";
import AdminProducts from "../ProductsList/ProductList";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [moq, setMoq] = useState(0);
  const [qtyStep, setQtyStep] = useState(0);
  const [stock, setStock] = useState(0);
  const [sku, setSku] = useState(false);
  const [preview, setPreview] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryList, setCategoryList] = useState(null);
  const [loadedCats, setLoadedCats] = useState(false);
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const addInfo = () => {
    console.log(info)
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const appendCategories = (id) => {
    let previous = selectedCategories;
    if (previous.includes(id)) {
      previous.splice(previous.indexOf(id), 1);
      console.log("Стало так" + previous);
      setSelectedCategories(previous);
    } else {
      previous.push(id);
      console.log("А тут теперь так " + previous);
      setSelectedCategories(previous);
    }
  };

  const addProduct = () => {
    let itemId = 0;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", `${price}`);
    formData.append("stock", `${stock}`);
    formData.append("moq", `${moq}`);
    formData.append("qty_step", `${qtyStep}`);
    formData.append("img", file);
    formData.append("sku", sku);
    formData.append("attributes", JSON.stringify(info));
    formData.append("category", selectedCategories);
    createProduct(formData)
      .then((data) => {
        if (data) {
          NotificationManager.success(
            `Product "${title}" successfully created`,
            "Success"
          );
          return data.id;
        } else {
          NotificationManager.error(
            `Product "${title}" cannot be created`,
            `${data}`
          );
        }
      })
  };

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategoryList(data);
      setLoadedCats(true);
    });
  }, []);

  if (loadedCats) {
    return (
      <AdminUI>
        {console.log(file)}
        <h1>Add new product</h1>
        <NotificationContainer />
        <Form>
          <FlexBox>
            <Card className="product-title">
              <Card.Header>Product title</Card.Header>
              <Card.Body>
                <Form.Control
                  aria-label="large"
                  value={title}
                  onChange={(e) => setTitle(String(e.target.value))}
                  placeholder="Product title"
                  type="text"
                ></Form.Control>
              </Card.Body>
            </Card>
            <Card className="product-image">
              <img src={preview}></img>
              <Card.Header>Product image</Card.Header>
              <Card.Body>
                <Form.Control
                  className="mt-3"
                  type="file"
                  onChange={selectFile}
                />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Categories</Card.Header>
              <Card.Body>
                {categoryList.map((item) => {
                  return (
                    <Form.Check key={item.id} type={"checkbox"}>
                      <Form.Check.Input
                        type={"checkbox"}
                        onClick={() => appendCategories(item.id)}
                      />
                      <Form.Check.Label>{item.title}</Form.Check.Label>
                    </Form.Check>
                  );
                })}
              </Card.Body>
            </Card>
          </FlexBox>
          <Card>
            <Card.Header>Product details</Card.Header>
            <Card.Body>
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
                type="number"
              />
              <Form.Label>Stock</Form.Label>
              <Form.Control
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                placeholder="Currently in stock"
                type="number"
              />
              <Form.Label>Minimal order quantity (MOQ)</Form.Label>
              <Form.Control
                value={moq}
                onChange={(e) => setMoq(Number(e.target.value))}
                placeholder="Minimal order quantity"
                type="number"
              />
              <Form.Label>SKU</Form.Label>
              <Form.Control
                value={moq}
                onChange={(e) => setSku(e.target.value)}
                placeholder="SKU"
                type="text"
              />
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-success" onClick={addProduct}>
                Add
              </Button>
            </Card.Footer>
          </Card>
        </Form>
        <Form>
          <Button
            variant={"outline-dark"}
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {info.map(i =>
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          )}
        </Form>
      </AdminUI>
    );
  } else {
    return <p> Nothing here</p>;
  }
};
export default AddProduct;

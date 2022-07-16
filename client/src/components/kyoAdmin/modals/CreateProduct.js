import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../../index";
import { createProduct, fetchProducts, fetchCategories } from "../../../http/productAPI";
import { observer } from "mobx-react-lite";
import styled from 'styled-components';

const FieldTitle = styled.p`
margin: 0;
font-weight: 600;
`;

const CreateProduct = observer(({ show, onHide }) => {
    const { product } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [moq, setMoq] = useState(0);
    const [qtyStep, setQtyStep] = useState(0);
    const [stock, setStock] = useState(0);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('stock', `${stock}`)
        formData.append('moq', `${moq}`)
        formData.append('qty_step', `${qtyStep}`)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FieldTitle>Product name</FieldTitle>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter product name"
                    />
                    <FieldTitle>Price</FieldTitle>
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Price"
                        type="number"
                    />
                    <FieldTitle>Stock</FieldTitle>
                    <Form.Control
                        value={stock}
                        onChange={e => setStock(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Currently in stock"
                        type="number"
                    />
                    <FieldTitle>MOQ</FieldTitle>
                    <Form.Control
                        value={moq}
                        onChange={e => setMoq(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Currently in stock"
                        type="number"
                    />
                    <FieldTitle>Product image</FieldTitle>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        WIP
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;
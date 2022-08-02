import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Context } from "../../../../index";
import { createProduct, fetchProducts, fetchCategories } from "../../../../api/productAPI";
import styled from 'styled-components';
import AdminUI from "../../Ui/AdminUI";
import { Card } from 'react-bootstrap';
import './AddProduct.css'
import AdminProducts from '../ProductsList/ProductList';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`


const AddProduct = () => {
    const { product } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [moq, setMoq] = useState(0);
    const [qtyStep, setQtyStep] = useState(0);
    const [stock, setStock] = useState(0);
    const [created, setCreated] = useState(false)

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
        createProduct(formData).then((data) => {
            if (data == true) {
                console.log(data)
                NotificationManager.success(`Product ${name} successfully created`, 'Success')
            }
            else {
                NotificationManager.error(`Product ${name} cannot be created.`, `${data}`);
            }
        });

    }

    return (
        <AdminUI>
            <NotificationContainer />
            <Form>
                <FlexBox>
                    <Card className='product-title'>
                        <Card.Header>Product name</Card.Header>
                        <Card.Body>
                            <Form.Control aria-label="large"
                                value={name}
                                onChange={e => setName(String(e.target.value))}
                                placeholder="Product name"
                                type="text"
                            >
                            </Form.Control>
                        </Card.Body>
                    </Card>
                    <Card className='product-image'>
                        <Card.Header>Product image</Card.Header>
                        <Card.Body>
                            <Form.Control
                                className="mt-3"
                                type="file"
                                onChange={selectFile}
                            />
                        </Card.Body>
                    </Card>
                </FlexBox>
                <Card>
                    <Card.Header>
                        Product details
                    </Card.Header>
                    <Card.Body>
                        <Form.Label>
                            Price
                        </Form.Label>
                        <Form.Control
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                            placeholder="Price"
                            type="number"
                        />
                        <Form.Label>
                            Stock
                        </Form.Label>
                        <Form.Control
                            value={stock}
                            onChange={e => setStock(Number(e.target.value))}
                            placeholder="Currently in stock"
                            type="number"
                        />
                        <Form.Label>
                            Minimal order quantity (MOQ)
                        </Form.Label>
                        <Form.Control
                            value={moq}
                            onChange={e => setMoq(Number(e.target.value))}
                            placeholder="Minimal order quantity"
                            type="number"
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-success" onClick={addProduct}>Add</Button>
                    </Card.Footer>
                </Card>
            </Form>
        </AdminUI >
    )
}

export default AddProduct
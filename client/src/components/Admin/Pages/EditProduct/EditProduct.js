import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { fetchOneProduct, updateProduct } from "../../../../API/productAPI";
import styled from 'styled-components';
import AdminUI from "../../Ui/AdminUI";
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`


const EditProduct = () => {

    // Информация о товаре

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [moq, setMoq] = useState(0);
    const [qtyStep, setQtyStep] = useState(0);
    const [stock, setStock] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // Изображение товара
    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const productUpdate = () => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('stock', `${stock}`);
        formData.append('moq', `${moq}`);
        formData.append('qty_step', `${qtyStep}`);
        formData.append('img', file);
        formData.append('info', JSON.stringify(info));
        updateProduct(formData).then(NotificationManager.success(`Product ${name} successfully updated`, 'Success'));
    }

    // Получаем ID из URL

    const { id } = useParams()

    // Получаем товар через productAPI по ID

    useEffect(() => {
        fetchOneProduct(id).then((data) => {
            setName(data.name);
            setPrice(data.price);
            setMoq(data.moq);
            setStock(data.stock);
            setIsLoaded(true);
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
            },
        )
    }, [])
    if (error) {
        return (
            <AdminUI>
                {NotificationManager.error(`${error.message}`, 'Error')}
                <NotificationContainer />
            </AdminUI>
        )
    } else if (!isLoaded) {
        return (
            <AdminUI>
                <h1>Loading</h1>
            </AdminUI>
        )
    } else {
        return (

            // Страница обёрнутая в UI

            <AdminUI>
                <NotificationContainer />
                {console.log(price)}
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
                            <Button variant="outline-success" onClick={productUpdate}>Update</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </AdminUI >
        )
    }
}
export default EditProduct
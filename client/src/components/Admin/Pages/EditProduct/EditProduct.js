import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { fetchOneProduct, updateProduct } from "../../../../http/productAPI";
import styled from 'styled-components';
import AdminUI from "../../Ui/AdminUI";
import { Card } from 'react-bootstrap';
import SuccessNotification from '../../Notifications/SuccessNotification';
import { useParams } from 'react-router-dom';


const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`


const EditProduct = () => {
    let productRaw = [];
    const [productId, setProductId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [moq, setMoq] = useState(0);
    const [qtyStep, setQtyStep] = useState(0);
    const [stock, setStock] = useState(0);
    const [created, setCreated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const updProduct = () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('stock', `${stock}`)
        formData.append('moq', `${moq}`)
        formData.append('qty_step', `${qtyStep}`)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        updateProduct(formData).then(data => setCreated(true))

    }

    const { id } = useParams()
    useEffect(() => {
        fetchOneProduct(id).then((data) => {
            setName(data.name);
            setPrice(data.price);
            setMoq(data.moq);
            setIsLoaded(true);
        },
            (error) => {
                setIsLoaded(true)
                setError(error)
            },
        )
    }, [])
    if (error) {
        return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка {console.log(isLoaded)}</div>
    } else {
        return (
            <AdminUI>
                {console.log(price)}
                <SuccessNotification name={name} draw={created} />
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
                            <Button variant="outline-success" onClick={updProduct}>Update</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </AdminUI >
        )
    }
}
export default EditProduct
import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../../index";
import { createProduct, fetchProducts, fetchCategories } from "../../../http/productAPI";
import { observer } from "mobx-react-lite";
import styled from 'styled-components';
import PageContainer from "../Ui/AdminUI";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PageBody = styled.div`
 
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
        createProduct(formData).then(data => setCreated(true))

    }

    return (
        <PageContainer>
            <PageBody>
                <Form.Control aria-label="large"
                    value={name}
                    onChange={e => setName(String(e.target.value))}
                    placeholder="Product name"
                    type="text"
                >
                </Form.Control>
            </PageBody>
        </PageContainer>
    )
}

export default AddProduct
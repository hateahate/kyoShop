import React, { useState, useEffect } from "react";
import { Button, Table, Dropdown, Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../../..";
import { createProduct, fetchProducts, fetchCategories, removeProduct } from "../../../../api/productAPI";
import styled from "styled-components";
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { Link, Route } from "react-router-dom";
const TableContainer = styled.div`

`
const EditLabel = styled.span`
color: white;
`

function ProductList(props) {
    // States
    const [productVisible, setProductVisible] = useState(false);
    const [items, setItems] = useState([])
    const [needReload, setNeedReload] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    // Remove selected product

    const RemoveProduct = (id) => {
        const formData = new FormData();
        formData.append('id', id);
        removeProduct(formData);
    }

    const HandleClicker = (id) => {
        RemoveProduct(id);
        console.log(needReload)
        setNeedReload(true);
    }

    const updateProducts = () => {
        setNeedReload(true);
        console.log(needReload);
        setProductVisible(false);
    }



    // useEffect for products loading
    useEffect(() => {
        fetchProducts(null, 1, 100).then(
            (result) => {
                setIsLoaded(true)
                setItems(result.rows)
                setNeedReload(false)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            },
        )
        return () => {

        }
    }, [needReload])
    if (error) {
        return (
            <div>
                {NotificationManager.error(`${error.message}`, 'Error')}
                <NotificationContainer />
            </div>
        )
    } else if (!isLoaded) {
        return (
            <h1>Loading</h1>
        )
    } else {
        return (

            // HTML

            <TableContainer>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td><Button onClick={() => HandleClicker(item.id)}>Delete</Button></td>
                                <td><Button variant={'primary'}><Link to={'/admin/products/edit/' + item.id}><EditLabel>Edit</EditLabel></Link></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        )
    }
}

export default ProductList
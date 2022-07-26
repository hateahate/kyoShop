import React, { useState, useEffect } from "react";
import { Button, Table, Dropdown, Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../..";
import { createProduct, fetchProducts, fetchCategories, removeProduct } from "../../../http/productAPI";
import styled from "styled-components";
import CreateProduct from "../subComponents/CreateProduct";
const TableContainer = styled.div`

`

function AdminProducts(props) {
    const [productVisible, setProductVisible] = useState(false);
    // Items store and reload control
    const [items, setItems] = useState([])
    const [needReload, setNeedReload] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [updated, setUpdated] = useState(false)

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

  const  updateProducts = () => {
        setNeedReload(true);
        console.log(needReload);
        setProductVisible(false);
     }



    // useEffect for item loading
    useEffect(() => {
        fetchProducts(null,1,100).then(
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
        return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Загрузка {console.log(isLoaded)}</div>
    } else {
        return (
            <>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} updateProducts ={()  =>updateProducts()}/>
            <Button variant={'success'} className='mt-2' onClick={() => setProductVisible(true)}>Add product</Button>
            <TableContainer>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
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
                                <td><Button variant={'primary'}>Edit</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            </>
        )
    }
}

export default AdminProducts
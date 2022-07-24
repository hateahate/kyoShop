import React, { useState, useEffect } from "react";
import { fetchProducts, removeProduct } from "../../../http/productAPI";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";

const RemoveButton = styled.button`
    
`
const TableContainer = styled.div`

`

function AdminProducts() {
    const RemoveButton = styled.button`
    
`
    // Items store and reload control
    const [items, setItems] = useState([])
    const [needReload, setNeedReload] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    // Remove selected product
    const RemoveProduct = (id) => {
        const formData = new FormData();
        formData.append('id', id);
        removeProduct(formData);
        setNeedReload(true);
        console.log(needReload)
    }

    // useEffect for item loading
    useEffect(() => {
        fetchProducts().then(
            (result) => {
                setIsLoaded(true)
                setItems(result.rows)
                setNeedReload(true)
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
                                <td><RemoveButton onClick={() => RemoveProduct(item.id)}>Delete</RemoveButton></td>
                                <td><Button variant={'primary'}>Edit</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        )
    }
}

export default AdminProducts
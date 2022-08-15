import React, { useState, useEffect } from "react";
import { Button, Table, Dropdown, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { Link, Route } from "react-router-dom";
import RemoveModal from  "./../ProductsList/RemoveModal"
import { fetchPosts, removePost } from "../../../../api/postAPI";
const TableContainer = styled.div`

`
const EditLabel = styled.span`
color: white;
`

function PostList() {

    // States
    const [items, setItems] = useState([])
    const [needReload, setNeedReload] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [modalActive, setModalActive] = useState(false);
    const [currentItemId, setCurrentItemId] = useState(0);

    const RemoveProduct = (id) => {
        const formData = new FormData();
        formData.append('id', id);
        removePost(formData).then(NotificationManager.success(`Product removed`, 'Success'));
        setNeedReload(true);
    }

    const HandleClicker = (id) => {
        setCurrentItemId(Number(id))
        setModalActive(true)
    }

    // useEffect for products loading
    useEffect(() => {
        fetchPosts(null, 1, 100).then(
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
            <h1>Loading...</h1>
        )
    } else {
        return (

            // HTML
            <TableContainer>
                <h1>Products</h1>
                <NotificationContainer />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                {console.log(item.id)}
                                <td><Button onClick={() => HandleClicker(item.id)}>Delete</Button></td>
                                <td><Button variant={'primary'}><Link to={'/admin/products/edit/' + item.id}><EditLabel>Edit</EditLabel></Link></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <RemoveModal modalActive={modalActive} setModalActive={setModalActive} itemId={currentItemId} removeItem={RemoveProduct} />
            </TableContainer>
        )
    }
}

export default PostList
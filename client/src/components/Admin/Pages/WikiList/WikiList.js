import React, { useState, useEffect } from "react";
import { Button, Table, Dropdown, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { Link } from "react-router-dom";
import RemoveModal from "../RemoveModal";
import { fetchWiki, removeWiki } from "../../../../api/wikiAPI";
const TableContainer = styled.div`

`
const EditLabel = styled.span`
color: white;
`

function WikiList() {

    // States
    const [items, setItems] = useState([])
    const [needReload, setNeedReload] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [modalActive, setModalActive] = useState(false);
    const [currentItemId, setCurrentItemId] = useState(0);

    const RemoveWiki = (id) => {
        console.log(id)
        const formData = new FormData();
        formData.append('id', id);
        removeWiki(formData).then(NotificationManager.success(`Post removed`, 'Success'));
        setNeedReload(true);
    }

    const HandleClicker = (id) => {
        setCurrentItemId(Number(id))
        setModalActive(true)
    }

    // useEffect for products loading
    useEffect(() => {
        fetchWiki(1, 100).then(
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
                <h1>All wiki posts</h1>
                <NotificationContainer />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.userId}</td>
                                <td><Button onClick={() => HandleClicker(item.id)}>Delete</Button></td>
                                <td><Button variant={'primary'}><Link to={'/admin/posts/edit/' + item.id}><EditLabel>Edit</EditLabel></Link></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <RemoveModal modalActive={modalActive} setModalActive={setModalActive} itemId={currentItemId} removeItem={RemoveWiki} />
            </TableContainer>
        )
    }
}

export default WikiList
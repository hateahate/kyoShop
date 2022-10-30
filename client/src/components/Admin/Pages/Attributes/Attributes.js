import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { NotificationContainer, NotificationManager } from "react-notifications";
import styled from "styled-components";
import { fetchAttributes, removeAttribute } from "../../../../api/categoriesAPI";
import AdminUI from "../../Ui/AdminUI";
import RemoveModal from "../RemoveModal";
const TableContainer = styled.div`

`

const Attributes = () => {
    const [attributes, setAttributes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [removableId, setRemovableId] = useState(null);
    // Loading cats for table draw
    useEffect(() => {
        fetchAttributes().then((data) => {
            setAttributes(data);
            console.log(data);
        }).finally(() => {
            setIsLoaded(true);
        })
    }, [isLoaded])

    const openRemoveModal = (id) => {
        setRemovableId(id)
        setRemoveModal(true);
    }


    const removeSelectedAttribute = (id) => {
        console.log(id)
        removeAttribute(id).then((data) => {
            if (data.status == 'removed') {
                NotificationManager.success(`Attribute removed`, 'Success')
            }
            else {
                NotificationManager.success(`${data.message}`, 'Error')
            }
            setIsLoaded(false);
            setRemovableId(null);
        })
    }
    if (!isLoaded) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <AdminUI>
            <h1>Attributes</h1>
            <NotificationContainer />
            <TableContainer>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Assigned product id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {attributes.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.productId}</td>
                                <td><Button onClick={() => openRemoveModal(item.id)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <RemoveModal modalActive={removeModal} setModalActive={setRemoveModal} itemId={removableId} removeItem={removeSelectedAttribute} />
        </AdminUI >
    )

}

export default Attributes
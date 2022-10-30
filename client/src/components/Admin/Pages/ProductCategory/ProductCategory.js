import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { NotificationContainer, NotificationManager } from "react-notifications";
import styled from "styled-components";
import { removeCategory } from "../../../../api/categoriesAPI";
import { createCategory, fetchCategories } from "../../../../api/productAPI";
import AdminUI from "../../Ui/AdminUI";
import RemoveModal from "../RemoveModal";
import AddCategoryModal from "./AddCategoryModal";
const TableContainer = styled.div`

`

const FlexBox = styled.div`
display: flex;
`

const ProductCategory = () => {
    const [categories, setCategories] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [removableId, setRemovableId] = useState(null);
    // Loading cats for table draw
    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data);
            console.log(data);
        }).finally(() => {
            setIsLoaded(true);
        })
    }, [isLoaded])

    // Open add modal
    const openAddModal = () => {
        setModalActive(true)
    }

    const openRemoveModal = (id) => {
        setRemovableId(id)
        setRemoveModal(true);
    }


    const removeSelectedCategory = (id) => {
        let formData = new FormData();
        formData.append('id', id);
        removeCategory(formData).then((data) => {
            console.log(data)
            if (data == 'Removed') {
                NotificationManager.success(`Category removed`, 'Success')
            }
            setIsLoaded(false);
            setRemovableId(null);
        })
    }

    const addCategory = (name, childOf) => {
        console.log(name, childOf)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('childOf', Number(childOf));
        createCategory(formData).then((data) => {
            if (data.id) {
                NotificationManager.success('YEP!', '!PEY');
                setIsLoaded(false);
                console.log(data);
            }
            else {
                NotificationManager.error(`${data}`, 'Error');
            }
        })
    }
    if (!isLoaded) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <AdminUI>
            <h1>Product categories</h1>
            <Button onClick={() => openAddModal()}>Add new</Button>
            <NotificationContainer />
            <TableContainer>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Parent category ID</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.childOf}</td>
                                <td><Button onClick={() => openRemoveModal(item.id)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <AddCategoryModal modalActive={modalActive} setModalActive={setModalActive} addItem={addCategory} />
            <RemoveModal modalActive={removeModal} setModalActive={setRemoveModal} itemId={removableId} removeItem={removeSelectedCategory} />
        </AdminUI >
    )

}

export default ProductCategory
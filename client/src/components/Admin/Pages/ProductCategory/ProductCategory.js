import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { NotificationContainer, NotificationManager } from "react-notifications";
import styled from "styled-components";
import { createCategory, fetchCategories } from "../../../../api/productAPI";
import AdminUI from "../../Ui/AdminUI";
import AddCategoryModal from "./AddCategoryModal";
const TableContainer = styled.div`

`

const ProductCategory = () => {
    const [categoryName, setCategoryName] = useState(null);
    const [categories, setCategories] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalActive, setModalActive] = useState(false);
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

    const addCategory = (name) => {
        const formData = new FormData();
        formData.append('name', name);
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
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            <AddCategoryModal modalActive={modalActive} setModalActive={setModalActive} addItem={addCategory} />
        </AdminUI >
    )

}

export default ProductCategory
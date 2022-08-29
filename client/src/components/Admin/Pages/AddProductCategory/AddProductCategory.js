import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NotificationContainer, NotificationManager } from "react-notifications";
import styled from "styled-components";
import { createCategory } from "../../../../api/productAPI";
import AdminUI from "../../Ui/AdminUI";

const AddProductCategory = () => {
    const [categoryName, setCategoryName] = useState(null)
    const handleClick = () => {
        const formData = new FormData();
        formData.append('name', categoryName);
        createCategory(formData).then((data) => {
            if (data.id) {
                NotificationManager.success('YEP!', '!PEY')
                console.log(data)
            }
            else {
                NotificationManager.error(`${data}`, 'Error')
            }
        })
    }
    return (
        <AdminUI>
            <NotificationContainer />
            <Form>
                <Form.Label>Название категории</Form.Label>
                <Form.Control type="text" onChange={(e) => { setCategoryName(e.target.value); console.log(categoryName) }} />
                <Button onClick={() => handleClick()}>Добавить</Button>
            </Form>
        </AdminUI>
    )

}

export default AddProductCategory
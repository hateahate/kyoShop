import React, { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';


const AddCategoryModal = ({ modalActive, setModalActive, addItem }) => {

    const [name, setName] = useState('');
    // Пропы modalActive и setModalActive отвечают за обработку состояния отрисовки модального окна
    // itemId передает проп с id текущего товара который будет проброшен в проп removeItem в котором записан
    // хэндлер удаления чего-либо во внешнем компоненте.
    // Контроль состояния отрисовки осуществляется состояниями внешнего компонента из которого вызывается модалка

    const handleAction = () => {
        setModalActive(false)
        addItem(name)
    };

    const handleClose = () => {
        setModalActive(false);
    }


    return (
        <>
            <Modal show={modalActive} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Enter category name</Form.Label>
                    <Form.Control type="text" placeholder="Category name" onChange={(e) => { setName(e.target.value); console.log(e.target.value) }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAction}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCategoryModal
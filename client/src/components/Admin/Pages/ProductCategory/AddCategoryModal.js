import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import { fetchCategories } from "../../../../api/productAPI";


const AddCategoryModal = ({ modalActive, setModalActive, addItem }) => {

    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);
    const [childOf, setChildOf] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // Пропы modalActive и setModalActive отвечают за обработку состояния отрисовки модального окна
    // itemId передает проп с id текущего товара который будет проброшен в проп removeItem в котором записан
    // хэндлер удаления чего-либо во внешнем компоненте.
    // Контроль состояния отрисовки осуществляется состояниями внешнего компонента из которого вызывается модалка
    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data);
            console.log(data);
        })
    }, [])

    const handleAction = () => {
        setModalActive(false)
        addItem(name, childOf)
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
                    <Form.Label>Select parent category</Form.Label>
                    <Form.Select onChange={(e) => { setChildOf(e.target.value); console.log(e.target.value) }}>
                        <option>Select parent category</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
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
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';


const RemoveModal = ({ modalActive, setModalActive, itemId, removeItem }) => {

    // Пропы modalActive и setModalActive отвечают за обработку состояния отрисовки модального окна
    // itemId передает проп с id текущего товара который будет проброшен в проп removeItem в котором записан
    // хэндлер удаления чего-либо во внешнем компоненте.
    // Контроль состояния отрисовки осуществляется состояниями внешнего компонента из которого вызывается модалка

    const handleAction = () => {
        setModalActive(false)
        removeItem(itemId)
    };

    const handleClose = () => {
        setModalActive(false);
    }


    return (
        <>
            <Modal show={modalActive} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Removing</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item? The process is irreversible!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAction}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemoveModal
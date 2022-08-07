import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';


const RemoveModal = ({ modalActive, setModalActive, itemId, removeItem }) => {
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
                    <Modal.Title>Removing a product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product? The process is irreversible!</Modal.Body>
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
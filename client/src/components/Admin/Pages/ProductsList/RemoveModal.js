import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';


const RemoveModal = ({ modalActive, setModalActive, acceptRemoval, itemId, removeItem }) => {
    console.log('modal entry point (itemid): ' + itemId)
    const handleAction = () => {
        setModalActive(false)
        acceptRemoval(true)
        removeItem(itemId)
    };

    const handleClose = () => {
        setModalActive(false);
    }


    return (
        <>
            <Modal show={modalActive} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>modal test</Modal.Title>
                </Modal.Header>
                <Modal.Body>current item id: {itemId}</Modal.Body>
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
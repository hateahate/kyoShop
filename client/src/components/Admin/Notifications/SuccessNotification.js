import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function SuccessNotification({ name, draw }) {
    const [show, setShow] = useState(draw);

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>Product added</Alert.Heading>
                <p>
                    Product "{name}" successfully added
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Ok
                    </Button>
                </div>
            </Alert>
        </>
    );
}

export default SuccessNotification
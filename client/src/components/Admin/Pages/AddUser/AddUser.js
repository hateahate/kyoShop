import React, { useEffect } from "react";
import AdminUI from "../../Ui/AdminUI";
import { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { useParams } from 'react-router-dom';
import { getUserById, updateUser } from "../../../../api/userAPI"

// Styled components
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
`;




const AddUser = () => {

    // States
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [approved, setApproved] = useState('')

    // Save changes
    const UserCreate = () => {
        const formData = new FormData();
        formData.append('first_name', firstName)
        formData.append('last_name', lastName)
        formData.append('email', email)
        formData.append('approved', Boolean(approved))
        formData.append('role', role)
        // updateUser(formData).then((data) => {
        //    if (data == true) {
        //        NotificationManager.success(`User "${email}" successfully updated`, 'Success')
        //    }
        //    else {
        //        NotificationManager.error(`User "${email}" cannot be updated`, `${data}`);
        //    }
        // });
    }

    return (
        <AdminUI>
            <NotificationContainer />
            <Form>
                <Container>
                    <Card>
                        <Card>
                            <Card.Header>
                                First name
                            </Card.Header>
                            <Card.Body>
                                <Form.Control aria-label="large" value={firstName} onChange={e => setFirstName(String(e.target.value))} placeholder='First name' type='text' />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Last name
                            </Card.Header>
                            <Card.Body>
                                <Form.Control aria-label="large" value={lastName} onChange={e => setLastName(String(e.target.value))} placeholder='First name' type='text' />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Email
                            </Card.Header>
                            <Card.Body>
                                <Form.Control aria-label="large" value={email} onChange={e => setEmail(String(e.target.value))} placeholder='user@dejikyo.com' type='email' />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Role
                            </Card.Header>
                            <Card.Body>
                                <Form.Control aria-label="large" value={role} onChange={e => setRole(String(e.target.value))} placeholder='role' type='text' />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Approved
                            </Card.Header>
                            <Card.Body>
                                <Form.Control aria-label="large" value={approved} onChange={e => setApproved(String(e.target.value))} placeholder='' type='text' />
                            </Card.Body>
                        </Card>
                        <Card.Footer><Button variant="success" onClick={UserCreate}>Update</Button></Card.Footer>
                    </Card>
                </Container>
            </Form>
        </AdminUI>
    )
}

export default AddUser
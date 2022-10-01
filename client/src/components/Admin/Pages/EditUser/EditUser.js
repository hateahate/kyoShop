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




const EditUser = () => {

    const { id } = useParams()

    // States
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [approved, setApproved] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState()

    // Save changes
    const UserUpdate = () => {
        const formData = new FormData();
        formData.append('id', id)
        formData.append('first_name', firstName)
        formData.append('last_name', lastName)
        formData.append('email', email)
        formData.append('approved', Boolean(approved))
        formData.append('role', role)
        updateUser(formData).then((data) => {
            if (data == true) {
                NotificationManager.success(`User "${email}" successfully updated`, 'Success')
            }
            else {
                NotificationManager.error(`User "${email}" cannot be updated`, `${data}`);
            }
        });
    }

    // Load Data
    useEffect(() => {
        getUserById(id).then((data) => {
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setEmail(data.email)
            setRole(data.role)
            setApproved(data.approved)
            setIsLoaded(true)
        }, (error) => {
            setIsLoaded(false)
            setError(error)
        })
    }, [])
    if (error) {
        return (
            <div>
                {NotificationManager.error(`${error.message}`, 'Error')}
                <NotificationContainer />
            </div>
        )
    }
    else if (!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }
    else {
        return (
            <AdminUI>
                <NotificationContainer />
                <h1>Edit user {email}</h1>
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
                            <Card.Footer><Button variant="success" onClick={UserUpdate}>Update</Button></Card.Footer>
                        </Card>
                    </Container>
                </Form>
            </AdminUI>
        )
    }
}

export default EditUser
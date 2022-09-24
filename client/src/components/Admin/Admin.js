import React, { useState, useContext, useEffect } from 'react';
import AdminUI from './Ui/AdminUI';
import { Context } from '../..';
import { Button, Form } from 'react-bootstrap';
import { updatePassword } from '../../api/userAPI';


const Admin = () => {
    const { user } = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(true);
    const [prevPass, setPrevPass] = useState(null);
    const [newPass, setNewPass] = useState(null);

    const changePassword = () => {
        const formData = new FormData();
        formData.append('oldpassword', prevPass);
        formData.append('password', newPass);
        formData.append('id', user.user.id)
        updatePassword(formData).then(data => console.log(data))
    }

    if (isLoaded == false) {
        return <h1>Loading</h1>
    }
    return (
        <AdminUI>
            <Form.Control onChange={(e) => setPrevPass(e.target.value)} ></Form.Control>
            <Form.Control onChange={(e) => setNewPass(e.target.value)} ></Form.Control>
            <Button onClick={() => { changePassword() }}>Change</Button>
        </AdminUI>
    )
}
export default Admin
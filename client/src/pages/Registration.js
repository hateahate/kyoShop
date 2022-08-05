import React, { useState } from 'react';
import styled from 'styled-components';
import { registration } from '../api/userAPI';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import { Form } from 'react-bootstrap'

const PageContainer = styled.div`

`

const RegistrationHeader = styled.div`

`
const Registration = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Send = () => {
        let formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', 'user');
        registration(formData).then(data => console.log(data))
    }

    return (

        <PageContainer>
            <Form.Label>Имя</Form.Label>
            <Form.Control value={firstName} onChange={(e) => { setfirstName(e.target.value); console.log(firstName) }}></Form.Control>
            <Form.Label>Фамилия</Form.Label>
            <Form.Control value={lastName} onChange={e => setLastName(e.target.value)}></Form.Control>
            <Form.Label>Мыло</Form.Label>
            <Form.Control value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
            <Form.Label>Пасс</Form.Label>
            <Form.Control value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
            <DefaultButton title="Create an account" onClick={() => Send()} />
        </PageContainer>
    );
};

export default Registration;



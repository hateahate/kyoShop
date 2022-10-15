import React, { useContext, useState } from 'react';
import { login } from "../api/userAPI";
import { Form } from 'react-bootstrap'
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultButton from '../components/VitaforestUI/Interface/Buttons/DefaultButton';
import { NotificationContainer, NotificationManager } from "react-notifications";


const LoginForm = styled.div`
`
const Auth = observer(() => {

  const { user } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const click = async () => {
    try {
      const data = await login(email, password);
      user.setUser(data);
      user.setIsAuth(true);
      NotificationManager.success('Welcome!', 'Success');
      setTimeout(() => {
        if (data.role == 'admin') {
          navigate('/admin')
        }
      }, 3000)
    }
    catch (e) {
      NotificationManager.error(`${e.response.data.message}`, 'Error');
    }
  }
  return (
    <LoginForm>
      <NotificationContainer />
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></Form.Control>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
      <DefaultButton type='submit' onClick={() => click()} title='Submit' />
    </LoginForm>

  )
})

export default Auth

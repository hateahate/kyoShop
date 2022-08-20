import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Admin from '../components/Admin/Admin';
import { Context } from '..';


const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const AdminPage = () => {
    const { user } = useContext(Context);
    if (!user.isAuth) {
        return (
            <h1>Необходима авторизация</h1>
        )
    }
    else if (user.user.role != 'admin') {
        return (
            <h1>Недостаточно прав!</h1>
        )
    }
    return (
        <Page>
            <Admin />
        </Page>
    )
}

export default AdminPage;
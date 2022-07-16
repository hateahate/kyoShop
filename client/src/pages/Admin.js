import React, { useState } from 'react';
import styled from 'styled-components';
import AdminUI from '../components/kyoAdmin/navigation/AdminUI';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);
    return (
        <Page>
            <AdminUI />
        </Page>
    )
}

export default Admin;
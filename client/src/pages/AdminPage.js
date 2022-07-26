import React, { useState } from 'react';
import styled from 'styled-components';
import Admin from '../components/Admin/Admin';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const AdminPage = () => {
    return (
        <Page>
            <Admin />
        </Page>
    )
}

export default AdminPage;
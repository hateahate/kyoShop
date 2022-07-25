import React, { useState } from 'react';
import styled from 'styled-components';
import Admin from '../components/Admin/Admin';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 95%;
  margin-left: 2.5%;
`

const AdminPage = () => {
    return (
        <Page>
            <Admin />
        </Page>
    )
}

export default AdminPage;
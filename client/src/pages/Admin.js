import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import Footer from '../components/VitaforestUI/Interface/Footer/Footer';
import Header from '../components/VitaforestUI/Interface/Header/Header';
import CreateProduct from '../components/modals/CreateProduct';
import CreateCategory from '../components/modals/CreateCategory';
const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    return (
        <Page>
            <Header />
            <Container className='d-flex flex-column'>
                <h1>kyoShop Admin Panel</h1>
                <Button variant={'primary'} className='mt-2' onClick={() => setCategoryVisible(true)}>Category</Button>
                <Button variant={'primary'} className='mt-2'>Post</Button>
                <Button variant={'primary'} className='mt-2'>Wiki</Button>
            </Container>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
            <Footer />
        </Page>
    )
}

export default Admin;
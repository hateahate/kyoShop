import * as React from 'react';
import styled from 'styled-components';
import ProductsAdmin from '../components/VitaforestUI/Admin/subpages/Products';
const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
`

const SideMenu = styled.div`
    width:30%;
`
const MainContent =styled.div`
    width:70%;
`
const Admin =()=>{
    return(
        <Container>
            <SideMenu>
              JIJA
            </SideMenu>
            <ProductsAdmin/>
        </Container>
    )
}

export default Admin;
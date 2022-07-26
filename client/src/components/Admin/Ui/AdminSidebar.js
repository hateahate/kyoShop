import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
display: flex;
height: 100vh;
overflow: scroll-initial;
`

const SidebarHeadLink = styled.a`
text-decoration: none;
color: white;
&:hover{
    color: white;
}
`

const AdminSidebar = () => {
    return (
        <SidebarContainer>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <SidebarHeadLink href='/'>
                        kyoShop
                    </SidebarHeadLink>
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem>HELLO BLYAD</CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter>
                </CDBSidebarFooter>
            </CDBSidebar>
        </SidebarContainer>
    );
};

export default AdminSidebar;
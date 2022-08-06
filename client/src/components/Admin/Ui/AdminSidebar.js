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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
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

const FooterText = styled.p`
color: white;
font-size: 10px;
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
                        <CDBSidebarMenuItem><FooterText>kyoShop альфа как бэ</FooterText></CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><FooterText>С божьей помощью во славу релиза</FooterText></CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Link to='/admin/products'>Products</Link></CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Link to='/admin/products/add'>Add new product</Link></CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Link to='/admin/posts/add'>Add new post</Link></CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter>
                </CDBSidebarFooter>
            </CDBSidebar>
        </SidebarContainer >
    );
};

export default AdminSidebar;
import React from "react";
import styled from "styled-components";
import AdminSidebar from "./AdminSidebar";

const FlexContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

const Main = styled.div`
width: 100%;
height: 100%;
margin: 0px;
`;

const SidebarArea = styled.div`
margin: 0px;
`;

const ContentArea = styled.div`
padding: 20px 20px;
width: 100%;
`;

const AdminUI = ({ children }) => {
    return (
        <Main>
            <AdminSidebar />
            <ContentArea>
                {children}
            </ContentArea>
        </Main>
    )
}

export default AdminUI
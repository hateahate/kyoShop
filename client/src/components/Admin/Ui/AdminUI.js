import React from "react";
import styled from "styled-components";
import AdminSidebar from "./AdminSidebar";

const FlexContainer = styled.div`
windth: 100%;
height: 100%;
display: flex;
`;

const Main = styled.div`
`;

const SidebarArea = styled.div`
`;

const ContentArea = styled.div`
`;

const PageContainer = ({ children }) => {
    return (
        <Main>
            <FlexContainer>
                <SidebarArea>
                    <AdminSidebar />
                </SidebarArea>
                <ContentArea>
                    {children}
                </ContentArea>
            </FlexContainer>
        </Main>
    )
}

export default PageContainer
import React from "react";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import styled from "styled-components";
const Container = styled.div`
`;

const ContentContainer = styled.div`
height: 90vh;
`

const Page = ({ children }) => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                {children}
            </ContentContainer>
            <Footer />
        </Container>
    )
};

export default Page
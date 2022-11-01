import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1 0 auto;
`;
const ContentContainer = styled.div``;

const Page = ({ children }) => {
  return (
    <Container>
      <Content>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Page;

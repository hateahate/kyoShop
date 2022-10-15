import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MobileAccountHead from '../components/VitaforestUI/Account/MobileAccountHead';
import Counter from '../components/VitaforestUI/Interface/Counter/Counter';
import Header from '../components/VitaforestUI/Interface/Header/Header';

const UIFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1128px) {
    justify-content: none;
    flex-direction: column;
  }
`

const Main = styled.div``

const Section = styled.div`
  margin-top: 25px;
`

function Ui() {
  return (
    <div>
      <Main>
        <Section>
          <MobileAccountHead fullName='Test User' email='test@test.com'></MobileAccountHead>
          <Counter qty='10' step='10' />
        </Section>
        <Section>
          <Header />
        </Section>
      </Main>
    </div>
  );
}

export default Ui

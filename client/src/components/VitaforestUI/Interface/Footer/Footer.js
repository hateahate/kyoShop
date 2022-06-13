import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './images/logo.svg'
const FooterContainer = styled.div`
  background-color: #1a212d;
  box-sizing: border-box;
  padding: 30px 40px;
`
const FooterInner = styled.footer``

const Contacts = styled.div``

const ContactsText = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #eaebec;
  opacity: 0.5;
  margin-top: 27px;
`
const NavTitle = styled.h3`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.7;
  padding-left: 20px;
  position: relative;
  &::before {
    content: '+';
    font-size: 20px;
    font-weight: 900;
    position: absolute;
    left: 0;
    top: 2px;
  }
`
const FooterNavList = styled.div``
const FooterNav = styled.div``

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <Contacts>
          <Link to="/">
            <Logo />
          </Link>

          <ContactsText>
            Siberian Natural Products OÜ
            <br />
            Register code: 14377464
            <br />
            VAT No: EE102049370
            <br />
            Peterburi tee 47
            <br />
            Tallinn Harjumaa 11415
          </ContactsText>
        </Contacts>
        <FooterNav>
          <FooterNavList>
            <NavTitle>Company information</NavTitle>
          </FooterNavList>
          <FooterNavList>
            <NavTitle>Customer service</NavTitle>
          </FooterNavList>
          <FooterNavList>
            <NavTitle>Inspired by</NavTitle>
          </FooterNavList>
        </FooterNav>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer

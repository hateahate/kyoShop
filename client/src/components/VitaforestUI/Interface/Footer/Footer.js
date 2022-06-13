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

const FooterNav = styled.div``

const FooterNavWrapper = styled.div`
  .nav-expanded {
    display: block;
  }
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
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: none;
  a {
    text-decoration: none;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 158%;
    text-decoration-line: underline;
    color: #ffffff;
    opacity: 0.9;
  }
`

const NavLink = styled.li`
  padding-left: 20px;
`
const Footer = () => {
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false)
  const [isCustomerExpanded, setIsCustomerExpanded] = useState(false)
  const [isInspiredExpanded, setIsInspiredExpanded] = useState(false)
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
          <FooterNavWrapper>
            <NavTitle
              onClick={() => {
                setIsCompanyExpanded(!isCompanyExpanded)
              }}
            >
              Company information
            </NavTitle>
            <NavList
              className={isCompanyExpanded ? 'nav-expanded' : 'unexpanded'}
            >
              <NavLink>
                <Link to="/">About us</Link>
              </NavLink>
              <NavLink>
                <Link to="/">Company news</Link>
              </NavLink>
              <NavLink>
                <Link to="/">Production</Link>
              </NavLink>
            </NavList>
          </FooterNavWrapper>
          <FooterNavWrapper>
            <NavTitle
              onClick={() => {
                setIsCustomerExpanded(!isCustomerExpanded)
              }}
            >
              Customer service
            </NavTitle>
            <NavList
              className={isCustomerExpanded ? 'nav-expanded' : 'unexpanded'}
            >
              <NavLink>
                <Link to="/">Your account</Link>
              </NavLink>
              <NavLink>
                <Link to="/">Contact us</Link>
              </NavLink>
              <NavLink>
                <Link to="/">FAQ</Link>
              </NavLink>
            </NavList>
          </FooterNavWrapper>
          <FooterNavWrapper>
            <NavTitle
              onClick={() => {
                setIsInspiredExpanded(!isInspiredExpanded)
              }}
            >
              Inspired by
            </NavTitle>
            <NavList
              className={isInspiredExpanded ? 'nav-expanded' : 'unexpanded'}
            >
              <NavLink>
                <Link to="/">Industry news</Link>
              </NavLink>
              <NavLink>
                <Link to="/">Trends</Link>
              </NavLink>
              <NavLink>
                <Link to="/">Products in stock</Link>
              </NavLink>
            </NavList>
          </FooterNavWrapper>
        </FooterNav>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer

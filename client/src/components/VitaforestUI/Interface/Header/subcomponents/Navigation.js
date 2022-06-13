import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #fff;
  margin-top: 50px;
`
const MainList = styled.div`
  list-style: none;
`
const SubList = styled.ul`
  margin: 0px;
  list-style: none;
  padding: 20px 18px;
  background: #f7f8f9;
  .first-sub-item {
    padding-top: 0px;
  }
`

const MainItem = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px #eaebec;
  margin: 0;
  padding: 9px 18px;
  &:hover,
  &:focus,
  &:active {
    color: #40bf6a;
  }
`
const SubItem = styled.li`
  padding-top: 15px;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #303236;
  &:hover,
  &:focus,
  &:active {
    color: #40bf6a;
  }
`
const SubItemMain = styled.li`
  font-weight: 600;
  font-family: 'Proxima Nova';
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  padding-top: 15px;
  color: #303236;
  &:hover,
  &:focus,
  &:active {
    color: #40bf6a;
  }
`
const Navigation = () => {
  return (
    <Nav>
      <MainList>
        <MainItem>Products</MainItem>
        <SubList>
          <SubItemMain className="first-sub-item">Extracts</SubItemMain>
          <SubItem>Herbal extracts</SubItem>
          <SubItem>Mushroom extracts</SubItem>
          <SubItem>Fruit extracts</SubItem>
          <SubItemMain>Powders</SubItemMain>
          <SubItem>Herbal powders</SubItem>
          <SubItem>Mushroom powders</SubItem>
          <SubItem>Fruit powders</SubItem>
        </SubList>
        <MainItem>Company</MainItem>
        <SubList>
          <SubItem className="first-sub-item">About us</SubItem>
          <SubItem>Production</SubItem>
          <SubItem>FAQ</SubItem>
        </SubList>
        <MainItem>Plants database</MainItem>
        <MainItem>Blog</MainItem>
        <MainItem>Contacts</MainItem>
        <MainItem>In stock products</MainItem>
      </MainList>
    </Nav>
  )
}

export default Navigation

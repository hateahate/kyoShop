import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #fff;
`
const MainList = styled.div`
  list-style: none;
`
const SubList = styled.ul`
  list-style: none;
`

const MainItem = styled.p``
const SubItem = styled.li``
const SubItemMain = styled.li``
const Navigation = () => {
  return (
    <Nav>
      <MainList>
        <MainItem>Products</MainItem>
        <SubList>
          <SubItemMain>Extracts</SubItemMain>
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
          <SubItem>About us</SubItem>
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

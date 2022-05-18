import React from 'react'
import styled from 'styled-components'
import HeaderMenu from './subcomponents/HeaderMenu'
const HeaderContainer = styled.div`
  margin: 0 15;
`

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderMenu />
    </HeaderContainer>
  )
}

export default Header

import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as MobileSearchIcon } from '../images/mobileSearch.svg'
import { ReactComponent as MobileUserIcon } from '../images/mobileUser.svg'
import { ReactComponent as MobileCartIcon } from '../images/mobileCart.svg'
import { ReactComponent as BurgerIcon } from '../images/burger.svg'
import { ReactComponent as LogoMobileIcon } from '../images/logo-mobile.svg'
import { ReactComponent as CloseIcon } from '../images/close.svg'
import Navigation from './Navigation'
const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 15px;
`
const MenuContainer = styled.div`
  width: calc(100vw - 36px);
  margin: 0 auto;
  .navigation-menu {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    width: 90vw;
    height: 100vh;
    z-index: 2;
  }
  .expanded {
    display: block;
  }
`
const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const SearchShowButton = styled.button`
  background-color: transparent;
  border: none;
`

const MobileUserButton = styled.button`
  background-color: transparent;
  border: none;
`

const MobileCartButton = styled.button`
  background-color: transparent;
  border: none;
`
const MobileLogo = styled.div`
  margin-right: auto;
`

const HeaderMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <MenuContainer>
      <MenuWrapper>
        <BurgerButton
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <BurgerIcon />
        </BurgerButton>
        <MobileLogo>
          <Link to="/">
            <LogoMobileIcon />
          </Link>
        </MobileLogo>
        <SearchShowButton>
          <MobileSearchIcon />
        </SearchShowButton>
        <MobileUserButton>
          <MobileUserIcon />
        </MobileUserButton>
        <MobileCartButton>
          <MobileCartIcon />
        </MobileCartButton>
      </MenuWrapper>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <button
          className="close"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <CloseIcon />
        </button>
        <Navigation />
      </div>
    </MenuContainer>
  )
}
export default HeaderMenu

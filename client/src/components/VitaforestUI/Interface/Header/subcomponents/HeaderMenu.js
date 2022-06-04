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
  position: relative;
  .navigation-menu {
    position: absolute;
    top: 0;
    background-color: #fff;
    width: 90vw;
    height: 100vh;
    z-index: 3;
    left: -100vw;
    -webkit-transition: left 0.5s;
    transition: left 0.5s;
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      border: none;
      background: none;
    }
  }
  .navigation-menu.expanded {
    display: block;
    left: -18px;
    -webkit-transition: left 0.5s;
    transition: left 0.5s;
  }
  .jija {
    z-index: 2;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: 0.7;
    display: none;
    left: -18px;
  }
  .jija.shown {
    display: block;
  }
`
const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 11px;
  .logo-container.expanded {
    display: none;
  }
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
const SearchForm = styled.div`
  .search-container {
    position: absolute;
    display: flex;
    -webkit-transition: top 0.5s;
    top: -80px;
    transition: top 0.5s;
    width: 100vw;
    background-color: #fff;
    z-index: 3;
    left: -18px;
    box-sizing: border-box;
    padding: 10px 20px;
  }
  .expanded {
    -webkit-transition: top 0.5s;
    transition: top 0.5s;
    top: 0px;
  }
  .search-button {
    border: none;
    background-color: #fff;
    padding-top: 5px;
    vertical-align: baseline;
  }
  .search-input {
    width: calc(100vw - 68px);
    display: inline-block;
    box-shadow: 0px 1px 0px #eaebec;
    border: none;
  }
`
const HeaderMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <MenuContainer>
      <div
        className={isSearchExpanded || isNavExpanded ? 'jija shown' : 'jija'}
        onClick={() => {
          setIsNavExpanded(false)
          setIsSearchExpanded(false)
        }}
      ></div>
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
        <SearchForm>
          <div
            className={
              isSearchExpanded
                ? 'search-container expanded'
                : 'search-container'
            }
          >
            <input
              className="search-input"
              placeholder="Search entire store here..."
            />
            <button className="search-button">
              <MobileSearchIcon />
            </button>
          </div>
        </SearchForm>
        <SearchShowButton
          onClick={() => {
            setIsSearchExpanded(!isSearchExpanded)
          }}
        >
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

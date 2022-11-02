import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MobileSearchIcon } from "../images/mobileSearch.svg";
import { ReactComponent as MobileUserIcon } from "../images/mobileUser.svg";
import { ReactComponent as MobileCartIcon } from "../images/mobileCart.svg";
import { ReactComponent as BurgerIcon } from "../images/burger.svg";
import { ReactComponent as LogoMobileIcon } from "../images/logo-mobile.svg";
import { ReactComponent as CloseIcon } from "../images/close.svg";
import { ReactComponent as LogoDescktop } from "../images/logo-descktop.svg";
import { ReactComponent as SearchDescktop } from "../images/searchDescktop.svg";
import { ReactComponent as UserDescktop } from "../images/descktopUser.svg";
import { ReactComponent as CartDescktop } from "../images/descktopCart.svg";
import MediaQuery from "react-responsive";
import Navigation from "./Navigation";
const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 15px;
  @media screen and (min-width: 1128px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  width: calc(100% - 36px);
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 1128px) {
    width: 100vw;
  }
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
    @media screen and (min-width: 1128px) {
      display: block;
      position: relative;
      left: 0px;
      height: auto;
      width: 100vw;
    }
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      border: none;
      background: none;
      @media screen and (min-width: 1128px) {
        display: none;
      }
    }
  }
  .navigation-menu.expanded {
    display: block;
    left: -18px;
    -webkit-transition: left 0.5s;
    transition: left 0.5s;
  }
  .darked {
    z-index: 2;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: 0.7;
    display: none;
    left: -18px;
  }
  .darked.shown {
    display: block;
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 11px;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 1128px) {
    width: 1128px;
  }
  .logo-container.expanded {
    display: none;
  }
`;

const SearchShowButton = styled.button`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 1128px) {
    display: none;
  }
`;

const UserButton = styled.button`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 1128px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 30px;
    color: #303236;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 30px 5px 13px;
    gap: 10px;
    width: 159px;
    height: 40px;
    border: 1px solid rgba(216, 216, 216, 0.3);
    border-radius: 2px;
    position: relative;
    margin-right: 20px;
    margin-left: 33px;
    &::after {
      content: url("arrow.svg");
      position: absolute;
      right: 13px;
    }
  }
`;

const CartButton = styled.button`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 1128px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 17.5px;
    gap: 10px;
    width: 51px;
    height: 40px;
    border: 1px solid rgba(216, 216, 216, 0.3);
    border-radius: 2px;
  }
`;
const MobileLogo = styled.div`
  margin-right: auto;
  @media screen and (min-width: 1128px) {
    margin-right: 45px;
  }
`;
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
    @media screen and (min-width: 1128px) {
      width: 693px;
      position: inherit;
      left: 0px;
      padding: 0px;
    }

    .search-input {
      width: calc(100vw - 68px);
      display: inline-block;
      box-shadow: 0px 1px 0px #eaebec;
      border: none;
    }
    @media screen and (min-width: 1128px) {
      .search-input {
        border: 1px solid rgba(216, 216, 216, 0.3);
        border-radius: 2px;
        height: 38px;
        text-indent: 10px;
        box-shadow: none;
        width: 633px;
      }
    }
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
    @media screen and (min-width: 1128px) {
      width: 60px;
      height: 38px;
      background: #eaebec;
      border-radius: 0px 1px 1px 0px;
      padding: 12.5px 23.5px;
      gap: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
const HeaderMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <MenuContainer>
      <div
        className={
          isSearchExpanded || isNavExpanded ? "darked shown" : "darked"
        }
        onClick={() => {
          setIsNavExpanded(false);
          setIsSearchExpanded(false);
        }}
      ></div>
      <MenuWrapper>
        <BurgerButton
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <BurgerIcon />
        </BurgerButton>
        <MobileLogo>
          <Link to="/">
            <MediaQuery maxWidth={1127}>
              <LogoMobileIcon />
            </MediaQuery>
            <MediaQuery minWidth={1128}>
              <LogoDescktop />
            </MediaQuery>
          </Link>
        </MobileLogo>
        <SearchForm>
          <div
            className={
              isSearchExpanded
                ? "search-container expanded"
                : "search-container"
            }
          >
            <input
              className="search-input"
              placeholder="Search entire store here..."
            />
            <button className="search-button">
              <MediaQuery maxWidth={1127}>
                <MobileSearchIcon />
              </MediaQuery>
              <MediaQuery minWidth={1128}>
                <SearchDescktop />
              </MediaQuery>
            </button>
          </div>
        </SearchForm>
        <SearchShowButton
          onClick={() => {
            setIsSearchExpanded(!isSearchExpanded);
          }}
        >
          <MobileSearchIcon />
        </SearchShowButton>
        <UserButton>
          <MediaQuery maxWidth={1127}>
            <MobileUserIcon />
          </MediaQuery>
          <MediaQuery minWidth={1128}>
            <UserDescktop />
            <span>My account</span>
          </MediaQuery>
        </UserButton>
        <CartButton>
          <MediaQuery maxWidth={1127}>
            <MobileCartIcon />
          </MediaQuery>
          <MediaQuery minWidth={1128}>
            <CartDescktop />
          </MediaQuery>
        </CartButton>
      </MenuWrapper>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <button
          className="close"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <CloseIcon />
        </button>
        <Navigation />
      </div>
    </MenuContainer>
  );
};
export default HeaderMenu;

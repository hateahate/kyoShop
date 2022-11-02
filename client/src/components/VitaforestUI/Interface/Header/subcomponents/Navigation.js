import React, { useState } from "react";
import styled from "styled-components";

const RelativeParrent = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  background-color: #fff;
  margin-top: 50px;
  @media screen and (min-width: 1128px) {
    margin-top: 0;
    border: 1px solid #eaebec;
    margin-top: 20px;
  }
  @media screen and (max-width: 1128px) {
    @keyframes down1 {
      0% {
        height: 0%;
      }
      10% {
        height: 10%;
      }
      25% {
        height: 25%;
      }
      40% {
        height: 40%;
      }
      50% {
        height: 50%;
      }
      60% {
        height: 60%;
      }
      75% {
        height: 75%;
      }
      80% {
        height: 80%;
      }
      100% {
        height: max-content;
      }
    }
  }
`;
const MainList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 1128px;
  margin: 0 auto;
`;
const SubList = styled.ul`
  margin: 0px;
  list-style: none;
  padding: 20px 18px;
  background: #f7f8f9;
  height: 0px;
  display: none;
  &.sub-expanded {
    display: block;
    height: max-content;
    animation-name: down1;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    @media screen and (min-width: 1128px) {
      position: absolute;
      background: #ffffff;
      border: 1px solid #eaebec;
      border-radius: 4px;
      z-index: 8;
    }
  }
  .first-sub-item {
    padding-top: 0px;
  }
`;

const MainItem = styled.p`
  font-family: "Proxima Nova";
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
  @media screen and (min-width: 1128px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #303236;
    box-shadow: none;
    padding: 14px 20px;
    border-right: 1px solid #eaebec;
  }
`;
const SubItem = styled.li`
  padding-top: 15px;
  font-family: "Proxima Nova";
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
`;
const SubItemMain = styled.li`
  font-weight: 600;
  font-family: "Proxima Nova";
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
`;
const Navigation = () => {
  const [isSubFirstNavExpanded, setIsSubFirstNavExpanded] = useState(false);
  const [isSubSecondNavExpanded, setIsSubSecondExpanded] = useState(false);

  return (
    <Nav>
      <MainList>
        <RelativeParrent>
          <MainItem
            onClick={() => {
              setIsSubFirstNavExpanded(!isSubFirstNavExpanded);
            }}
            onMouseEnter={() => {
              setIsSubFirstNavExpanded(!isSubFirstNavExpanded);
            }}
            onMouseLeave={() =>
              setIsSubFirstNavExpanded(!isSubFirstNavExpanded)
            }
          >
            Products
          </MainItem>
          <SubList className={isSubFirstNavExpanded ? "sub-expanded" : "sub"}>
            <SubItemMain className="first-sub-item">Extracts</SubItemMain>
            <SubItem>Herbal extracts</SubItem>
            <SubItem>Mushroom extracts</SubItem>
            <SubItem>Fruit extracts</SubItem>
            <SubItemMain>Powders</SubItemMain>
            <SubItem>Herbal powders</SubItem>
            <SubItem>Mushroom powders</SubItem>
            <SubItem>Fruit powders</SubItem>
          </SubList>
        </RelativeParrent>
        <RelativeParrent>
          <MainItem
            onClick={() => {
              setIsSubSecondExpanded(!isSubSecondNavExpanded);
            }}
            onMouseEnter={() => {
              setIsSubSecondExpanded(!isSubSecondNavExpanded);
            }}
            onMouseLeave={() => setIsSubSecondExpanded(!isSubSecondNavExpanded)}
          >
            Company
          </MainItem>
          <SubList className={isSubSecondNavExpanded ? "sub-expanded" : "sub"}>
            <SubItem className="first-sub-item">About us</SubItem>
            <SubItem>Production</SubItem>
            <SubItem>FAQ</SubItem>
          </SubList>
        </RelativeParrent>

        <MainItem>Plants database</MainItem>
        <MainItem>Blog</MainItem>
        <MainItem>Contacts</MainItem>
        <MainItem>In stock products</MainItem>
      </MainList>
    </Nav>
  );
};

export default Navigation;

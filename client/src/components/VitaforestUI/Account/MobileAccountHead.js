import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PassIcon } from './images/pass.svg';
import { ReactComponent as LogOut } from './images/sign-out.svg';
import { myAccBg } from './images/myacc-bg.webp';

const Main = styled.div`
width: 100%;
background-color: #F3F7F2;
position: relative;
padding: 20px 18px 40px 18px;
box-sizing: border-box;
`;

const UserName = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #303236;
margin: 0px;
`;

const UserMail = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #303236;
opacity: 0.5;
margin: 5px 0px; 
`;

const EditButton = styled.button`
border: none;
`;

const Controls = styled.div`
width: 95%;
position: absolute;
display: flex;
justify-content: space-between;
`;

const ControlButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6.5px 15px;
gap: 10px;
background: #FFFFFF;
border-radius: 4px;
border: none;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #303236;
box-shadow: 0px 2px 0px #f6f6f6;
`;

const MobileAccountHead = (props) => {
    return (
        <Main>
            <UserName>{props.fullName}</UserName>
            <UserMail>{props.email}</UserMail>
            <Controls>
                <ControlButton><PassIcon /> Change password</ControlButton>
                <ControlButton><LogOut />Sign out</ControlButton>
            </Controls>
        </Main>
    )
}

export default MobileAccountHead
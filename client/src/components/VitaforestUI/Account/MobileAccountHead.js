import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PassIcon } from './images/pass.svg';
import { ReactComponent as LogOut } from './images/sign-out.svg';

const Main = styled.div`
width: 100%;
background-color: #F3F7F2;
position: relative;
`;

const UserName = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #303236;
`;

const UserMail = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #303236;
opacity: 0.5;
`;

const EditButton = styled.button`
border: none;
`;

const Controls = styled.div`
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
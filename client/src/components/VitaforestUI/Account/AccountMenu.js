import React from "react";
import styled from "styled-components";

const MenuContainer = styled.ul`
display: block;
border-radius: 6px;
border: 1px solid #EAEBEC;
width: 264px;
padding: 0px;
border-bottom: none;
`
const MenuElement = styled.li`
display: flex;
align-items: center;
border-bottom: 1px solid #EAEBEC;
height: 47px;
background: white;
`
const MenuElementInner = styled.a`
text-decoration: none;
color: #303236;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
padding: 5.5px 20px;
`

const AccountMenu = () => {
    return (
        <MenuContainer>
            <MenuElement>
                <MenuElementInner>
                    TEST
                </MenuElementInner>
            </MenuElement>
            <MenuElement>
                <MenuElementInner>
                    TEST
                </MenuElementInner>
            </MenuElement>
            <MenuElement>
                <MenuElementInner>
                    TEST
                </MenuElementInner>
            </MenuElement>
            <MenuElement>
                <MenuElementInner>
                    TEST
                </MenuElementInner>
            </MenuElement>
            <MenuElement>
                <MenuElementInner>
                    TEST
                </MenuElementInner>
            </MenuElement>
        </MenuContainer>
    )
}

export default AccountMenu

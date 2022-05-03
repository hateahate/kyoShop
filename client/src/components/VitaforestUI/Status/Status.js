import React from "react";
import styled from "styled-components";

const UnderDevelopment = styled.p`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 6px;
width: auto;
height: 19px;
background: #18A0FB;
border-radius: 0px 0px 4px 0px;
color: white;
`;

const Avaliable = styled(UnderDevelopment)`
background: #40BF6A; 
`;

const UponRequest = styled(UnderDevelopment)`
background: #EF5E53;
`;

const Status = ({ variant }) => {
    switch (variant) {
        case 'under-development':
            return <UnderDevelopment>Under development</UnderDevelopment>
        case 'avaliable':
            return <Avaliable>Avaliable</Avaliable>
        case 'upon-request':
            return <UponRequest>Upon request</UponRequest>
        default:
            return <UnderDevelopment>Unset</UnderDevelopment>
    }
}

export default Status;
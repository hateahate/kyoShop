import React from "react";
import styled from "styled-components";

const OriginButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 144px;
height: 40px;
padding: 12px 24px;
background: #40BF6A;
border-radius: 4px;
border: none;
color: white;
font-weight: 700;
font-size: 13px;
line-height: 16px;
&:hover{
    background: #61D186;
}
&:active{
    background: #2E9E53;
}
`;

const OriginSmall = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 144px;
height: 30px;
padding: 12px 24px;
background: #40BF6A;
border-radius: 4px;
border: none;
color: white;
font-weight: 700;
font-size: 13px;
line-height: 16px;
&:hover{
    background: #61D186;
}
&:active{
    background: #2E9E53;
}
`;

const LinedButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 144px;
height: 40px;
border: 1px solid #40BF6A;
padding: 12px 24px;
box-sizing: border-box;
border-radius: 4px;
background-color: white;
color: #40BF6A;
font-weight: 700;
font-size: 13px;
line-height: 16px;
&:hover{
    border: 1px solid #61D186;
    background: #61D186;
    color: white; 
}
&:active{
    background: #2E9E53;
    color: white;  
}
`;

const LinedSmall = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 144px;
height: 30px;
border: 1px solid #40BF6A;
padding: 12px 24px;
box-sizing: border-box;
border-radius: 4px;
background-color: white;
color: #40BF6A;
font-weight: 700;
font-size: 13px;
line-height: 16px;
&:hover{
    border: 1px solid #61D186;
    background: #61D186;
    color: white; 
}
&:active{
    background: #2E9E53;
    color: white;  
}
`;

const DarkButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 144px;
height: 40px;
padding: 12px 24px;
background: #3C3F54;
border-radius: 4px;
border: none;
color: white;
font-weight: 700;
font-size: 13px;
line-height: 16px;
&:hover{
    background: #525673;
}
&:active{
    background: #242638; 
}
`;

const DarkSmall = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 144px;
height: 30px;
padding: 12px 24px;
background: #3C3F54;
border-radius: 4px;
border: none;
color: white;
font-weight: 700;
font-size: 13px;
line-height: 16px;
&:hover{
    background: #525673;
}
&:active{
    background: #242638; 
}
`;

const Rounded = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 17px;
width: auto;
height: 23px;
background: #FFFFFF;
border: 1px solid #40BF6A;
box-sizing: border-box;
border-radius: 12px;
font-weight: 600;
font-size: 12px;
line-height: 19px;
color: #40BF6A;
&:hover{
    background: #61D186;
    border: 1px solid #61D186;
    text-decoration: underline;
    color: white;
}
&:active{
    background: #2E9E53;
    border: 1px solid #2E9E53;
    text-decoration: underline;
    color: white; 
}
`

const Button = ({ title, variant }) => {
    switch (variant) {
        case 'lined':
            return <LinedButton>{title}</LinedButton>
        case 'dark':
            return <DarkButton>{title}</DarkButton>
        case 'small':
            return <OriginSmall>{title}</OriginSmall>
        case 'lined-small':
            return <LinedSmall>{title}</LinedSmall>
        case 'dark-small':
            return <DarkSmall>{title}</DarkSmall>
        case 'rounded':
            return <Rounded>{title}</Rounded>
        default:
            return <OriginButton>{title}</OriginButton>
    }

}

export default Button;
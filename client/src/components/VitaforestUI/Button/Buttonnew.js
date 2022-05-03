import React from "react";
import styled from "styled-components";

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: ${(props) => (props.width ? props.width : "144px")};
height:  ${(props) => (props.height ? props.height : "40px")};
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
`


const Buttonnew = ({ props }) => {
    return (
        <Button></Button>
    )
}

export default Buttonnew;
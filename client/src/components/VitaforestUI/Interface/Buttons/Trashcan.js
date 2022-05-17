import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Image } from './svg/trashcan.svg';

const Component = styled.button`
border: none;
background: none;
cursor: pointer;
&:hover path{
fill: #3C3F54;
}
`;


const Trashcan = (props) => {
    return <Component className={props.className}><Image /></Component>
}

export default Trashcan;
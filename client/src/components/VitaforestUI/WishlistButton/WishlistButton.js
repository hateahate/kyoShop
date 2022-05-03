import React from "react";
import styled from "styled-components";
import { ReactComponent as Image } from './ButtonVisual.svg';

const ButtonUnliked = styled.button`
border: none;
background: none;
`
const ButtonLiked = styled(ButtonUnliked)`
path{
fill: rgb(255, 83, 83);
}
`;

const WishlistButton = (props) => {
    switch (props.variant) {
        case 'liked':
            return <ButtonLiked><Image /></ButtonLiked>
        case 'unliked':
            return <ButtonUnliked><Image /></ButtonUnliked>
        default:
            return <ButtonUnliked><Image /></ButtonUnliked>
    }
}

export default WishlistButton
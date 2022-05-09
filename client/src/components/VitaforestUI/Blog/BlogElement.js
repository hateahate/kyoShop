import React from "react";
import styled from "styled-components";

const Main = styled.div`
display: flex;
flex-direction: column;
width: ${props => props.width ? props.width : '100%'};
height: ${props => props.height ? props.height : 'auto'};
margin-bottom: 20px;
@media screen and (min-width: 1128px){
width: ${props => props.width ? props.width : '360px'};
}
`;

const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const RowTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5px;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
`;

const CategoryLink = styled.a`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #40BF6A;
text-decoration: none;
&:hover{
    text-decoration: underline;
}
&:before{
    content: '>';
    margin-right: 10px;
}
`;

const Date = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #7F878B;
margin: 0px;
`;

const Image = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
`;

const Title = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #303236;
margin: 10px 0px 5px 0px;
`;

const Description = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: justify;
color: #303236;
opacity: 0.8;
margin: 5px 0px 10px 0px;
`;

const ReadMore = styled.a`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 14px;
color: #40BF6A;
text-decoration: none;
cursor: pointer;
&:hover{
    text-decoration: underline;
}
`;

const CommentCount = styled.p`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: justify;
color: #303236;
opacity: 0.8;
`;


const BlogElement = (props) => {
    return (
        <Main width={props.width}>
            <RowTop>
                <CategoryLink href={props.categorylink}>{props.category}</CategoryLink>
                <Date>{props.date}</Date>
            </RowTop>
            <Image src={props.img} />
            <Column>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Column>
            <Row>
                <ReadMore href={props.link}>Read more</ReadMore>
            </Row>
        </Main>
    )
}

export default BlogElement;
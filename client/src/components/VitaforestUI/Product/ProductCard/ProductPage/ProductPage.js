import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const PageContainer = styled.div`
display: flex;
`;

const Product = styled.div`

`;

const Gallery = styled.div`

`;

const Summary = styled.div`

`;

const MobileHead = styled.div`

`;

const MobileHeadInfo = styled.div`

`;

const MobileHeadTitle = styled.h4`
font-family: 'Proxima Nova';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
margin: 0px;
min-height: 50px;
padding-top: 15px;
color: #303236;
margin-bottom: 10px;
width: 87%;
`;

const MobileHeadSKU = styled.p`
font-family: 'Proxima Nova';
font-size: 13px;
line-height: 16px;
margin-top: 0;
margin-bottom: 10px;
color: #7f878b;
`;

const MobileHeadSocial = styled.div`

`;

const Ask = styled.div`
width: 264px;
height: 90px;
display: flex;
border: 1px solid #eaebec;
box-sizing: border-box;
border-radius: 6px;
align-items: center;
justify-content: center;
`;

const AskLink = styled.a`
width: 214;
height: 40;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 10px;
border: 1px solid #40bf6a;
box-sizing: border-box;
border-radius: 4px;
font-weight: bold;
font-size: 13px;
line-height: 16px;
color: #40bf6a;
&:hover{
color: white;
background-color: #61d186;    
}
&:active{
color: white;
background-color: #2e9e53;
}
`;

const FirstBlock = styled.div`

`;

const ProductPage = (props) => {
    if (isMobile) {
        return (
            <PageContainer>
                <Product>
                    <FirstBlock>
                        <MobileHead>
                            <MobileHeadInfo>
                                <MobileHeadTitle>
                                    {props.title}
                                </MobileHeadTitle>
                                <MobileHeadSKU>
                                    {props.sku}
                                </MobileHeadSKU>
                            </MobileHeadInfo>
                            <MobileHeadSocial>
                            </MobileHeadSocial>
                        </MobileHead>
                    </FirstBlock>
                </Product>
                <Ask>
                    <AskLink href='/about-us' />
                </Ask>
            </PageContainer>
        )
    }
    else {
        return (
            <h1>Дядь, ты ебанутый? Зайди с мобилы!</h1>
        )
    }
}

export default ProductPage

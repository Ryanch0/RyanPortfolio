import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    border : 1px solid white;
    padding: 32px;
    /* display: flex;
    flex-direction: column; */

    @media screen and (min-width: 778px) {
        padding: 48px;
    /* flex-direction: row; */
    }
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 16px;
`
const Period = styled.div`
    font-size: 18px;
    font-weight: 100;
    color : rgba(256,256,256,0.8);
`
const HeaderWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction : column;
    align-items: center;
    `

const FlexWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width : 778px) {
        flex-direction: row;
    }
`

const ImageWrap = styled.div`
    width: 100%; //test
    height: 100vh; //test
    background-color: gray;

    @media screen and (min-width: 778px) {
        width: 50%;
    }
`

const ImageSection = styled.div`

`

const ContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
@media screen and (min-width: 778px) {
    width: 50%;
}

`
const Content = styled.div`
    width: 100%; //test
    height: 600px; //test
    background-color: pink;
`



const DetailsWrap = styled.div`
    display : flex;
    /* width: 400px; //test */
    height: 300px; //test
    flex-direction: column;
    background-color: yellow;

    @media screen and (min-width : 778px) { 
       flex-direction: row;
    }
`

const Details = styled.div`
    width: 100px; //test
    height: 100px; //test
    background-color: Green;
`
const Standard = styled.div`
    width: 100px; //test
    height: 100px; //test
    background-color: blue;

`
export default props => {
    return (
        <Container>
            <HeaderWrap>
                <Title>{props.title}</Title>
                <Period>{props.period}</Period>
            </HeaderWrap>

            <FlexWrap>
                <ImageWrap>
                    <ImageSection>
                        이미지가 들어 갈 자리
                    </ImageSection>
                </ImageWrap>

                <ContentWrap>
                    <Content>
                        본문들어갈 자리
                    </Content>

                    <DetailsWrap>
                        <Standard>
                            주요기능
                        </Standard>
                        <Details>
                            주요기능 어쩌구 저쩌구 저쩌구
                        </Details>
                    </DetailsWrap>

                    <DetailsWrap>
                        <Standard>
                            주요기능
                        </Standard>
                        <Details>
                            주요기능 어쩌구 저쩌구 저쩌구
                        </Details>
                    </DetailsWrap>

                    <DetailsWrap>
                        <Standard>
                            주요기능
                        </Standard>
                        <Details>
                            주요기능 어쩌구 저쩌구 저쩌구
                        </Details>
                    </DetailsWrap>

                </ContentWrap>

            </FlexWrap>
        </Container>
    )
}
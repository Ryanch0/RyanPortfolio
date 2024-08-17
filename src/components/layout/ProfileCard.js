import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    width : 100%;
    max-width: 800px;
    height: 300px;
    background-color: white;
    padding: 24px;
`

const ImageBox = styled.div`
    background-color: blue;
    width: 120px;
    height: 120px;
    border-radius: 50%;

    @media screen and (min-width: 668px) {
        width: 180px;
        height: 180px;
    }
`

const FirstDetail = styled.div`
    display: flex;
    flex-direction: column;
    color : black;
    order : 1

`

const SecondDetail = styled.div`
    display: flex;
    flex-direction: column;
    color : black;
    order : 2
`

const Myinfo = styled.div`
        >span { 
           font-size : 28px;
        }
`

const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export default props => {
    return (
        <Container>
            <ImageBox>
                <img />
            </ImageBox>
        <DetailWrap>
            <FirstDetail>
                <Myinfo><span>👤</span>조성우</Myinfo>
                <Myinfo><span>🎂</span>1997.03.31</Myinfo>
                <Myinfo><span>📧</span>tjddnfkdls0@naver.com</Myinfo>
            </FirstDetail>

            <SecondDetail>
                <Myinfo><span>🎓</span>수원대학교 (전자재료공학과)</Myinfo>
                <Myinfo><span>📞</span>010-8209-9297</Myinfo>
                <Myinfo><img src='./github-icon.png'/>https://github.com/Ryanch0</Myinfo>
            </SecondDetail>
        </DetailWrap>
        </Container>
    )
}
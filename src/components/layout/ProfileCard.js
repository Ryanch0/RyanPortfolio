import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../consts/color'


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width : 100%;
    max-width: 800px;
    height: auto;
    background-color: black;
    border : 1px solid white;
    border-radius: 8px;
    box-shadow: 5px 5px 5px gray;
    padding: 24px;
    margin-top: 12px;
`

const ImageBox = styled.div`

    background-color: blue;
    background-image: url('./sungwoo.png');
    background-size: cover;
    background-position: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    @media screen and (max-width : 470px ) {
        display: none;
    }
    @media screen and (min-width: 668px) {
        width: 180px;
        height: 180px;
    }
`

const FirstDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color : white;
    order : 1;

    @media screen and (min-width: 668px) {
        margin-right: 12px;
    }

`

const SecondDetail = styled.div`
    display: flex;
    flex-direction: column;
    color : white;
    order : 2;
`

const Myinfo = styled.div`
    display: flex;
    align-items: center;
    padding : 4px;
        >span { 
           font-size : 28px;
           margin-right: 12px;
        }
        >img {
            margin-right: 8px;
        }
        >a {
            color: white;
        }
        >a:hover{
            color : ${PRIMARY_COLOR};
        }
`

const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-left : 24px;
    
    @media screen and (min-width:668px) {
        flex-direction: row;
    }
`

export default props => {
    return (
        <Container>
            <ImageBox/>
            <DetailWrap>
                <FirstDetail>
                    <Myinfo><span>👤</span> 조성우</Myinfo>
                    <Myinfo><span>🎂</span> 1997.03.31</Myinfo>
                    <Myinfo><span>✉️</span> tjddnfkdls0@naver.com</Myinfo>
                </FirstDetail>

                <SecondDetail>
                    <Myinfo><span>🎓</span> 수원대학교 (전자재료공학과)</Myinfo>
                    <Myinfo><span>📞</span> 010-8209-9297</Myinfo>
                    <Myinfo><img src='./github.png' />
                    <a
                     href='https://github.com/Ryanch0'
                     target='_blank'
                    >https://github.com/Ryanch0</a></Myinfo>
                </SecondDetail>
            </DetailWrap>
        </Container>
    )
}
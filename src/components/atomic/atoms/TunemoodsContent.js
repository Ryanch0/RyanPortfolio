import React from 'react'
import styled, { keyframes } from 'styled-components'



const Container = styled.div`
line-height: 26px;
word-break: keep-all;
`

const MainHightLight = styled.span`
    color : #A2FACF;
    font-weight: 700;
`

const HighLight = styled.span`
    color : #FF69B4;

`
const FontWrap = styled.div`
    font-size: 14px;

    @media screen and (min-width : 778px) {
        font-size: 15px;
    }
`

export default props => {

    return (
        <Container>
            <MainHightLight>TuneMoods는 챗봇기반으로 사용자의 감정을 분석해 그에 어울리는 노래를 추천해주는 서비스 입니다.</MainHightLight>
            <FontWrap>
            <p>   
                ai를 활용한 <HighLight>풀스택 프로젝트</HighLight>를 기획해보고 싶었고, Youtube Music에서 아이디어를 얻었습니다.
            </p>
                <p>스프링부트를 이용한 JWT방식의 사용자 인증을 처음 구현해보고, 외부 API에 익숙해지는 계기가 되었습니다.
                    처음으로 ai를 사용하게 된 프로젝트였으며, 이미 존재하는 ai모델을 웹 서비스에 접목 시키는것은 <HighLight>생각보다 어려운 일이 아니라는 것</HighLight>을
                    느끼게 되었습니다.
                </p>
            </FontWrap>
        </Container>
    )
}
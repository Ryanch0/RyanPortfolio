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
            <p>
                <MainHightLight>Liberté et Amour는 '자유와 사랑' 이라는 의미를 가진 프랑스 모델 컨셉 쇼핑몰 입니다. </MainHightLight>
            </p>
            <FontWrap>
                <p>
                    웹 개발을 독학으로 접하고 난 뒤 5개월만에 진행했던 <HighLight>풀스택 프로젝트</HighLight> 입니다. 모든 기획을 처음으로 해보고 
                    많은 시행착오를 접하며 미숙하게 끝이 난 프로젝트지만 저에게 웹개발에 있어서 첫 단추를 끼워준 소중한 프로젝트 입니다.
                </p>
                    <p>
                    협업에서 요구하는 효율성과는 거리가 멀게 코드를 작성 했었고, 이 시기에는 기능의 작동 여부에만 매달려서 진행했었습니다.
                    많이 성장한 현재와 비교해보면 제 자신이 얼마나 <HighLight>우물안 개구리</HighLight>였는지 알 수 있게 되었습니다.
                </p>
                    <p>
                    NodeJs와 Express로 서버를 구축하는 방법에 대해 익히고,
                    Session기반 회원 인증에 대해 이해하게 되었습니다.
                    JSON데이터를 비동기적으로 통신하는것에 대해 이해하게 되었습니다.
                </p>
            </FontWrap>

        </Container>
    )
}
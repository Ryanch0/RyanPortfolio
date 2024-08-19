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
            <MainHightLight>StockVibe는 국내 주식정보를 기반으로 뉴스 요약 및 ai를 이용한 긍정/부정 평가를 지원하는 웹 서비스입니다.</MainHightLight>
            <FontWrap>
            <p><HighLight>첫 협업 프로젝트</HighLight>였기 때문에 팀원들과 디자인 단계부터 시작해 최종 아키텍쳐 설계까지 협업에 있어서 <HighLight>의사소통의 중요성</HighLight>을 많이 느끼게 된 계기가 되었습니다.</p>
            <p>
               파이썬을 이용한 웹 크롤링과 프론트엔드와 백엔드 사이의 <HighLight>RESTful API</HighLight> 설계에 많은 도움이 된 미니 프로젝트 입니다.
               또한 PyTorch를 이용한 ai 모델을 접하게 된 좋은 기회였습니다.
                </p>
                </FontWrap>
        </Container>
    )
}
import React from 'react'
import styled, { keyframes } from 'styled-components'
export default props => {

    const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

    const Container = styled.div`
    line-height: 26px;
    word-break: keep-all;

        span {
            font-size: 18px;
            background: linear-gradient(to right, #75F9D8, #FF6B6B, #4EC5B0, #F94144);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            background-size: 200% 200%;  /* 애니메이션이 부드럽게 보이도록 배경 크기를 설정 */
            animation: ${gradientAnimation} 5s ease infinite;
        }
`

    return (
        <Container>
            <p>LingoBell은 실시간 다국어 번역과 다양한 ai서비스를 통한 영상통화기반 언어교환 플랫폼입니다.
                <span>Google Gemini API Developer Competition</span>에 참가했습니다.</p>
            <div style={{ height: '15px' }} />
            <p>프론트엔드 뿐만 아니라 백엔드에도 적극 참여했고, 다른 팀원들과 협업하는 과정에 관해 많은 것을 배울 수 있었습니다.
            </p>
            <div style={{ height: '15px' }} />
            <p>
                React 컴포넌트의 모듈화와 css의 재사용성 향상에 많은 도움이 되었고 회원 전역관리 및 
                사용자 인증 미들웨어 개념과 구현에 많이 도움이 된 프로젝트입니다.
                </p>
            <div style={{ height: '15px' }} />

            <p>Firebase를 이용해 '인증', '알림메시지', '실시간 접속상태 유무' 등의 기능을 처음 접하더라도 이해하고 구현할 수 있는 좋은 기회였습니다.
            </p>

        </Container>
    )
}
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ProfileCard from './ProfileCard'
import { PRIMARY_COLOR } from '../../consts/color'


const Intro = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 22px;
    line-height: 36px;

    @media screen and (min-width: 668px) {
        font-size: 24px;
    }
      
`

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;


const Detail = styled.div`
    text-align: center;
    font-weight: 400;
    padding : 24px 24px;
    font-size: 15px;
    line-height: 30px;
    @media screen and (min-width: 668px) {
        font-size: 16px;
    }
        >p {
            word-break: keep-all;
        }
        >span {
            font-size: 20px;
            background: linear-gradient(to right, #75F9D8, #FF6B6B, #4EC5B0, #F94144);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            background-size: 200% 200%;  /* 애니메이션이 부드럽게 보이도록 배경 크기를 설정 */
            animation: ${gradientAnimation} 5s ease infinite;
        }


`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition : opacity 1s ease-in-out;
    ${props => props.$visible && `
        opacity : 1;
    `}
`


const AboutMe = styled.div`
    font-family: emoji;
    font-size: 40px;
    color : transparent;
    padding-bottom: 10px;
    margin-bottom: 36px;
    padding-top : 48px;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 1s ease-in-out, color 0.4s ease-in-out;
    

    ${props => props.$border && `
        border-bottom-color : ${PRIMARY_COLOR};
        color : ${PRIMARY_COLOR};
    `}


    @media screen and (min-width : 668px) {
    }
`

const StyledProfileCard = styled(ProfileCard)`
    width: 100%;
`
export default props => {
    const [visible, setVisible] = useState(false)
    const [borderVisible, setBorderVisible] = useState(false);

    const handleVisible = () => {
        let scrollOpacity;

        if (window.innerWidth <= 378) {
            scrollOpacity = 1000;
        } else if (window.innerWidth <= 778) {
            scrollOpacity = 700
        } else {
            scrollOpacity = 660
        }

        if (window.scrollY >= 0 && window.scrollY < scrollOpacity) {
            setVisible(true);
        } else if (window.scrollY >= scrollOpacity) {
            setVisible(false)
            console.log('hidden')
        }
    }


    const handleBorderVisible = () => {
        if (window.scrollY === 0) {
            setBorderVisible(true)
        }
        else {
            setBorderVisible(false)
        }
    }

    useEffect(() => {
        setBorderVisible(true)
        window.addEventListener('scroll', handleBorderVisible)
    }, [])

    useEffect(() => {
        setVisible(true)
        window.addEventListener('scroll', handleVisible)
    }, [])




    return (
        <>
            <AboutMe $border={borderVisible}>About me</AboutMe>
            <Wrap $visible={visible}>
                <Intro>
                    <p>안녕하세요</p>
                    <p>주니어 Front-end 엔지니어 조성우 입니다</p>
                </Intro>
                <Detail>
                    <p>저는 웹 개발을 독학으로 시작했고, 스스로의 힘으로 웹 서비스를 만들고 싶었습니다.</p>
                    <span>" 모르거나 어렵다고 외면하지 말자, 아는 만큼 성장한다 "</span>
                    <p>항상 곱씹는 문장입니다. 그래서 매번 개발에 있어서 벽에 부딛힐때마다 이해하려고 파고들어 이겨낼 수 있었습니다.</p>
                    <p>더 나은 서비스를 만들기 위해
                        자연스럽게 Back-end, Database에도 관심을 가지고 개발에 대한 능력을 키워가고 있습니다.</p>
                    <p>저는 어떤 새로운 기술을 적용하더라도 제 것으로 적용할 수 있는 자신이 있습니다.</p>
                    <p>사용자에게 최고의 UX를 제공할 수 있는 Front-end 엔지니어가 되고 싶습니다.</p>
                </Detail>
                <StyledProfileCard />
            </Wrap>
        </>
    )
}
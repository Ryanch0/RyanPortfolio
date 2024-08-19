import React, { useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { PRIMARY_COLOR } from '../../consts/color'
import { ScrollContext } from '../../contexts/ScrollContext'


const Container = styled.div`
    width: 100%;
    @media screen and (min-width: 668px) {
        /* padding-left : 12px; */
    }
`

const Title = styled.div`
    font-family: emoji;
    font-size: 40px;
    margin-bottom: 24px;
    padding-bottom: 10px;
    color : transparent;
    border-bottom: 1px solid transparent;
    transition : border-bottom-color 1s ease-in-out, color 0.4s ease-in-out;

    ${props => props.$border && `
        border-bottom-color : ${PRIMARY_COLOR};
        color : ${PRIMARY_COLOR};
    `}

    @media screen and (min-width : 668px) {
    }
`

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;


const Description = styled.div`
    max-width: 800px;
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    padding : 0 0 24px 0;
    word-break: keep-all;
    @media screen and (min-width : 668px ){
        font-size: 16px;
    }

    span{
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
const Wrap = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom : 40px;
    border: 1px solid white;
    border-radius: 12px;
    /* margin-left : 40px; */
    padding-top: 14px;
    transition: transform 0.3s ease;
    @media screen and (min-width : 778px) {
        width : 44%;
        margin-left: 36px;
        margin-bottom: 36px;
}
`

const LangTitle = styled.div`
    font-family: emoji;
    font-size: 34px;
    color : ${PRIMARY_COLOR};
    padding-bottom: 24px;

`
const Detail = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    padding-bottom: 10px;
    @media screen and (min-width : 668px) {
    }
`

const LangWrap = styled.div`
    display: flex;
    /* padding : 12px; */
    width: 100%;
    flex-wrap: wrap;
    @media screen and (min-width : 668px) {
        padding : 36px;
    }
`

const VisibleWrap = styled.div`
    opacity: 0;
    transition: opacity 1s ease-in-out;

    ${props => props.$visible && `
        opacity : 1;
    `}
`
export default props => {
    const [visible, setVisible] = useState(false)
    const [borderVisible, setBorderVisible] = useState(false);
    const { section1Ref } = useContext(ScrollContext);

    const handleVisible = () => {
        let scrollOpacity;

        if(window.innerWidth <=378) {
            scrollOpacity = 1000
        } else if (window.innerWidth <= 778) {
            scrollOpacity = 700
        } else {
            scrollOpacity = 660
        }

        if(window.scrollY >= scrollOpacity) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const handleVisibleHidden = () => {
        let scrollHidden;

        if(window.innerWidth <= 378) {
            scrollHidden = 2513 
        } else if (window.innerWidth <= 778) {
            scrollHidden = 2153
        } else {
            scrollHidden = 1711
        }

        if(window.scrollY >= scrollHidden) {
            setVisible(false)
        }
    }


    const handleBorderVisible = () => {
        let scrollThreshold;

        if(window.innerWidth <= 378) {
            scrollThreshold = 1000
        } else if (window.innerWidth <= 778){
            scrollThreshold = 700
        } else {
            scrollThreshold = 660
        }

        if(window.scrollY >= scrollThreshold) {
            setBorderVisible(true)
        } 
        else {
            setBorderVisible(false)
        }
 
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleBorderVisible);
    },[])

    useEffect(()=>{
        window.addEventListener('scroll', handleVisible)
    },[])

    useEffect(()=>{
        window.addEventListener('scroll', handleVisibleHidden)
    },[])


    const handleMouseHover = (e) => {
        e.currentTarget.style.transform = 'translateY(-15px)';
    }

    const hanldeMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
    }

    return (
        <Container ref={section1Ref}>
            <div style={{height : '100px'}}/>
            <Title $border={borderVisible}>Skills</Title>
            <VisibleWrap $visible={visible}>
            <div style={{display : 'flex', alignItems:'center', justifyContent:'center'}}>
            <Description>
                <p>제가 생각하기에 프론트엔드 엔지니어란 디자이너, 백엔드 엔지니어,</p>
                    <p>그리고 사용자와 <span>소통해야 하는 중요한 위치</span>에 있다고 생각합니다.</p>
                <p>따라서 백엔드 영역의 기술 스택도 소홀히 하지 않고 있습니다.
                </p>
            </Description>
            </div>
            <LangWrap>
                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}
                >
                    <LangTitle>Language</LangTitle>
                    <Detail>JavaScript&nbsp;
                        <img src='./skillsIcon/js.png' /></Detail>
                    <Detail>Python&nbsp;
                        <img src='./skillsIcon/python.png' /></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}

                >
                    <LangTitle>Front-end</LangTitle>
                    <Detail>React&nbsp;
                        <img src='./skillsIcon/react.png' /></Detail>
                    <Detail>Styled-Component&nbsp;
                        <span style={{ fontSize: '32px' }}>💅</span>
                    </Detail>
                    <Detail>HTML5
                        <img width='38px' src='./skillsIcon/html.png' /></Detail>
                    <Detail>CSS3&nbsp;
                        <img width='28px' src='./skillsIcon/css.png' /></Detail>
                    <Detail>jQuery&nbsp;
                        <img src='./skillsIcon/jquery.png' /></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}
                >
                    <LangTitle>Back-end</LangTitle>
                    <Detail>FastAPI&nbsp;
                        <img src='./skillsIcon/fastapi.png' /></Detail>
                    <Detail>NodeJs&nbsp;
                        <img src='./skillsIcon/node.png' /></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}
                >
                    <LangTitle>Database</LangTitle>
                    <Detail>MySQL&nbsp;
                        <img src='./skillsIcon/mysql.png' /></Detail>
                    <Detail>MongoDB
                        <img src='./skillsIcon/mongo.png' /></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}
                >
                    <LangTitle>DevOps</LangTitle>
                    <Detail>AWS&nbsp;
                        <img src='./skillsIcon/aws.png' /></Detail>
                    <Detail>Firebase&nbsp;
                        <img src='./skillsIcon/firebase.png' /></Detail>
                </Wrap>
            </LangWrap>
            </VisibleWrap>
        </Container>

    )
}
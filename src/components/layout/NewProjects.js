import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../consts/color'
import { ScrollContext } from '../../contexts/ScrollContext'
import ProjectCard from '../atomic/molecules/ProjectCard'
import SampleData from '../atomic/atoms/SampleData'



const Container = styled.div`
    width: 100%;
`

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 36px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Title = styled.div`
    font-family: emoji;
    font-size: 40px;
    margin-bottom: 24px;
    color : transparent;
    padding-bottom: 10px;
    border-bottom : 1px solid transparent;
    transition: border-bottom-color 1s ease-in-out, color 0.4s ease-in-out;

    ${props => props.$border && `
        border-bottom-color : ${PRIMARY_COLOR};
        color : ${PRIMARY_COLOR};
    `}

    @media screen and (min-width : 668px) {
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
    const [borderVisible, setBorderVisible] = useState(false);
    const { section2Ref } = useContext(ScrollContext);

    const handleBorderVisible = () => {
        let scrollThreshold;

        if (window.innerWidth <= 378) {
            scrollThreshold = 2513
        } else if (window.innerWidth <= 778) {
            scrollThreshold = 2153
        } else {
            scrollThreshold = 1711
        }

        if (window.scrollY >= scrollThreshold) {
            setBorderVisible(true)
        } else {
            setBorderVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleBorderVisible);
    }, [])

    const images = [
        './lingo.png',
        'https://via.placeholder.com/600x400?text=Image+2',
        'https://via.placeholder.com/600x400?text=Image+3',
    ];

    const lingobellData = {
        mainContent: '실시간 1:1 영상통화와 사용자의 관심사 및 언어별 stt번역 생성, ai퀴즈 및 주제추천이 가능한 언어교환 플랫폼',
        frontEnd: 'React, Styled-Components',
        backEnd: 'FastAPI, NodeJs',
        dataBase: 'MySQL',
        baas: 'Firebase (Authentication, Cloud Messaging, Realtime Database), Google Cloud Storage',
        url : 'https://www.youtube.com/watch?v=9Urj-Ce82VY'
    }

    return (
        <Container ref={section2Ref}>
            <div style={{ height: '100px' }} />
            <Title $border={borderVisible}>Projects</Title>
            <VisibleWrap $visible={borderVisible}>
                <Wrap>
                    <ProjectCard
                        title='LingoBell'
                        period='2024.07.15 – 2024.08.26 (조성우 외 3인 팀 프로젝트)'
                        images={images}
                        data={lingobellData}
                    >
                        <SampleData/>
                    </ProjectCard>
                </Wrap>
            </VisibleWrap>
        </Container>
    )
}
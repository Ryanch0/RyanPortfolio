import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../consts/color'


const Container = styled.div`
    width: 100%;
    @media screen and (min-width: 668px) {
        /* padding-left : 12px; */
    }
`

const Title = styled.div`
    font-size: 60px;
    margin-bottom: 24px;
    color : ${PRIMARY_COLOR};
`

const Description = styled.div`
    padding : 0 0 24px 0;
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
        width : 46%;
        margin-left: 36px;
        margin-bottom: 36px;
}
`

const LangTitle = styled.div`
    font-size: 42px;
    color : ${PRIMARY_COLOR};
    padding-bottom: 24px;

`
const Detail = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    padding-bottom: 16px;
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
export default props => {

    const handleMouseHover = (e) => {
        e.currentTarget.style.transform = 'translateY(-15px)';
    }

    const hanldeMouseLeave = (e) => {
        e.currentTarget.style.transform ='translateY(0)';
    }

    return (
        <Container>
            <Title>Skills</Title>
            <Description>멍멍이는 멍멍이고 저는 멍멍이 입니다
                멍멍이는 멍멍이고 저는 멍멍이 입니다멍멍이는 멍멍이고 저는 멍멍이 입니다
                멍멍이는 멍멍이고 저는 멍멍이 입니다멍멍이는 멍멍이고 저는 멍멍이 입니다
                멍멍이는 멍멍이고 저는 멍멍이 입니다
            </Description>
            <LangWrap>
                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}
                >
                    <LangTitle>Language</LangTitle>
                    <Detail>JavaScript&nbsp;
                    <img src='./js.png'/></Detail>
                    <Detail>Python&nbsp;
                    <img src='./python.png'/></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}
                
                >
                    <LangTitle>Front-end</LangTitle>
                    <Detail>React&nbsp;
                        <img src='./react.png'/></Detail>
                    <Detail>Styled-Component&nbsp;
                        <span style={{fontSize:'32px'}}>💅</span>
                    </Detail>
                    <Detail>HTML5&nbsp;
                    <img src='./html.png'/></Detail>
                    <Detail>CSS3&nbsp;
                    <img src='./css.png'/></Detail>
                    <Detail>jQuery&nbsp;
                    <img src='./jquery.png'/></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}                
                >
                    <LangTitle>Back-end</LangTitle>
                    <Detail>FastAPI&nbsp;
                    <img src='./fastapi.png'/></Detail>
                    <Detail>NodeJs&nbsp;
                    <img src='./node.png'/></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}                
                >
                    <LangTitle>Database</LangTitle>
                    <Detail>MySQL&nbsp;
                    <img src='./mysql.png'/></Detail>
                    <Detail>MongoDB
                    <img src='./mongo.png'/></Detail>
                </Wrap>

                <Wrap
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={hanldeMouseLeave}                
                >
                    <LangTitle>DevOps</LangTitle>
                    <Detail>AWS&nbsp;
                    <img src='./aws.png'/></Detail>
                    <Detail>Firebase&nbsp;
                    <img src='./firebase.png'/></Detail>
                </Wrap>
            </LangWrap>
        </Container>

    )
}
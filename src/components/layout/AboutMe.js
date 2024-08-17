import React from 'react'
import styled from 'styled-components'
import ProfileCard from './ProfileCard'
import { PRIMARY_COLOR } from '../../consts/color'


const Intro = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    @media screen and (min-width: 668px) {
        font-size: 28px;
    }
        >span {
            display : block;
            word-break: keep-all;

}
`

const Detail = styled.div`
    text-align: center;
    padding : 24px 24px;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    @media screen and (min-width: 668px) {
        font-size: 18px;
    }
        >span {
            display : block;
            word-break: keep-all;
        }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AboutMe = styled.div`
    font-size: 60px;
    color : ${PRIMARY_COLOR};
    padding-bottom: 50px;
    padding-top : 48px;

    @media screen and (min-width : 668px) {
        padding-left : 12px;
    }
`

const StyledProfileCard = styled(ProfileCard)`
    width: 100%;
`
export default props => {
    return (
        <>
        <AboutMe>About me</AboutMe>
        <Wrap>
            <Intro>
                <span>안녕하세요</span>
                주니어 Front-end 엔지니어 조성우 입니다
            </Intro>
            <Detail>
                <span>저는 웹 개발을 독학으로 시작했고, 스스로의 힘으로 웹 서비스를 만들고 싶었습니다.</span>
                <span>처음엔 Google의 한 페이지를 html과 css로 껍데기만 만들어내며 정말 뿌듯해하고
                    사람들에게 자랑하곤 했습니다.</span>
                <span>이 과정에서 웹 개발의 매력에 더욱 빠져들었고 자바스크립트를 가장 좋아하게 되었습니다.</span>
                <span>더 나은 서비스를 만들기 위해
                    자연스럽게 Back-end, Database공부도 즐겁게 하고 있습니다.</span>
                <span>저는 어떤 새로운 기술을 적용하더라도 제 것으로 적용할 수 있는 자신이 있습니다.</span>
                <span>사용자에게 최고의 UX를 제공할 수 있는 Front-end 엔지니어가 되고싶습니다.</span>
            </Detail>
            <StyledProfileCard/>
        </Wrap>
        </>
    )
}
import React from 'react'
import styled from 'styled-components'
import ProfileCard from './ProfileCard'


const Intro = styled.div`
    text-align: center;
    font-size: 28px;
    line-height: 36px;
        >span {
            display : block;

}
`

const Detail = styled.div`
    text-align: center;
    padding : 24px 24px;
    font-size: 18px;
    line-height: 30px;
        >span {
            display : block;
        }
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default props => {
    return (
        <Wrap>
            <Intro>
                <span>안녕하세요</span>
                주니어 Front-end 엔지니어 조성우 입니다
            </Intro>
            <Detail>
                <span>저는 웹 개발을 독학으로 시작했고, 스스로의 힘으로 웹 서비스를 만들고 싶었습니다.</span>
                <span>처음엔 Google의 한 페이지를 html과 css로 껍데기만 만들어내며 정말 뿌듯해하고
                    사람들에게 자랑했던 기억이 납니다.</span>
                <span>이 과정에서 웹 개발의 매력에 더욱 빠져들었고 자바스크립트를 가장 좋아하게 되었습니다.</span>
                <span>더 나은 서비스를 만들기 위해
                    자연스럽게 Back-end, Database공부도 즐겁게 하고 있습니다.</span>
                <span>저는 어떤 새로운 기술을 적용하더라도 제 것으로 적용할 수 있는 자신이 있습니다.</span>
                <span>사용자에게 최고의 UX를 제공할 수 있는 Front-end 엔지니어가 되고싶습니다.</span>
            </Detail>
            <ProfileCard/>
        </Wrap>
    )
}
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
`

const ImageBox = styled.img`
    width: 90%;

`
const Link = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 24px;

`
const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 254px;
    background-color: #D1CFF3;
    border-radius: 28px;
`
const Wrap = styled.div`
`

export default props => {

    return (
        <Wrap>
            <Container>
                <ImageWrap>
                <ImageBox src='./lingo.png' />
                </ImageWrap>
            </Container>
            <Link>
                LingoBell <span> &#8599;</span>
            </Link>
        </Wrap>
    )
}
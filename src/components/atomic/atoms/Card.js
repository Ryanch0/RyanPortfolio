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
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;

`
const Link = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 24px;
    font-family: emoji;

`
const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 254px;
    background-color: #D1CFF3;
    border-radius: 28px;
    overflow: hidden;

`
const Wrap = styled.div`
    width: 100%;
`

export default props => {

    return (
        <Wrap>
            <Container>
                <ImageWrap>
                <ImageBox src={props.src}/>
                </ImageWrap>
            </Container>
            <Link>
                {props.name} <span> &#8599;</span>
            </Link>
        </Wrap>
    )
}
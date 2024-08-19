import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'




const lineAnimation = keyframes`
    0%{height : 0%}
    50%{height : 50%;}
    100%{height : 100%;
        border-color: black;
    }
`

const openAnimation = keyframes`
    0%{width : 50%;}
    20%{width: 50%;}
    100%{width : 0%;}
`
const backgroundAnimation = keyframes`
    0%{background-color : black }
    100%{
        background-color: transparent;
        z-index: -10;
    }
`

const Container = styled.div`
    position: fixed;
    background-color: black;
    z-index : 10000;
    width: 100vw;
    height: 100vh;
    animation : ${backgroundAnimation} 0.5s ease 2s 1 forwards;
`

const LeftBox = styled.div`
    border-right : 0.1px solid white;
    background-color: black;
    width: 50%;
    height: 0;
    animation: ${lineAnimation} 2s ease-in-out 0s 1 forwards, ${openAnimation} 0.5s ease 2s 1 forwards;
`
const RightBox = styled.div`
    border-left : 0.1px solid white;
    background-color: black;
    width: 50%;
    height: 0;
    animation: ${lineAnimation} 2s ease-in-out 0s 1 forwards, ${openAnimation} 0.5s ease 2s 1 forwards;
`
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content : space-between;
    flex-direction: row;
`

export default props => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        setTimeout(()=>{
            document.body.style.overflow = 'auto'
        },2200)
    }, [])

    return (
        <Container>
            <Wrap>
                <LeftBox />
                <RightBox />
            </Wrap>
        </Container>
    )
}
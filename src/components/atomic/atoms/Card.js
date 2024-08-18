import React, { useState } from 'react'
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
    cursor: pointer;
    transform:scale(1.05);
    transition: transform 0.3s ease; 
    &:hover {
    transform: scale(1.2); 
}
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
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    

`
const Wrap = styled.div`
    width: 100%;
`

export default props => {
    const [modal, setModal] = useState(false);

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
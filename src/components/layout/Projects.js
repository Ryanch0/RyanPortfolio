import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../atomic/atoms/Card'
import { PRIMARY_COLOR } from '../../consts/color'
import { ScrollContext } from '../../contexts/ScrollContext'



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
        margin-left: 12px;
    }

`


const StyledCard = styled(Card)`
`

const CardBox = styled.div`
    width: 100%;
    @media screen and (min-width : 778px){
        width : 44%;
        margin-bottom: 12px;
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



    return (
        <Container ref={section2Ref}>
            <div style={{ height: '100px' }} />
            <Title $border={borderVisible}>Projects</Title>
            <VisibleWrap $visible={borderVisible}>
                <Wrap>
                    <CardBox>
                        <StyledCard
                            src='./lingo.png'
                            name='LingoBell' />
                    </CardBox>
                    <CardBox>
                        <StyledCard
                            src='./stockVibe.png'
                            name='StockVibe' />
                    </CardBox>
                    <CardBox>
                        <StyledCard
                            src='Liberte.png'
                            name='Liberté et Amour' />
                    </CardBox>
                    <CardBox>
                        <StyledCard
                            src='./tuneMoods.jpeg'
                            name='TuneMoods' />
                    </CardBox>
                </Wrap>
            </VisibleWrap>
        </Container>
    )
}
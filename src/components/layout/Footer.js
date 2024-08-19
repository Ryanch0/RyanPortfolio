import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../consts/color'

const Container = styled.div`
    display: flex;
    justify-content : end;
    padding: 200px 20px 0 0;
`

const Footer = styled.div`
    font-size: 1.6rem;
    font-family: emoji;
    color : ${PRIMARY_COLOR};
        >span{
            font-family: cursive;
            color : white;
        }
`
export default props => {
    return (
        <Container>
        <Footer>Designed & Developed By <span>SungWoo Cho</span></Footer>
        </Container>
    )
}
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    width : 100%;
    height : 80px;
    position : fixed;
    background-color : black;
    padding : 25px 20px 25px 20px;
`


export default props => {
    return (
        <Container>
            {props.children}
        </Container>

    )
}
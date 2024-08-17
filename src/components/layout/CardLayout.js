import React from 'react'
import styled from 'styled-components'
import Card from '../atomic/atoms/Card'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledCard = styled(Card)`
`

export default props => {
    return (
        <Container>
       <StyledCard/>
       <StyledCard/>
       <StyledCard/>
       <StyledCard/>
       </Container>
    )
}
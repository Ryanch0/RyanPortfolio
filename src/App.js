import styled from "styled-components";
import HamburgerMenu from "./components/layout/HamburgerMenu";
import Header from "./components/layout/Header";
import CardLayout from "./components/layout/CardLayout";
import AboutMe from "./components/layout/AboutMe";


const Wrap = styled.div`
  max-width: 1100px;
  padding : 40px 20px;
`
const MainContainer = styled.div`
  color : white;
  background-color: black;
`
const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  


  return (
    <MainContainer>
    <Header>
   <HamburgerMenu/>
    </Header>
    <div style={{paddingTop : '50px'}}/>
    <WrapContainer>
      <Wrap>
       <AboutMe/>
        <div style={{height : '32px'}}/>
      <CardLayout/>
      </Wrap>
      </WrapContainer>

    </MainContainer>
  );
}

export default App;

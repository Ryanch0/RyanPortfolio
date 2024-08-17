import styled from "styled-components";
import Header from "./components/layout/Header";
import CardLayout from "./components/layout/CardLayout";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import { useEffect } from "react";


const Wrap = styled.div`
  width: 100%;
  max-width: 1100px;
  padding : 40px;
`
const MainContainer = styled.div`
  color : white;
  background-color: black;
  overflow-x: hidden;
`
const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
`

function App() {

  useEffect(()=>{
    console.log(window.scrollY)
  },[])



  return (
    <MainContainer>
      <Header />
      <div style={{ paddingTop: '50px' }} />

      <WrapContainer>
        <Wrap>
          <AboutMe />
          <div style={{ height: '150px' }} />
          <Skills/>
          <CardLayout />
        </Wrap>
      </WrapContainer>

    </MainContainer>
  );
}

export default App;

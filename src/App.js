import styled from "styled-components";
import Header from "./components/layout/Header";
import AboutMe from "./components/layout/AboutMe";
import Skills from "./components/layout/Skills";
import { useEffect } from "react";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";
import { ScrollProvider } from "./contexts/ScrollContext";
import NewProjects from "./components/layout/NewProjects";


const Wrap = styled.div`
  width: 100%;
  max-width: 1100px;
  padding : 0px 20px 40px 20px;
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

  return (
    <ScrollProvider>
    <MainContainer>
      <Header />
      <div style={{ paddingTop: '50px' }} />
      <WrapContainer>
        <Wrap>
          <AboutMe />
          <div style={{ height: '50px' }} />
          <Skills />
          <NewProjects/>
          <Footer />
        </Wrap>
      </WrapContainer>
    </MainContainer>
    </ScrollProvider>
  );
}

export default App;

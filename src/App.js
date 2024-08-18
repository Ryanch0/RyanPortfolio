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

  const logScrollPosition = () => {
    console.log('Scroll Position:', window.scrollY);
};

useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', logScrollPosition);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
        window.removeEventListener('scroll', logScrollPosition);
    };
}, []); // 빈 배열로 지정하여 마운트 및 언마운트 시에만 실행


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
          {/* <Projects /> */}
          <NewProjects/>
          <Footer />
        </Wrap>
      </WrapContainer>
    </MainContainer>
    </ScrollProvider>
  );
}

export default App;

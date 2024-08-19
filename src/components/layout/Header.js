import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import HamburgerMenu from './HamburgerMenu'
import { ScrollContext } from '../../contexts/ScrollContext'


const ContainerWrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    width: 100vw;
`

const Container = styled.div`
    width : 100%;
    max-width: 1300px;
    height : 80px;
    position : fixed;
    top : 0;
    background-color : black;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    font-family: emoji;
    font-size: 28px;
    padding-left: 12px;
    color : white;
    cursor: pointer;

    @media screen and (min-width: 778px){ 
        padding-left: 0;
    }
`
const MenuWrap = styled.div`
    display: flex;
`
const Menu = styled.div`
    font-family: emoji;
    margin-right: 52px;
    cursor: pointer;
`



export default props => {
    const [response, setResponse] = useState(false)
    const { section1Ref, section2Ref } = useContext(ScrollContext);

    const scrollToAboutMe = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth', 
        })
    }

    const scroller = (ref) => {
      if(ref.current) {
        ref.current.scrollIntoView({behavior : 'smooth'});
      }
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 778) {
            setResponse(false);
          } else {
            setResponse(true);
          }
        };
        // 컴포넌트가 마운트될 때와 브라우저가 리사이즈될 때 실행
        handleResize(); // 처음 렌더링 시에도 상태를 설정
        window.addEventListener('resize', handleResize);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    

    return (
        <ContainerWrap>
        <Container>
            {!response && (
                <>
                <Logo onClick={()=>{
                    window.location.reload()
                }}>Sungwoo Cho</Logo>
                <MenuWrap>
                    <Menu
                        onClick={scrollToAboutMe}>
                            About me</Menu>
                    <Menu
                        onClick={()=>{
                            scroller(section1Ref)
                        }}
                    >Skills</Menu>
                    <Menu onClick={()=>{
                        scroller(section2Ref)
                    }}>Projects</Menu>
                </MenuWrap>
                </>
            )}
            {response && (
                <HamburgerMenu/>
            )}
        </Container>
        </ContainerWrap>

    )
}
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HamburgerMenu from './HamburgerMenu'


const ContainerWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width : 100%;
    max-width: 1100px;
    height : 80px;
    position : fixed;
    background-color : black;
    z-index: 1000;
    padding : 25px 20px 25px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    font-size: 28px;
    color : white;
`
const MenuWrap = styled.div`
    display: flex;
`
const Menu = styled.div`
    margin-right: 52px;
    cursor: pointer;
`



export default props => {
    const [response, setResponse] = useState(false)

    const scrollToAboutMe = () => {
        window.scrollTo({
            top : 58,
            behavior : 'smooth', 
        })
    }

    const scrollToSkills = () => {
        window.scrollTo({
            top: 840.5,
            behavior :'smooth'
        })
    }

    // const scrollToProjects =() => {
    //     window.scrollTo({
    //         top:,
    //         behavior :'smooth'
    //     })
    // }

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
                <Logo>Sungwoo Cho</Logo>
                <MenuWrap>
                    <Menu
                        onClick={scrollToAboutMe}>
                            About me</Menu>
                    <Menu
                        onClick={scrollToSkills}
                    >Skills</Menu>
                    <Menu>Projects</Menu>
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
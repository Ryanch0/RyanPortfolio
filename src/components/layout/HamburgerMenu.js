import React, { useState } from 'react'
import styled from 'styled-components'




const TabWrap = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`
const Tab = styled.button`
    background-color: black;
    color: white;
    width : 32px;
    height : 32px;
`
const IsOpenTab = styled.div`
    position : fixed;
    display : flex;
    align-items: center;
    flex-direction: column;
    background-color : black;
    color : white;
    width : 100%;
    height : 150px;
    ${props => props.$isopen ? `
        opacity : 1;
        transform : translateY(80px);
        z-index : -10;
    ` :
        `
        opacity : 0;
        transform : translateY(0);
        z-index : 1;
    `}
    top : 0;
    left : 0;
    z-index : -100;
    transition : all 0.6s ease;
`
const Logo = styled.div`
    font-size: 28px;
    color : white;
`
const Menu = styled.div`
    margin-top : 24px;
    cursor: pointer;
`


export default props => {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToAboutMe = () => {
        window.scrollTo({
            top : 56.5,
            behavior : 'smooth', 
        })
    }

    const scrollToSkills = () => {
        window.scrollTo({
            top: 945,
            behavior :'smooth'
        })
    }

    // const scrollToProjects =() => {
    //     window.scrollTo({
    //         top:,
    //         behavior :'smooth'
    //     })
    // }

    return (
        <>
            <TabWrap>
                <Logo>Sungwoo Cho</Logo>
                <IsOpenTab $isopen={isOpen}>
                    <Menu
                        onClick={()=>{
                            scrollToAboutMe()
                            setIsOpen(false)
                        }}
                    >About me</Menu>
                    <Menu
                        onClick={()=>{
                            scrollToSkills()
                            setIsOpen(false)
                        }}
                    >Skills</Menu>
                    <Menu>Projects</Menu>
                </IsOpenTab>

                <Tab onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <svg width="32" height="32" viewBox='0 0 24 24'>
                        <path
                        d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="currentColor" />
                    </svg>
                </Tab>
            </TabWrap>

        </>

    )
}
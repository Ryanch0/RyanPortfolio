// import React, { useContext, useRef, useState } from 'react'
// import styled from 'styled-components'
// import { ScrollContext } from '../../contexts/ScrollContext'

// const TabWrap = styled.div`
//     width : 100%;
//     height : 100%;
//     display : flex;
//     flex-direction : row;
//     justify-content : space-between;
//     align-items : center;
// `
// const Tab = styled.button`
//     background-color: black;
//     color: white;
//     width : 32px;
//     height : 32px;
//     cursor : pointer;

// `
// const IsOpenTab = styled.div`
//     position : fixed;
//     display : flex;
//     align-items: center;
//     flex-direction: column;
//     background-color : black;
//     color : white;
//     width : 100%;
//     height : 150px;
//     ${props => props.$isopen ? `
//         opacity : 1;
//         transform : translateY(80px);
//         z-index : -10;
//     ` :
//         `
//         opacity : 0;
//         transform : translateY(0);
//         z-index : 1;
//     `}
//     top : 0;
//     left : 0;
//     z-index : -100;
//     transition : all 0.6s ease;
// `
// const Logo = styled.div`
//     font-family: cursive;
//     font-size: 30px;
//     color : white;
//     cursor: pointer;
// `
// const Menu = styled.div`
//     font-family: emoji;
//     margin-top : 24px;
//     cursor: pointer;
// `


// export default props => {
//     const [isOpen, setIsOpen] = useState(false)
//     const { section1Ref, section2Ref } = useContext(ScrollContext);


//     const scrollToAboutMe = () => {
//         window.scrollTo({
//             top : 0,
//             behavior : 'smooth', 
//         })
//     }

//     const scroller = (ref) => {
//         if (ref.current) {
//             ref.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }


//     return (
//         <>
//             <TabWrap>
//                 <Logo onClick={()=>{
//                     window.location.reload()
//                 }}>Sungwoo Cho</Logo>
//                 <IsOpenTab $isopen={isOpen}>
//                     <Menu
//                         onClick={()=>{
//                             scrollToAboutMe()
//                             setIsOpen(false)
//                         }}
//                     >About me</Menu>
//                     <Menu
//                         onClick={()=>{
//                             scroller(section1Ref)
//                             setIsOpen(false)
//                         }}
//                     >Skills</Menu>
//                     <Menu
//                         onClick={()=>{
//                             scroller(section2Ref)
//                             setIsOpen(false)
//                         }}
//                     >Projects</Menu>
//                 </IsOpenTab>

//                 <Tab onClick={() => {
//                     setIsOpen(!isOpen)
//                 }}>
//                     <svg width="32" height="32" viewBox='0 0 24 24'>
//                         <path
//                         d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="currentColor" />
//                     </svg>
//                 </Tab>
//             </TabWrap>

//         </>

//     )
// }


import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ScrollContext } from '../../contexts/ScrollContext';

const TabWrap = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`;

const Tab = styled.button`
    background-color: black;
    color: white;
    width : 60px;
    height : 60px;
    cursor : pointer;
    border: none;
    padding: 0;

    /* 애니메이션을 위해 추가된 부분 */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 60px;
        height: 60px;
    }

    .line {
        fill: none;
        stroke: white;
        stroke-width: 5;
        transition: all 0.3s ease;
    }

    .line1 {
        transform-origin: 50% 50%;
        transition: transform 0.3s ease, d 0.3s ease;
    }

    .line2 {
        transition: opacity 0.3s ease;
    }

    .line3 {
        transform-origin: 50% 50%;
        transition: transform 0.3s ease, d 0.3s ease;
    }

    ${props => props.$isopen && `
        .line1 {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .line2 {
            opacity: 0;
        }
        .line3 {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `}
`;

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
        z-index : 10;
    ` :
        `
        opacity : 0;
        transform : translateY(0);
        z-index : -1;
    `}
    top : 0;
    left : 0;
    transition : all 0.6s ease;
`;

const Logo = styled.div`
    font-family: cursive;
    font-size: 30px;
    color : white;
    cursor: pointer;
`;

const Menu = styled.div`
    font-family: emoji;
    margin-top : 24px;
    cursor: pointer;
`;

export default props => {
    const [isOpen, setIsOpen] = useState(false);
    const { section1Ref, section2Ref } = useContext(ScrollContext);

    const scrollToAboutMe = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scroller = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <TabWrap>
                <Logo onClick={() => {
                    window.location.reload();
                }}>Sungwoo Cho</Logo>
                <IsOpenTab $isopen={isOpen}>
                    <Menu
                        onClick={() => {
                            scrollToAboutMe();
                            setIsOpen(false);
                        }}
                    >About me</Menu>
                    <Menu
                        onClick={() => {
                            scroller(section1Ref);
                            setIsOpen(false);
                        }}
                    >Skills</Menu>
                    <Menu
                        onClick={() => {
                            scroller(section2Ref);
                            setIsOpen(false);
                        }}
                    >Projects</Menu>
                </IsOpenTab>

                <Tab $isopen={isOpen} onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path className="line line1" d="M 30,40 H 70" />
                        <path className="line line2" d="M 30,50 H 70" />
                        <path className="line line3" d="M 30,60 H 70" />
                    </svg>
                </Tab>
            </TabWrap>
        </>
    );
};

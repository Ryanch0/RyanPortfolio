import React, { useState } from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../../consts/color'


const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    border : 1px solid white;
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 24px;

    @media screen and (min-width: 778px) {
        padding: 48px;
    }
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 16px;
`
const Period = styled.div`
    font-size: 15px;
    font-weight: 100;
    color : rgba(256,256,256,0.8);

    @media screen and (min-width: 778px) {
        font-size: 16px;
    }
`
const HeaderWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction : column;
    align-items: center;
    padding-bottom: 32px;

    @media screen and (min-width : 778px) {
        padding-bottom: 0;
    }
`

const FlexWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items : center;
    column-gap: 48px;

    @media screen and (min-width : 778px) {
        flex-direction: row;
        align-items: start;
    }
`
// 캐러셀 컨테이너
const CarouselWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    min-height: 400px;
    max-height: 600px;
    border : 1px solid white;
    border-radius :12px ;
    @media screen and (min-width : 778px) {
    min-height: 500px;
    margin-top: 38px;
  }
`

const CarouselContainer = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

// 슬라이드 래퍼
const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.translateValue}%);
`;

// 개별 슬라이드
const Slide = styled.img`
  width: 100%;
  flex-shrink: 0;
  object-fit: contain;
`;

// 버튼 스타일링
const ButtonArea = styled.div`
  position: absolute;
  top: 0;
  width: 33.33%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const LeftButtonArea = styled(ButtonArea)`
  left: 0;
  display : flex;
  align-items: center;
  justify-content: center;
    >p{
        font-size: 50px;
        font-weight: 600;
    }

    @media screen and (min-width: 778px) {

}
`;

const RightButtonArea = styled(ButtonArea)`
  right: 0;
  display : flex;
  align-items: center;
  justify-content: center;
    >p{
        font-size: 50px;
        font-weight: 600;
    }
`;

const IndexCounter = styled.div`
    padding-top: 24px;
    font-size: 14px;
    >span{
        padding : 0 12px 0 12px;
    }
    
    @media screen and (min-width: 778px) {
        padding-top: 48px;
    }
`
const ContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top : 36px;
@media screen and (min-width: 778px) {
    width: 50%;
}

`
const Content = styled.div`
    border-bottom: 0.5px solid ${PRIMARY_COLOR};
    padding-bottom: 16px;
`



const DetailsWrap = styled.div`
    display : flex;
    flex-direction: column;
    padding-top: 16px;
    row-gap: 12px;

    @media screen and (min-width : 778px) { 
       flex-direction: row;
    }
`

const Details = styled.div`
    line-height: 24px;
`
const Standard = styled.div`
    min-width: 100px;
    font-weight: bold;
    color: ${PRIMARY_COLOR};

`
export default props => {

    const { images, data } = props

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const translateValue = -currentIndex * 100;

    return (
        <Container>
            <HeaderWrap>
                <Title>{props.title}</Title>
                <Period>{props.period}</Period>
            </HeaderWrap>

            <FlexWrap>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CarouselWrap>
                        <CarouselContainer>
                            <SlideWrapper translateValue={translateValue}>
                                {images.map((src, index) => (
                                    <Slide key={index} src={src} alt={`slide-${index}`} />
                                ))}
                            </SlideWrapper>
                            <LeftButtonArea onClick={handlePrev}><p>‹</p></LeftButtonArea>
                            <RightButtonArea onClick={handleNext}><p>›</p></RightButtonArea>
                        </CarouselContainer>
                    </CarouselWrap>

                    <IndexCounter>
                        <span>‹</span>
                        {currentIndex + 1}/{images.length}
                        <span>›</span>
                    </IndexCounter>
                </div>



                <ContentWrap>
                    <Content>
                        {props.children}
                    </Content>

                    <DetailsWrap>
                        <Standard>
                            주요기능
                        </Standard>
                        <Details>
                            {data.mainContent}
                        </Details>
                    </DetailsWrap>

                    <DetailsWrap>
                        <Standard>
                            Frontend
                        </Standard>
                        <Details>
                            {data.frontEnd}
                        </Details>
                    </DetailsWrap>

                    <DetailsWrap>
                        <Standard>
                            Backend
                        </Standard>
                        <Details>
                            {data.backEnd}
                        </Details>
                    </DetailsWrap>

                    <DetailsWrap>
                        <Standard>
                            Database
                        </Standard>
                        <Details>
                            {data.dataBase}
                        </Details>
                    </DetailsWrap>

                    <DetailsWrap>
                        <Standard>
                            BaaS
                        </Standard>
                        <Details>
                            {data.baas}
                        </Details>
                    </DetailsWrap>

                    {data.url && (
                        <DetailsWrap>
                            <Standard>
                                Youtube
                            </Standard>
                            <Details>
                               <a href={data.url} 
                                target='_blank'
                                style={{color:'#FF6B6B'}}
                               >{data.url}</a>
                            </Details>
                        </DetailsWrap>

                    )}



                </ContentWrap>

            </FlexWrap>
        </Container>
    )
}
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { speechbubble,my_portrait,bubble_text } from "../styles/GlobalStyle"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>

      <div className="speechbubble">
        <TextWrapper>
        
          <Title>Hi, I'm Marcus</Title>
          <Description className="bubble_text">
          
            I'm a product designer in love with technology.
            <br></br>
            Below is a collection of my work over the years. Yrs
            
          </Description>
        
        </TextWrapper>
        </div>

    
        <HeroPortrait>
          <img
            className="my_portrait"
            src="/images/homepage/my-portrait.png"
            alt="picture of me "
          />
        </HeroPortrait>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: #F6F6F6;
  overflow: hidden;
  padding-left: 24px;
  padding-right: 24px;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  height: 670px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

const TextWrapper = styled.div`
  position: relative;
  z-index: 1;
 
`

const Title = styled(H2)`
  color: ${themes.light.text1};
  text-shadow: 0 6px 50px rgba(0, 0, 0, 0.2);

`

const Description = styled.div`
font-size:24px;
line-height:1.6;
`
const HeroPortrait = styled.div`


`





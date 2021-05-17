import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi, I'm Marcus</Title>
          <Description>
            I'm a product designer in love with technology.
            <br></br>
            Below is a collection of my work over the years.
          </Description>
        </TextWrapper>

        <HeroPortrait>
          <img
            className="my-portrait"
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
  background: #fff;
  overflow: hidden;
  height: 600px;
  padding-left: 24px;
  padding-right: 24px;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

const TextWrapper = styled.div`
  margin-top: 200px;
  position: relative;
  z-index: 1;
`

const Title = styled(H1)`
  color: ${themes.light.text1};
  text-shadow: 0 6px 50px rgba(0, 0, 0, 0.4);
  padding-bottom:32px;
`

const Description = styled.div`
font-size:18px;
line-height:1.4;
`
const HeroPortrait = styled.div``

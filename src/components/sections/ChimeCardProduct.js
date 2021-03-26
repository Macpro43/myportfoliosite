import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText } from "../styles/TextStyles"

function ChimeCardProduct() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/">
          <div className="backHome">
            <div className="backArrow">
              <img src="/images/icons/left-arrow.svg"></img>
            </div>
            <p>BACK TO PROJECTS</p>
          </div>
        </Link>

        <div className="project-header">
          <div className="project-title">
            <h2>CHIMECARD</h2>
            <p>Web . iOS . Android</p>
          </div>

          <div className="project-blurb">
           
Chimecard is the bank account that helps you lead a healthier financial life and automate your savings. I designed and release the products for iOS, Android, and Web experience.
            <div className="project-role">
              <span>MY ROLE:</span> UI/UX Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="chimecard-hero"></div>

      </ContentWrapper>
    </Wrapper>
  )
}

export default ChimeCardProduct

const Wrapper = styled.div`
  background: #fff;
  padding-left: 24px;
  padding-right: 24px;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
`

const SectionTitle = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  margin: 0 auto;
`
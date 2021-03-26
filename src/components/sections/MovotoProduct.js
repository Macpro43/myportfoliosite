import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText } from "../styles/TextStyles"

function MovotoProduct() {
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
            <h2>MOVOTO</h2>
            <p>Web . iOS . Android</p>
          </div>

          <div className="project-blurb">
          Movoto is a full-service real estate brokerage that provides customers with search tools and information on top agents. One of my first projects for Movoto was the mobile website.
            <div className="project-role">
              <span>MY ROLE:</span> UI/UX Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="movoto-hero"></div>

       
      </ContentWrapper>
    </Wrapper>
  )
}

export default MovotoProduct

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
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText } from "../styles/TextStyles"

function OfferSelectProduct() {
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
            <h2>TEN-X</h2>
            <p>Offer Select</p>
          </div>

          <div className="project-blurb">
          Ten-X Commercial is the CRE marketplace that is a force multiplier for sellers, buyers, and brokers. Ten-X precision-matches assets accelerate close rates and streamline the entire transaction process with more than $50 billion in sales and increasing daily.
          <br></br>
Offer Select was a new Ten-X platform to make an offer and purchase commercial real estate online.
            <div className="project-role">
              <span>MY ROLE:</span> Product Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="offer-select-hero"></div>

      </ContentWrapper>
    </Wrapper>
  )
}

export default OfferSelectProduct

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

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText } from "../styles/TextStyles"

function AuctionAndroidApp() {
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
            <h2>AUCTION.COM</h2>
            <p>Android App</p>
          </div>

          <div className="project-blurb">
          Auction.com is the nations leading online real estate marketplace focused exclusively on selling residential bank-owned properties and foreclosure properties.
            <div className="project-role">
              <span>MY ROLE:</span> Product Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="auction-android-hero"></div>

       
      </ContentWrapper>
    </Wrapper>
  )
}

export default AuctionAndroidApp

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

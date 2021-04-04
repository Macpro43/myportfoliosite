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

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
					<H2>The Problem</H2>
					<p>
          For Ten-X, we created a brand new way for our users to purchase commercial real estate online. The traditional auction process was initially taken from auction.com and wanted to bring a better connection between the buyers and sellers. A buyer can create an offer and negotiate with the seller to have a competitive advantage by having the highest offer.
					</p>
				</div>
        <div className="content-space-80px"></div>
       


      

        <div className="sectionBlurb">
					<H2>Vision & Strategy</H2>
					<p>
          My primary role for the Offer Select release was to back up the UX designer and apply our visual language and “responsive” to the current product direction.
					</p>
				</div>

        <div className="content-space-80px"></div>
      
        <div className="one-image-layout">
					<img src="/images/productpages/tenx-offerselect/wireframes_offerselect1.png" />
				</div>


        <div className="one-image-layout">
        <img src="/images/productpages/tenx-offerselect/wireframes_offerselect2.png" />
				</div>


        <div className="content-space-80px"></div>
        <div className="content-space-80px"></div>


        <SectionTitle>
					<H2>The finished product</H2>
				</SectionTitle>

        <div className="content-space-80px"></div>

        <div className="one-image-layout">
        <img src="/images/productpages/tenx-offerselect/buyer-offerboard-desktop.png" />
				</div>
        <div className="content-space-80px"></div>
        <div className="one-image-layout">
        <img src="/images/productpages/tenx-offerselect/buyer-offerboard-teblet-mobile.png" />
				</div>

        <div className="content-space-80px"></div>


<SectionTitle>
  <H3>The finished product</H3>
</SectionTitle>

<div className="content-space-80px"></div>

<div className="one-image-layout">
<img src="/images/productpages/tenx-offerselect/seller-offerboard-desktop.png" />
</div>

<div className="content-space-80px"></div>

<div className="one-image-layout">
<img src="/images/productpages/tenx-offerselect/seller-offerboard-tablet-mobile.png" />
</div>


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

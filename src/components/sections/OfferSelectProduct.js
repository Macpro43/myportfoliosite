import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText, BodyMain } from "../styles/TextStyles"

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
<BodyMain>       
Offer Select was a new Ten-X platform to make an offer and purchase commercial real estate online.
<br></br>
<br></br>
Ten-X Commercial is the CRE marketplace that is a force multiplier for sellers, buyers, and brokers. Ten-X precision-matches assets, accelerate closing rates, and streamlines the entire transaction process with more than $50 billion in sales and increasing daily.
</BodyMain>  
            <div className="project-role">
              <span>MY ROLE:</span> Product Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="offer-select-hero"></div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
					<H2>The Challenge</H2>
					<BodyMain>
          For Ten-X, we created a brand new way for our users to purchase commercial real estate online. The traditional auction process was initially taken from auction.com and wanted to bring a better connection between the buyers and sellers. 
          <br></br>
          <br></br>
          A buyer can create an offer and negotiate with the seller to have a competitive advantage by not just having the highest offer.
					</BodyMain>
				</div>
        <div className="content-space-80px"></div>
       


      

        <div className="sectionBlurb">
					<H2>Vision & Strategy</H2>
					<BodyMain>
          My primary role for the Offer Select release was to back up the UX designer, apply our visual language, and "responsify" the current product direction.
					</BodyMain>
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

<div className="content-space-80px"></div>
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
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  margin: 0 auto;
`

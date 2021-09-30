import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText,BodyMain } from "../styles/TextStyles"

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
          Auction.com is the nation's leading online real estate marketplace focused exclusively on selling residential bank-owned properties and foreclosure properties. 
          <br></br>
          <br></br>
          We needed an Android app. Ha!
            <div className="project-role">
              <span>MY ROLE:</span> Product Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="auction-android-hero"></div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>The Challenge</H2>

          <BodyMain>
          Auction.com already had a full experience replicating the web platform as an iPad app and an iPhone bid-only app. I was asked to design the android experience while working in tandem with the iOS designer.
          </BodyMain>
        </div>

        <div className="content-space-80px"></div>


      
        <div className="content-space-80px"></div>



        <div className="two-three-image-layout">
					<div>
						<H2>The Method</H2>

						<BodyMain>
            As the mobile designer for Web and Android, I wanted to make sure our apps we consistent and OS friendly using the os design guidelines as a starting point. During the mid-cycle of the project, the iOS designer and I had a working session to find inconsistencies between platforms.
						</BodyMain>

					
					</div>

					<img src="/images/productpages/auction-tps/Tps-user-testing.jpg" />
				</div>


        <SectionTitle>
					<H2>Onboarding</H2>
				</SectionTitle>


        <SectionTitle>
					<H2>Search</H2>
				</SectionTitle>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>Auction Dashboard</H2>

          <BodyMain>
          For the user's dashboard, we wanted to have a clean and informational property card. It is normal for someone to read left to right, so the color status draws action from left to right. With the content hierarchy in mind; Price, bidding status, and the status color was the primary goal for the native apps.
          </BodyMain>
        </div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>The PDP (Product Details Page)</H2>

          <BodyMain>
          Property information, and where you bid on the property.
          </BodyMain>
        </div>


        <div className="content-space-80px"></div>

<div className="sectionBlurb">
  <H2>Placing a Bid</H2>

  <BodyMain>
  Placing a bid is one of the most important goals of our users. So to be accurate of common terminology that the user will understand and feel comfortable with.
  </BodyMain>
</div>

<div className="content-space-80px"></div>


<SectionTitle>
					<H2>Search</H2>
				</SectionTitle>

        <div className="content-space-80px"></div>
       
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
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  margin: 0 auto;
`

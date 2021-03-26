import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText } from "../styles/TextStyles"

function ColoristAppProduct() {
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
            <h2>MADISON REED</h2>
            <p>Colorist App</p>
          </div>

          <div className="project-blurb">
            Madison Reed Color Bar is fast + fabulous hair color, without the
            salon price tag. The colorist app is for the Madison Reed color bars
            for the stylist to enter the client’s information while collecting
            inventory/product used.
            <div className="project-role">
              <span>MY ROLE:</span> Lead Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="colorsit-app-hero"></div>

        <div className="content-space-80px"></div>

        <div className="content-space-80px"></div>

        <div className="two-three-image-layout">
          <div>
            <H2>The Why</H2>

            <p>
              After a round of interviews with colorists, we learned that there
              are multiple issues with the stylist app's current version. The
              main problems found were:
            </p>
            <p>Who would benefit from this?</p>
            <ol type="1">
              <li>Color Advisor: not working for colorists</li>
              <li>Photos: Clients need more examples</li>
              <li>UX: Complicated flow and outdated codebase</li>
            </ol>
          </div>

          <img src="/images/productpages/madison-reed/Old-stylist-app.png" />
        </div>
        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>Divide and Conquer</H2>

          <p>
            Breaking all the components among the designers for weekly sync-ups
            to quickly update the style guide and developer toolkit.
          </p>
        </div>
        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>The Vision</H2>

          <H4>THE COLORIST</H4>
          <p>
            Breaking all the components among the designers for weekly sync-ups
            to quickly update the style guide and developer toolkit.
          </p>
          <H4>THE BUSINESS</H4>
          <p>
            Give the business-relevant performance metrics and customer data.
          </p>
          <H4>THE CLIENTS</H4>
          <p>To give the clients useful information.</p>
        </div>
        <div className="content-space-80px"></div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>The Process</H2>

          <p>
            After we gathered all of our research the next step was to conduct a
            5-day design sprint.
          </p>
        </div>

        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/ca-process-1-scaled.jpg" />
          <img src="/images/productpages/madison-reed/ca-process-2-scaled.jpg" />
        </div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>The Solution</H2>

          <p>
            After the explorations and our design sprint, we knew colorist
            needed to have:
          </p>

          <H4>Better data:</H4>

          <ul>
            <li>
              Consistent and accurate customer hair data using Machine Learning
            </li>
            <li>Better SLA data for labor efficiency tracking</li>
            <li>Tracking of customer’s desired result</li>
            <li>Standardized formula input</li>
          </ul>

          <H4>Speed:</H4>

          <ul type="1">
            <li>From start to the timer in 3 clicks for returning customers</li>
            <li>Fast navigation for colorists within the app</li>
            <li>Answering color advisor replaced with a quick backie</li>
          </ul>

          <H4>Better tools:</H4>

          <ul type="1">
            <li>Product images to help customers pick a shade</li>
            <li>Full historic view of the client’s history</li>
          </ul>

          <H4>Revenue:</H4>

          <ul type="1">
            <li>Upsell core products within the appointment.</li>
            <li>Accurate charges for the extra product used in a service.</li>
          </ul>
        </div>

        <div className="content-space-80px"></div>
        <div className="content-space-80px"></div>

        <div className="two-three-image-layout">
          <div>
            <H3>UI Implementation</H3>

            <p>
              This project was a complete redesign not only just the visual UI
              design but the tech stack from Angular to React.
            </p>

            <p>
              This was the beginning of the Color Bar UI System. We wanted to
              create a visual system that could work across all platforms, iOS,
              Android, and Web. The way I describe the direction is that iOS
              design had a baby with Material Design.
            </p>
          </div>

          <img src="/images/productpages/madison-reed/iso-1.jpg" />
        </div>

        <div className="content-space-80px"></div>
        <div className="content-space-80px"></div>

        <div className="sectionTitle">
          <H1>Daily Appointments</H1>
        </div>
        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/Appointments-1.jpg" />
          <img src="/images/productpages/madison-reed/Appointments-1.jpg" />
        </div>

        <div className="content-space-80px"></div>

        <div className="sectionTitle">
          <H1>The Consultation</H1>
        </div>
        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/consultation-1.jpg" />
          <img src="/images/productpages/madison-reed/consultation-2.jpg" />
        </div>

        <div className="content-space-80px"></div>

        <div className="sectionTitle">
          <H1>The Service</H1>
        </div>
        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/Service-1.jpg" />
          <img src="/images/productpages/madison-reed/Service-2.jpg" />
        </div>

        <div className="content-space-80px"></div>

        <div className="sectionTitle">
          <H1>The Summary</H1>
        </div>
        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/summary-1.jpg" />
          <img src="/images/productpages/madison-reed/summary-2.jpg" />
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ColoristAppProduct

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

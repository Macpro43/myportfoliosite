import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, H2, H3, H4, MediumText, BodyMain } from "../styles/TextStyles"

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
          <BodyMain>  Madison Reed Color Bar is fast + fabulous hair color, without the salon price tag. The colorist app is for the Madison Reed color bars for the stylist to enter the client's/customers information while collecting inventory/product used.
</BodyMain>
            <div className="project-role">
              <span>MY ROLE:</span> Product Designer
            </div>
          </div>
        </div>

        <div className="project-hero-image" id="colorsit-app-hero"></div>

        <div className="content-space-80px"></div>

        <div className="content-space-80px"></div>

        <div className="two-three-image-layout">
          <div>
            <H2>The Why</H2>

            <BodyMain>
              After a round of interviews with colorists, we learned that there
              are multiple issues with the stylist app's current version. The
              main problems found were:
            </BodyMain>

            
            <BodyMain></BodyMain>
            <ol type="1">
              <li>Color Advisor: A very confusing experience and doesnt work most of the time. The colorists sometimes don't even use the app.</li>
              <li>Photos: Clients needed more examples of hair color on real people.</li>
              <li>UX: Complicated flow and outdated codebase.</li>
            </ol>
          </div>

          <img src="/images/productpages/madison-reed/Old-stylist-app.png" />
        </div>
        <div className="content-space-80px"></div>
        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>My Role</H2>

          <BodyMain>
          I was the main designer on this project from ideation to implementation from September 2018 – January 2019.
          </BodyMain>

          <BodyMain>
          In addition, I worked closely with 1 Product Manager and 3 engineers.
          </BodyMain>

          <BodyMain>
          The app relaunched in all Color Bars in March 2019.
          </BodyMain>

        </div>
        <div className="content-space-80px"></div>
 <div className="content-space-80px"></div>
        <div className="sectionBlurb">
          <H2>The Vision</H2>

          <H4>The Colorist</H4>
          <BodyMain>
          We want to empower the colorists to consistently deliver high-quality results by seamlessly giving them the correct information.
          </BodyMain>
          <H4>The Business</H4>
          <BodyMain>
            Give the business-relevant performance metrics and customer data.
          </BodyMain>
          <H4>The Clients</H4>
          <BodyMain>To give the clients helpful and relevant information.</BodyMain>
        </div>
        <div className="content-space-80px"></div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>The Process</H2>

          <BodyMain>
          After we gathered all of our research, the next step was to conduct a 5-day design sprint.

          </BodyMain>
        </div>

        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/ca-process-1-scaled.jpg" />
          <img src="/images/productpages/madison-reed/ca-process-2-scaled.jpg" />
        </div>

        <div className="content-space-80px"></div>

        <div className="sectionBlurb">
          <H2>Mapping out the current and proposed experience. </H2>

          <BodyMain>
          The product manager was gathering the requirements for this project well before I started. So we were able to map out the current app experience, and we were able to pinpoint areas of frustration and replace specific steps for an optimized experience.  
          
          </BodyMain>

          <div className="content-space-80px"></div>

<H3>What came out of the mapping session? </H3>
<H4>We needed to have:</H4>

          <H4>Better data:</H4>

          <ul>
            <li>
            Consistent and accurate customer hair data using Machine Learning
            </li>
            <li>Better SLA data for labor efficiency tracking</li>
            <li>Tracking of customer's desired result</li>
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

        <div className="sectionBlurb">
          <H2>UI/Structure</H2>

          <BodyMain>
          This project was completely redesigned from the UI, UX, and tech stack from Angular to React/React Native.
          <br></br>  
          <br></br>     
          We wanted to create a design system to be a crossfunctional design language without focusing too much on particular design guidelines to be consistent between web, desktop applications, iOS, and Android.
          <br></br>  
          <br></br> 
          The way we were thinking about it is that if iOS had a baby with Material Design. 
          </BodyMain>
          
          
        </div>

        <div className="content-space-80px"></div>

        <div className="one-image-layout">
        <img src="/images/productpages/madison-reed/iso-1.jpg" />
				</div>




        <div className="content-space-80px"></div>
        <div className="content-space-80px"></div>


        <div className="sectionBlurb">
          <H2>Daily Appointments</H2>

          <BodyMain>
          Check your daily schedule, and understand what's going on for the day in the color bar. 
          </BodyMain>
        </div>



        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/Appointments-1.jpg" />
          <img src="/images/productpages/madison-reed/Appointments-1.jpg" />
        </div>

        <div className="content-space-80px"></div>

   



        <div className="sectionBlurb">
          <H2>The Consultation</H2>

          <BodyMain>
          Start the appointment off right, upload the backie, put in the customer's hair data as you're talking to the customer to understand a little more about their hair profile.  
          </BodyMain>
        </div>





        
        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/consultation-1.jpg" />
          <img src="/images/productpages/madison-reed/consultation-2.jpg" />
        </div>

        <div className="content-space-80px"></div>

   

        <div className="sectionBlurb">
          <H2>The Service</H2>

          <BodyMain>
          Select what you will be using for the visit and input the %of color used and set the timer.  

          </BodyMain>
        </div>



        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/Service-1.jpg" />
          <img src="/images/productpages/madison-reed/Service-2.jpg" />
        </div>

        <div className="content-space-80px"></div>

    

        <div className="sectionBlurb">
          <H2>The Summary</H2>

          <BodyMain>
          Review the appointment, add some additional products, and finish the appointment with payment and gratuity for the colorist. 
          </BodyMain>
        </div>



        <div className="content-space-80px"></div>

        <div className="two-image-layout">
          <img src="/images/productpages/madison-reed/summary-1.jpg" />
          <img src="/images/productpages/madison-reed/summary-2.jpg" />
        </div>

        <div className="content-space-80px"></div>

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
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  margin: 0 auto;
`

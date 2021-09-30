import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, H2, H3, H4, MediumText, BodyMain } from "../styles/TextStyles";

function ProductHeader() {
	return (
		<Wrapper>
			<ContentWrapper>
				<Link to="/">
					<div className="backHome">
						<div className="backArrow">
							<img src="/images/icons/left-arrow.svg"></img>
						</div>
						<p>GO BACK</p>
					</div>
				</Link>

				<div className="project-header">
					<div className="project-title">
						<h2>AUCTION.COM</h2>
						<p>Product Rebrand</p>
					</div>

					<div className="project-blurb">
						Auction.com is the nation's leading online real estate marketplace
						focused exclusively on selling residential bank-owned properties and
						foreclosure properties.
						<br></br>
						<br></br>
						It was reaching the ten-year anniversary of auction.com; what better
						than celebrating with a company rebrand? It was about six years
						since any significant brand design changes were implemented.
						<div className="project-role">
							<span>MY ROLE:</span> Lead Designer
						</div>
					</div>
				</div>

				<div className="project-hero-image" id="auction-product-hero"></div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Situation</H2>
					<ol type="1">
						<li>
							Auction.com needed to target a broader audience to increase its
							user base.
						</li>
						<li>
							The new brand was developed by an outside design agency with
							marketing before the product team was pulled into the redesign
							project.
						</li>

						<li>
							Our existing style guide was limited, difficult to use and was not
							consistently implemented into the products.
						</li>
					</ol>
				</div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Kickoff </H2>
					To kick this initiative off, the product team held a design workshop
					with the marketing team. From there the plan was:
					<ol type="1">
						<li>Competitive Analysis</li>
						<li>Feature Brainstorming</li>

						<li>Feature Poll</li>
						<li>User Testing</li>
					</ol>
				</div>

				<div className="content-space-80px"></div>

				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/hompage-process-1.png" />
					<img src="/images/productpages/auction-rebrand/hompage-process-2.png" />
				</div>

				<div className="content-space-80px"></div>

				<SectionTitle>
					<H2>Who were we building the homepage for?</H2>
				</SectionTitle>

				<div className="one-image-layout">
					<img src="/images/productpages/auction-rebrand/homepage-is-for.jpg" />
				</div>
				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>Project Hypothesis</H2>
					<p>
          First-time visitors may not immediately understand what Auction.com is, and this confusion may prevent them from engaging with our site. Introducing meaningful content may give them reasons to trust (ADC) Auction.com and encourage them to explore further.

					</p>
				</div>

				<div className="content-space-80px"></div>
				<div className="one-image-layout">
					<img src="/images/productpages/auction-rebrand/Homepage-wireframes.png" />
				</div>
				<div className="content-space-80px"></div>
				<SectionTitle>
					<H2>The Homepage from before.</H2>
				</SectionTitle>

				<div className="content-space-80px"></div>
				<div className="one-image-layout">
					<img src="/images/productpages/auction-rebrand/before-homepage.jpg" />
				</div>
				<div className="content-space-80px"></div>
				<div className="sectionBlurb">
					<H2>The Winner: Search Optimized</H2>
					<p>
					80% of the user testing felt more positive towards the searched optimized homepage.
					</p>
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/auction-rebrand/final-homepage.png" />
				</div>
				<div className="content-space-80px"></div>
				<div className="one-image-layout">
					<img src="/images/productpages/auction-rebrand/value-props.png" />
				</div>
				<div className="content-space-80px"></div>

				<SectionTitle>
					<H2>Homepage Wins</H2>
				</SectionTitle>
				<div className="content-space-80px"></div>
				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/hompage-win-1.jpg" />
					<img src="/images/productpages/auction-rebrand/hompage-win-2.jpg" />
					<img src="/images/productpages/auction-rebrand/hompage-win-3.jpg" />
				</div>

				<div className="content-space-80px"></div>
				<div className="content-space-80px"></div>
				<div className="sectionBlurb">
					<H2>Native Mobile Apps</H2>
					<H3>The Problem</H3>
					<ol type="1">
						<li>Inconsistent Verbiage</li>
						<li>Inconsistent User Experience</li>
						<li>Inconsistent Visual Design</li>
					</ol>
				</div>

				<div className="content-space-80px"></div>
				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/mobile-process-1.png" />
					<img src="/images/productpages/auction-rebrand/mobile-process-2.png" />
				</div>
				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>What we did:</H2>
					<BodyMain>
					We updated the iOS & Android style-sheets to have consistent colors, components, and type treatment and started creating a timeline for updating the nomenclature tone & voice.
Developers started updating the codebase.
					</BodyMain>
					
			
				</div>
				<div className="content-space-80px"></div>
				<div className="content-space-80px"></div>
				<SectionTitle>
					<H2>The End Product</H2>
				</SectionTitle>

				<div className="content-space-80px"></div>
				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/mobile-app-final.jpg" />
				</div>
				<div className="content-space-80px"></div>
				<div className="content-space-80px"></div>
				<SectionTitle>
					<H2>Mobile App Wins</H2>
				</SectionTitle>

				<div className="content-space-80px"></div>

				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/mobile-win-1.jpg" />
					<img src="/images/productpages/auction-rebrand/mobile-win-2.jpg" />
				</div>

				<div className="content-space-80px"></div>
				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Style Guide</H2>

					<p>
          The heart of all our products was the style guide. Our style guide needed a complete revamp of the visual product components and functionality.
               <br></br>
               <br></br>
Who would benefit from this?
					</p>
					
					<ol type="1">
						<li>Current and future designers</li>
						<li>Our developers</li>
            <li>Day to day users</li>
					</ol>
				</div>

				<div className="content-space-80px"></div>

				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/Style-guide-header.png" />
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

				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/divide-and-conquer.jpg" />
				</div>
				<div className="content-space-80px"></div>
				<SectionTitle>
					<H2>Style Guide Wins</H2>
				</SectionTitle>
				<div className="content-space-80px"></div>
				<div className="two-image-layout">
					<img src="/images/productpages/auction-rebrand/style-guide-win-1.jpg" />
					<img src="/images/productpages/auction-rebrand/style-guide-win-2.jpg" />
					<img src="/images/productpages/auction-rebrand/style-guide-win-3.jpg" />
				</div>

        <div className="content-space-80px"></div>

			</ContentWrapper>
		</Wrapper>
	);
}

export default ProductHeader;

const Wrapper = styled.div`
	background: #fff;
	padding-left: 24px;
	padding-right: 24px;
`;

const ContentWrapper = styled.div`
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
`;

const SectionTitle = styled.div`
	padding-top: 24px;
	padding-bottom: 24px;
	text-align: center;
	margin: 0 auto;
`;

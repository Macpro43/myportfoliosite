import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, H2, H3, H4, MediumText, BodyMain } from "../styles/TextStyles";

function AuctionTpsContent() {
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
						<p>TPS Page</p>
					</div>

					<div className="project-blurb">
					<BodyMain>
						Auction.com is the nations leading online real estate marketplace
						focused exclusively on selling residential bank-owned properties and
						foreclosure properties.
						<br></br>
						<br></br>
						(TPS) Third-Party Sales page redesign. 
						</BodyMain>
						<div className="project-role">
							<span>MY ROLE:</span> Product Designer
						</div>
					</div>
				</div>

				<div className="project-hero-image" id="auction-tps-hero"></div>

				<div className="content-space-80px"></div>

				<div className="three-two-image-layout">
					<div>
						<H2>Some Context</H2>

						<ol type="1">
							<li>Third-Party Sales (TPS) is 65% of the business</li>
							<li>
							The product team had not established trust with the business
							</li>
							<li>Our TPS experience did not provide unique value to users</li>
							<li>
							Banks questioned the value Auction.com added to their revenue
							</li>
						</ol>
					</div>

					<img src="/images/productpages/auction-tps/tps-context-pie-chart.jpg" />
				</div>

				<div className="content-space-80px"></div>
				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>Our Hypothesis</H2>
					<BodyMain>
					If we offer a better customer experience for TPS, we will increase engagement with users. This will result in increased revenue per each property and/or salability of that property.
					</BodyMain>
				</div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Strategy</H2>
					<BodyMain>
					As the main designer on this project, I aided research and worked with one other designer, four engineers, one PM, and business stakeholders in launching the TPS PDP.
					</BodyMain>
				</div>

				<div className="content-space-80px"></div>

				<div className="content-space-80px"></div>

				<div className="two-three-image-layout">
					<div>
						<H2>Design Sprint</H2>

						<BodyMain>What we discovered.</BodyMain>
						<ol type="1">
							<li>New Design structure of the TPS PDP</li>
							<li>Status change notifications</li>
							<li>Initial concept calculation for valuation guidance</li>
						</ol>
					</div>

					<img src="/images/productpages/auction-tps/Tps-design-sprint.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="content-space-80px"></div>

				<div className="content-space-80px"></div>

				<div className="two-three-image-layout">
					<div>
						<H2>User Testing</H2>

						<BodyMain>
							My role in this was to assist our researcher and ask additional
							questions. Our primary focus was property valuation.
								<br></br>
								<br></br>
							The UX Prototype...
						</BodyMain>

						<BodyMain></BodyMain>
					</div>

					<img src="/images/productpages/auction-tps/Tps-user-testing.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="two-three-image-layout">

					<div>

					
						<H2>The Results</H2>
						<H4>Primary Information:</H4>
						<ol type="1">
							<li>Property Photo</li>
							<li>Property Address</li>
							<li>Property Valuation</li>
						</ol>
						<div className="content-space-80px"></div>
						<H4>Secondary Information:</H4>
						<ol type="1">
							<li>Documents</li>
							<li>Event Details</li>
						</ol>
					</div>

					<img src="/images/productpages/auction-tps/Tps-results.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="content-space-80px"></div>
				<SectionTitle>
					<H2>Before</H2>
				</SectionTitle>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/auction-tps/the-before-tps-pdp.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<SectionTitle>
					<H2>After</H2>
				</SectionTitle>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/auction-tps/TPS-outcome-desktop.jpg" />
				</div>
				<div className="content-space-80px"></div>



			</ContentWrapper>
		</Wrapper>
	);
}

export default AuctionTpsContent;

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

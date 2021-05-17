import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, H2, H3, H4, MediumText } from "../styles/TextStyles";

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
						Auction.com is the nations leading online real estate marketplace
						focused exclusively on selling residential bank-owned properties and
						foreclosure properties.
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
							<li>Third Party Sales (TPS) is 65% of the business</li>
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

				<div className="sectionBlurb">
					<H2>Our Hypothesis</H2>
					<p>
						If we offer a better customer experience for TPS, we will increase
						engagement with users. This would result in increased revenue per
						each property and salability of that property.
					</p>
				</div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Strategy</H2>
					<p>
						As the lead designer on this project, I aided research and worked
						side-by-side with designers, engineers, product managers, and
						business stakeholders in launching the TPS PDP.
					</p>
				</div>

				<div className="content-space-80px"></div>

				<div className="content-space-80px"></div>

				<div className="two-three-image-layout">
					<div>
						<H2>Design Sprint</H2>

						<p>What we discovered.</p>
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

						<p>
							My role in this was to assist our researcher and ask additional
							questions. Our primary focus was property valuation.
						</p>

						<p>The UX Prototyping…</p>
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

        <div className="sectionBlurb">
      
        
          <div className="one-image-layout">
					<img src="/images/productpages/auction-tps/TPS-outcome-mobile.jpg" />
				</div>


        </div>

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

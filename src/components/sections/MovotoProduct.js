import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, H2, H3, H4, MediumText, BodyMain } from "../styles/TextStyles";

function MovotoProduct() {
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
						<h2>MOVOTO</h2>
						<p>Web . iOS . Android</p>
					</div>

					<div className="project-blurb">
						<BodyMain>
							Movoto is a full-service real estate brokerage that provides
							customers with search tools and information on top agents. One of
							my first projects for Movoto was the mobile website.
						</BodyMain>
						<div className="project-role">
							<span>MY ROLE:</span> UI/UX Designer
						</div>
					</div>
				</div>

				<div className="project-hero-image" id="movoto-hero"></div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Problem</H2>

					<BodyMain>
						The primary goal of this project was to bring a robust mobile design
						aesthetic to the Movoto product, mainly to their direct search and
						discovery products. As the UI Designer on this project, I
						facilitated creating their UI Toolkit and mobile design direction
						for mobile web and native mobile products.
					</BodyMain>
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/movoto/mobile_web_meet_the_ui.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The UI Kit</H2>

					<p>
						Since we were moving extremely fast, I created a photoshop file with
						the designs for the front-end developers. If they needed a specific
						design asset, they would have all of them in one place to keep a
						consistent look and feel.
					</p>
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/movoto/ui_kit_one.jpg" />
				</div>

				<div className="one-image-layout">
					<img src="/images/productpages/movoto/ui_kit_two.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H1>The Homepage</H1>
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/movoto/web_landing-1-scaled.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/movoto/movoto_pdp-scaled.jpg" />
				</div>

				<div className="content-space-80px"></div>
			</ContentWrapper>
		</Wrapper>
	);
}

export default MovotoProduct;

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

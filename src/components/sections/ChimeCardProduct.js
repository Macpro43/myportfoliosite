import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, H2, H3, H4, MediumText, BodyMain } from "../styles/TextStyles";

function ChimeCardProduct() {
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
						<h2>CHIMECARD</h2>
						<p>Web . iOS . Android</p>
					</div>

					<div className="project-blurb">
						<BodyMain>Chimecard, which is now Chime, is the bank account that helps you
						lead a healthier financial life and automate your savings. I
						designed and released the products for iOS, Android, and the Web
						experience.</BodyMain>
						<div className="project-role">
							<span>MY ROLE:</span> UI/UX Designer
						</div>
					</div>
				</div>

				<div className="project-hero-image" id="chimecard-hero"></div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>The Problem</H2>

					<p>
						One of the main challenges we faced was an outdated User Interface
						and an inconsistent User Experience for the iOS MVP and to start
						strategizing for the Android App.
					</p>
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/chimecard/meet-the-ui.jpg" />
				</div>

				<div className="content-space-80px"></div>

				<div className="sectionBlurb">
					<H2>Process & Strategy</H2>

					<p>
						After joining Chime, I received the in-process designs created by a
						development agency as the Lead Designer. I realized that the current
						direction was already outdated by today's standards of modern mobile
						user experiences. I needed a fast and straightforward way to
						approach the UX inventory.
					</p>
				</div>

				<div className="content-space-80px"></div>

				<div className="one-image-layout">
					<img src="/images/productpages/chimecard/a-process-ux.jpg" />
				</div>


        <div className="content-space-80px"></div>


        <div className="sectionBlurb">
					<H2>The New Chimecard</H2>

					<p>
          After working through user flows and features came the User Interface Design for both iOS and Android. It was inspiring to bring continuity to both platforms.
					</p>
				</div>


        <div className="content-space-80px"></div>

<div className="one-image-layout">
  <img src="/images/productpages/chimecard/new-ui.jpg" />
</div>

<div className="content-space-80px"></div>

<div className="one-image-layout">
  <img src="/images/productpages/chimecard/offers-ios.jpg" />
</div>


<div className="one-image-layout">
  <img src="/images/productpages/chimecard/offers-android.jpg" />
</div>


<div className="one-image-layout">
  <img src="/images/productpages/chimecard/account-funding-ios.jpg" />
</div>


<div className="one-image-layout">
  <img src="/images/productpages/chimecard/account-funding-android.jpg" />
</div>


<div className="one-image-layout">
  <img src="/images/productpages/chimecard/transaction-icons.jpg" />
</div>


<div className="content-space-80px"></div>


        <div className="sectionBlurb">
					<H2>In-App Communication</H2>

					<p>
          The direction that I took was to create a familiar chat experience for the Chimecard helpdesk. Other than creating a generic help email system, we wanted to make the experience more human.
					</p>
				</div>

        <div className="content-space-80px"></div>



        <div className="sectionBlurb">
					<H2>Chimecard Homepage</H2>				
				</div>


        <div className="one-image-layout">
  <img src="/images/productpages/chimecard/one-of-many-landing-pages-scaled.jpg" />
</div>

			</ContentWrapper>
		</Wrapper>
	);
}

export default ChimeCardProduct;

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

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

function WorkSection() {
  return (
    <Wrapper>
      <IndexSectionTitle>MY WORK</IndexSectionTitle>

      <ContentWrapper>
        <WorkContainer>
          <div className="index-company-section">
            <div className="index-company-title">
              <p>
                Madison Reed: <span>June 2018 - Sept 2019 </span>{" "}
              </p>
            </div>

            <div className="work-section-1">
              <Link to="/colorist-app/">
                <div className="project-container" id="MR-index-img">
                  <div className="index-project-info">
                    <h2>Madison Reed</h2>
                    <p>Colorist App</p>
                  </div>
                  <div className="view-project">
                    <p>View Project</p>
                  </div>
                  <img
                    className="view-project-arrow"
                    src="/images/icons/right-arrow.svg"
                  ></img>

                  <div className="hover-overlay"></div>
                </div>
              </Link>
            </div>
          </div>

          <div className="index-company-section">
            <div className="index-company-title">
              <p>
                Ten-X / Auction.com: <span>Nov 2014 - Apr 2018 </span>{" "}
              </p>
            </div>

            <div className="work-section-2">
              <Link to="/auction-rebrand/">
                <div
                  className="project-container"
                  id="Auction-Rebrand-index-img"
                >
                  <div className="index-project-info">
                    <h2>Auction.com</h2>
                    <p>Product Rebrand</p>
                  </div>
                  <div className="view-project">
                    <p>View Project</p>
                  </div>
                  <img
                    className="view-project-arrow"
                    src="/images/icons/right-arrow.svg"
                  ></img>
                  <div className="hover-overlay"></div>
                </div>
              </Link>

              <Link to="/auction-tps-page/">
                <div className="project-container" id="Auction-TPS-index-img">
                  <div className="index-project-info">
                    <h2>Auction.com</h2>
                    <p>TPS Page</p>
                  </div>
                  <div className="view-project">
                    <p>View Project</p>
                  </div>
                  <img
                    className="view-project-arrow"
                    src="/images/icons/right-arrow.svg"
                  ></img>
                  <div className="hover-overlay"></div>
                </div>
              </Link>
            </div>
            <div className="work-section-3-1">
              <Link to="/tenx-offerselect/">
                <div
                  className="project-container"
                  id="Ten-x-offerselect-index-img"
                >
                  <div className="index-project-info">
                    <h2>Ten-X</h2>
                    <p>Offer Select</p>
                  </div>

                  <div className="view-project">
                    <p>View Project</p>
                  </div>

                  <img
                    className="view-project-arrow"
                    src="/images/icons/right-arrow.svg"
                  ></img>
                  <div className="hover-overlay"></div>
                </div>
              </Link>

              <Link to="/auction-android-app/">
              <div
                className="project-container"
                id="Auction-index-android-app-img"
              >
                <div className="index-project-info">
                  <h2>Auction.com</h2>
                  <p>Android App </p>
                </div>

                <div className="view-project">
                  <p>View Project</p>
                </div>

                <img
                  className="view-project-arrow"
                  src="/images/icons/right-arrow.svg"
                ></img>
                <div className="hover-overlay"></div>
              </div>
              </Link>
            </div>
          </div>

          <div className="index-company-section">
            <div className="index-company-title">
              <p>
                Chimecard: <span>Jan 2014 - Aug 2014 </span>{" "}
              </p>
            </div>

            <div className="work-section-1">
            <Link to="/chimecard/">
              <div className="project-container" id="chimecard-index-img">
                <div className="index-project-info">
                  <h2>Chimecard</h2>
                  <p>Web . iOS . Android</p>
                </div>

                <div className="view-project">
                  <p>View Project</p>
                </div>

                <img
                  className="view-project-arrow"
                  src="/images/icons/right-arrow.svg"
                ></img>

                <div className="hover-overlay"></div>
              </div>
              </Link>
            </div>
          </div>

          <div className="index-company-section">
            <div className="index-company-title">
              <p>
                Movoto: <span>Aug 2013 - Jan 2014 </span>{" "}
              </p>
            </div>

            <div className="work-section-1">
            <Link to="/movoto/">
              <div className="project-container" id="Movoto-index-img">
                <div className="index-project-info">
                  <h2>MOVOTO</h2>
                  <p>Web . iOS . Android</p>
                </div>

                <div className="view-project">
                  <p>View Project</p>
                </div>

                <img
                  className="view-project-arrow"
                  src="/images/icons/right-arrow.svg"
                ></img>
                <div className="hover-overlay"></div>
              </div>
              </Link>
            </div>
          </div>
        </WorkContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default WorkSection

const Wrapper = styled.div`
  background: #ffffff;
  overflow: hidden;
  padding: 100px 24px 80px 24px;
`
const IndexSectionTitle = styled.div`
  position: relative;
  text-align: center;
  border: solid #ccc;
  background: #fff;
  padding: 12px;
  font-size: 28px;
  font-weight: 900;
  width: 180px;
  margin-right: auto;
  margin-left: auto;
`

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
`

const WorkContainer = styled.div``

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: #000;
`

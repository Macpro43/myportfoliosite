import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

export default function Header() {
  return (
    <Wrapper>
      <NavWrapper>
        <Link to="/">
          <MyLogo> MARCUS PROIETTI</MyLogo>
        </Link>

        <SocialNav>
          <Link to="/">
            <img src="/images/icons/linkedin.svg" />
          </Link>
          <Link to="/">
            <img src="/images/icons/twitter-square.svg" />
          </Link>
        </SocialNav>
      </NavWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 54px;
  background: #fff;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  position:relative;
`

const NavWrapper = styled.div`
  max-width: 1200px;
  height: 54px;
  display: grid;
  grid-template-columns: 180px auto;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  
`

const MyLogo = styled.div`

color:#000;

`

const SocialNav = styled.div`
display:grid;
grid-template-columns: 32px 32px;
gap:8px;
align-items: center;

`
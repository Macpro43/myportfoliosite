import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import WorkSection from "../components/sections/WorkSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      
      <HeroSection />

      <WorkSection />

    </Layout>
  )
}

export default IndexPage

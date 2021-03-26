import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MovotoProduct from "../components/sections/MovotoProduct"


function MovotoApp() {
  return (
    <Layout>
      <SEO title="Madsion Reed Colorist App" />
      
      <MovotoProduct />

     

    </Layout>
  )
}

export default MovotoApp
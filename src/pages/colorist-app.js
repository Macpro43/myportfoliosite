import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ColoristAppProduct from "../components/sections/ColoristAppProduct"


function ColoristApp() {
  return (
    <Layout>
      <SEO title="Madsion Reed Colorist App" />
      
      <ColoristAppProduct />

     

    </Layout>
  )
}

export default ColoristApp
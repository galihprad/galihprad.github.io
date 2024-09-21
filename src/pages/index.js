import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} isHomePage>
      <Seo title="Home Page" />
      <Bio homepage />
      <h4>Education</h4>
      <strong>Bachelor :</strong> Universitas Gadjah Mada, Indonesia (grad 2020) <br />
      <strong>Master :</strong> Universitas Gadjah Mada, Indonesia (grad 2024)

      <h4>Research Area</h4>
      <h4>Publication</h4>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'

import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { seoTitleSuffix } from "../../config"
import Contact from '../components/sections/contact'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.contact.edges[0].node
  const { seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
          }
        />
        <Contact />
      </Layout>
    </GlobalStateProvider>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}


export default ContactPage

export const pageQuery = graphql`
  {
    contact: allMdx(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
  }
`

/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Projects from '../components/sections/projects'
import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactButton from "../components/contactButton"
import { seoTitleSuffix } from "../../config"


const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.projects.edges[0].node
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
        <Projects content={data.projects.edges} />
        <ContactButton />
      </Layout>
    </GlobalStateProvider>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage

export const pageQuery = graphql`
  {
    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
            category
            features
            id
            external
            github
            screenshot {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }
  }
`

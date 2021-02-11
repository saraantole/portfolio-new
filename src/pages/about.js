/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion"
import GlobalStateProvider from "../context/provider"
import ContentWrapper from "../styles/contentWrapper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactButton from "../components/contactButton"
import { seoTitleSuffix } from "../../config"
import Img from 'gatsby-image'

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  h1 {
    font-size: 72px;
    font-weight: 600;
    margin-left: 120px;
    padding: 40px;
    margin-bottom: 0;
    padding-top: 100px;
    margin-top: 0;
  }
  h2 {
    font-size: 40px;
    font-weight: 600;
    padding: 30px 0 5px 0;
  }

  p{
    font-size: 30px;
    line-height: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      h1 {
        font-size: 36px;
        margin: 0;
        padding-right: 0;
      }

      h2 {
    font-size: 28px;
  }

  p{
    font-size: 24px;
    line-height: 36px;
  }
    }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
  }

  .about-content{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    height: 800px;
  }

  .text-container {
    width: 45%;
    padding: 30px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .img-container {
    width: 380px;
    align-self: flex-end;
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);

    img {
      filter: grayscale(40%) contrast(0.9) brightness(100%);
      }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .about-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }

  .text-container {
    width: 100%;
    padding: 0;
  }

  .img-container {
    width: 100%;
    margin-top: 20px;
    }
  }
`

const AboutPage = ({ data }) => {
  const { body, frontmatter } = data.about.edges[0].node
  const { title, seoTitle, useSeoTitleSuffix, useSplashScreen } = frontmatter

  const globalState = {
    isIntroDone: useSplashScreen ? false : true,
    darkMode: false,
  }

  const { scrollYProgress } = useViewportScroll()
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 1000])

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title={
            useSeoTitleSuffix
              ? `${seoTitle} - ${seoTitleSuffix}`
              : `${seoTitle}`
          }
          meta={[{ name: "robots", content: "noindex" }]}
        />
        <StyledSection id={title}>
          <StyledContentWrapper>
            <motion.h1 style={{ x: moveRight }}>Hey There!</motion.h1>
            <div className="about-content">
              <div className='text-container'>
                <MDXRenderer>{body}</MDXRenderer>
              </div>
              <div className='img-container'>
                <Img fluid={frontmatter.image.childImageSharp.fluid} />
              </div>
            </div>
          </StyledContentWrapper>
        </StyledSection>
        <ContactButton />
      </Layout>
    </GlobalStateProvider>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const pageQuery = graphql`
  {
    about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

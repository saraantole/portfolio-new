/* eslint-disable prettier/prettier */
import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion"
import Img from "gatsby-image"
import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"
import SplashScreen from "../splashScreen"
import { StyledLink } from '../navbar';

const StyledSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 100px;
    margin-bottom: -400px;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 80px;
      margin-bottom: -150px;
      }

    .name {
      position: relative;
      top: -500px;
      left: 450px;
      white-space: nowrap;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        top: -350px;
        left: 170px;
      }
    }

    }
    .title {
      font-size: 350px;
      font-weight: 500;
      margin: 0;
      line-height: 300px;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 120px;
        line-height: 120px;
        padding: 0;
      }
    }
    .subtitle {
      font-size: 28px;
      font-weight: 600;
      margin: 0;
      position: relative;
      top: -350px;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        top: -190px;
      }
    }

    .image-container {
      width: 100%;
      height: auto;
      position: relative;
      background: red;
      top: -120px;
      left: 120px;
      max-width: 500px;
      margin-top: 4rem;
      margin-left: 0;
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 0;
        max-width: 300px;
        top: -100px;
        left: -10px;
      }

      img {
        filter: grayscale(80%) contrast(0.9) brightness(90%);
      }
    }
`

const StyledAboutLink = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 100px 40px 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 40px;
      }

  a {
    margin: 0;
  }
`


const Hero = ({ content }) => {
  const { frontmatter } = content[0].node
  const { isIntroDone, darkMode } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, darkMode, eControls, gControls, sControls, uControls])

  const { scrollYProgress } = useViewportScroll()
  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, 4000])
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, -4000])

  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <motion.h1 className="title" style={{ x: moveLeft }}>
          {frontmatter.greetings}
        </motion.h1>
        <div className='image-container'>
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </div>
        <motion.h2 className="title name" style={{ x: moveRight }}>
          {frontmatter.title}
        </motion.h2>
        <h3 className="subtitle">
          {frontmatter.subtitle}
        </h3>
      </StyledContentWrapper>
      <StyledAboutLink>
        <StyledLink to='/about'>More About Me...</StyledLink>
      </StyledAboutLink>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero

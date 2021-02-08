import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import ContentWrapper from "../../styles/contentWrapper"
import { StyledLink } from "../navbar"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: auto;
    position: relative;
    overflow-x: hidden;

    .section-title {
      font-size: 52px;
      font-weight: 600;
      padding: 40px;
      margin-top: 100px;
    }
    .services {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
      overflow: hidden;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      .section-title {
        font-size: 32px;
        margin-left: -500px;
      }
    }
  }
`

const StyledServices = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover .screenshot {
    transform: scale(0.95);
    transition: 0.4s ease;
  }

  :hover .category {
    transform: scale(1.3);
    transition: 0.4s ease;
  }

  .screenshot {
    position: relative;
    width: 600px;
    height: 550px;
    transition: 0.4s ease;
    left: -200px;
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);

    img {
      filter: grayscale(80%) contrast(0.9) brightness(90%);
    }
  }

  .category {
    position: relative;
    padding-left: 40px;
    font-size: 74px;
    line-height: 80px;
    letter-spacing: +1px;
    margin-bottom: 20px;
    font-weight: 700;
    padding: 0 40px;
    top: -300px;
    left: 320px;
    width: 50%;
    transition: 0.4s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;

    :hover .screenshot {
      transform: scale(1);
    }

    :hover .category {
      transform: scale(1);
    }

    .screenshot {
      position: static;
      width: 100%;
      height: auto;
      left: 0px;
    }

    .category {
      position: static;
      padding: 20px 0;
      margin-bottom: 50px;
      top: 0px;
      left: 0px;
      width: 100%;
      font-size: 24px;
      line-height: 40px;
    }
  }
`
const StyledServicesLink = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -100px;
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 40px;
    top: -20px;
  }

  a {
    margin: 0;
  }
`

const Services = ({ content }) => {
  const services = content.slice(1, content.length)

  const { scrollYProgress } = useViewportScroll()
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 1000])

  return (
    <StyledSection id="services">
      <StyledContentWrapper>
        <motion.div style={{ x: moveRight }}>
          <h3 className="section-title">Look what I can do for you</h3>
        </motion.div>
        <div className="services">
          {services.map((service) => {
            const { frontmatter } = service.node
            return (
              <StyledServices key={frontmatter.id}>
                <Img
                  className="screenshot"
                  fluid={frontmatter.screenshot.childImageSharp.fluid}
                />
                <div className="category">{frontmatter.category}</div>
              </StyledServices>
            )
          })}
        </div>
      </StyledContentWrapper>
      <StyledServicesLink>
        <StyledLink to="/projects">More about my Projects...</StyledLink>
      </StyledServicesLink>
    </StyledSection>
  )
}

Services.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Services

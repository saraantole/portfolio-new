import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import Context from "../../context"
import ContentWrapper from "../../styles/contentWrapper"
import Icon from "../../components/icons"
import { lightTheme, darkTheme } from "../../styles/theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledGithubLink = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 0 40px;
  top: -100px;

  a {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    position: relative;
    margin: 0 0 0 1.25rem;
    padding: 0;
    &::before {
      transition: 200ms ease-out;
      height: 0.1563rem;
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary};
      width: 0%;
      bottom: -0.125rem;
    }
    &:hover::before {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 40px;
    top: -50px;

    a {
      margin: 0;
      font-size: 18px;
    }
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    overflow-x: hidden;
    .section-title {
      font-size: 72px;
      font-weight: 600;
      padding: 40px;
      margin-left: 120px;
    }
    .projects {
      display: flex;
      height: auto;
      flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      .section-title {
        font-size: 36px;
        padding: 0;
        margin-left: 70px;
      }
    }
  }
`

const StyledProject = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .category {
    padding-left: 40px;
    font-size: 24px;
    line-height: 80px;
    text-transform: uppercase;
    letter-spacing: +1px;
    margin-bottom: 20px;
    font-weight: 700;
    padding: 0 40px;
  }
  .title {
    margin-top: 0.625rem;
    font-size: 42px;
    line-height: 48px;
    font-weight: 400;
    padding: 0 40px;
  }
  .links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    a {
      display: inline-block;
      margin-left: 2rem;
    }
    svg {
      width: 1.3rem;
      height: 1.3rem;
      fill: ${({ theme }) => theme.colors.primary};
    }
    svg:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
    }
  }

  .screenshot {
    width: 100vw;
    height: 450px;
  }

  p {
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    letter-spacing: 1px;
  }

  .details {
    display: flex;
    justify-content: center;
  }

  .project-details {
    background-color: ${({ theme }) => theme.colors.card};
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    width: 70%;
    padding: 60px 85px 85px 85px;
    position: relative;
    top: -180px;

    .features {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      .feature {
        border: 2px ${({ theme }) => theme.colors.primary} solid;
        border-radius: 10px;
        padding: 5px 15px;
        margin-right: 10px;
        margin-top: 20px;
        font-weight: 600;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .project-details {
      width: 90%;
      top: -100px;
      padding: 30px 40px 45px 40px;
    }

    .title {
      font-size: 28px;
      line-height: 30px;
    }

    .category {
      font-size: 22px;
      line-height: 40px;
    }

    .screenshot {
      width: 100vw;
      height: 250px;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 1px;
    }
  }
`

const Projects = ({ content }) => {
  const { darkMode } = useContext(Context).state
  const sectionDetails = content[0].node
  const projects = content.slice(1, content.length)

  const { scrollYProgress } = useViewportScroll()
  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 1000])

  return (
    <StyledSection id="projects">
      <StyledContentWrapper>
        <motion.div style={{ x: moveRight }}>
          <h3 className="section-title">Latest projects</h3>
        </motion.div>
        <div className="projects">
          {projects.map((project) => {
            const { body, frontmatter } = project.node
            return (
              <StyledProject key={frontmatter.id}>
                <div className="title">{frontmatter.title}</div>
                <div className="category">{frontmatter.category}</div>
                <Img
                  className="screenshot"
                  fluid={frontmatter.screenshot.childImageSharp.fluid}
                />
                <div className="details">
                  <div className="project-details">
                    <div className="links">
                      {frontmatter.github && (
                        <a
                          href={frontmatter.github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <Icon
                            name="github"
                            color={
                              darkMode
                                ? darkTheme.colors.subtext
                                : lightTheme.colors.subtext
                            }
                          />
                        </a>
                      )}
                      {frontmatter.external && (
                        <a
                          href={frontmatter.external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <Icon
                            name="external"
                            color={
                              darkMode
                                ? darkTheme.colors.subtext
                                : lightTheme.colors.subtext
                            }
                          />
                        </a>
                      )}
                    </div>
                    <MDXRenderer>{body}</MDXRenderer>
                    <div className="features">
                      {frontmatter.features.map((feature, i) => {
                        return (
                          <div className="feature" key={i}>
                            {feature}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </StyledProject>
            )
          })}
        </div>
      </StyledContentWrapper>
      <StyledGithubLink>
        <a
          href={sectionDetails.frontmatter.buttonUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="External Link"
        >
          {sectionDetails.frontmatter.buttonText}
        </a>
      </StyledGithubLink>
    </StyledSection>
  )
}

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Projects

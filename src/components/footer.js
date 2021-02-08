import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ContentWrapper from "../styles/contentWrapper"
import Context from "../context"
import { author } from "../../config"
import Social from "./social"

const StyledFooter = styled.footer`
  width: 100%;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.colors.primary : theme.colors.background};
  border-top: ${({ theme, darkMode }) =>
    darkMode ? null : `1px solid ${theme.colors.tertiary}`};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer-links {
      display: flex;
      padding-bottom: 20px;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: auto;
        padding: 20px 40px 0 40px;
      }

      a,
      p {
        font-size: 0.875rem;
        font-weight: 700;
        color: ${({ theme, darkMode }) =>
          darkMode ? theme.colors.background : theme.colors.primary};
        letter-spacing: 2px;
        margin: 0;
        padding-left: 5px;
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 9px;
        }
      }
    }
  }
`

const Footer = () => {
  const { darkMode } = useContext(Context).state
  return (
    <StyledFooter darkMode={darkMode}>
      <StyledContentWrapper>
        <Social width="9rem" padding="0.5rem 1.25rem" />
        <div className="footer-links">
          <p>
            Crafted by <span>{author}</span>
          </p>
          <p> | © {new Date().getFullYear()}</p>
          <Link to="/privacy" darkMode={darkMode}>
            | Privacy
          </Link>
        </div>
      </StyledContentWrapper>
    </StyledFooter>
  )
}

export default Footer

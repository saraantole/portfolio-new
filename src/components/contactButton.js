import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledContactLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme, color }) => theme.colors[color] || color};
  text-align: center;
  width: 100%;
  transition: 0.3s ease-out;
  padding: 70px 40px;
  margin: 50px 0;

  h3 {
    font-size: 120px;
  }

  h4 {
    font-size: 24px;
  }

  &:hover {
    letter-spacing: 30px;
    transition: 0.4s ease-out;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h3 {
      font-size: 46px;
      margin-bottom: 0;
    }

    h4 {
      font-size: 18px;
      margin: 5px;
    }
  }
`

const ContactButton = () => (
  <StyledContactLink to="/contact">
    <h3>CONTACT</h3>
    <h4>Let&apos;s Chat</h4>
  </StyledContactLink>
)

export default ContactButton

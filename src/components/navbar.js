import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { navLinks } from "../../config"

const StyledNav = styled.nav`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 45%;
    background: ${({ theme }) => theme.colors.background};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .nav-link {
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

  .current {
    text-decoration: underline;
  }

  .cta-btn {
    width: auto;
    height: auto;
    font-weight: 400;
    border-radius: 10px;
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    transition: 20ms ease-out;
    font-size: 24px;
    padding: 0.5rem 1.5rem;
    margin: 0;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`

export const StyledLink = styled(Link)`
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
`

const Navbar = () => {
  const { menu, button } = navLinks
  return (
    <StyledNav>
      {menu.map(({ name, url }, key) => {
        return (
          <StyledLink key={key} to={url} activeClassName="current">
            {name}
          </StyledLink>
        )
      })}
      <Link className="cta-btn" to={button.url}>
        {button.name}
      </Link>
    </StyledNav>
  )
}

export default Navbar

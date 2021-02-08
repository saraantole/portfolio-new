import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { siteShortTitle } from "../../config"

const StyledLogo = styled.div`
  position: relative;
  z-index: 9;

  font-size: ${({ size }) => (size ? size : "18px")};
  font-weight: 700;
  color: ${({ theme, color }) => theme.colors[color] || color};

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle}
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo

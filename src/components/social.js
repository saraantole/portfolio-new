/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Icon from "./icons"
import { lightTheme } from "../styles/theme"
import { socialMedia } from "../../config"

const StyledSocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledSocialProfile = styled.a`
  width: auto;
  height: auto;
  padding: 20px;
  transition: all 0.1s ease-out;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10px;
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
`

const Social = ({ width, padding, fontSize, fontWeight }) => {
  return (
    <StyledSocialWrapper itemCount={socialMedia.length}>
      {socialMedia.map(({ name, url }, key) => {
        return (
          <StyledSocialProfile
            key={key}
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={name}
            width={width}
            padding={padding}
            fontSize={fontSize}
            fontWeight={fontWeight}

          >
            <Icon name={name} />
          </StyledSocialProfile>
        )
      })}
    </StyledSocialWrapper>
  )
}

Social.propTypes = {
  width: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
}

export default Social

/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  width: auto;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  margin: 0 ${({ center }) => (center ? "auto" : "0")};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;

  text-align: center;
    letter-spacing: 3px;
    transition: 0.3s ease;

    :hover {
      transform: scale(1.03);
      transition: 0.3s ease;
    }
  
  border-radius: 10px;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.3rem;
    margin-bottom: -0.175rem;
  }
`

const Button = ({ onClick, textAlign, center, children }) => (
  <StyledButton onClick={onClick} textAlign={textAlign} center={center}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  textAlign: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Button

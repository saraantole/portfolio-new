import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"

const StyledDarkToggle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 32px;
  left: 40vw;
  z-index: 10;
`

const StyledDarkToggleLabel = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
`

const StyledDarkToggleInput = styled.input`
  display: none;
`

const StyledDarkToggleDiv = styled.div`
  background: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 34px;

  span {
    background: #fff;
    bottom: 4px;
    transform: ${({ theme }) => theme !== "light" && "translateX(26px)"};
    text-align: center;
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }
`

// eslint-disable-next-line react/prop-types
const DarkToggle = ({ toggleTheme, theme }) => {
  return (
    <div>
      <StyledDarkToggle>
        <StyledDarkToggleLabel>
          <StyledDarkToggleInput type="checkbox" onChange={toggleTheme} />
          <StyledDarkToggleDiv theme={theme}>
            <span style={{ color: "black" }}>
              {theme === "light" ? "☾" : "✹"}
            </span>
          </StyledDarkToggleDiv>
        </StyledDarkToggleLabel>
      </StyledDarkToggle>
    </div>
  )
}

DarkToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default DarkToggle

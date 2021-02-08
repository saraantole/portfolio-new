/* eslint-disable prettier/prettier */
import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "@fontsource/manrope"
import { lightTheme, darkTheme } from "../styles/theme"
import useDarkMode from "../hooks/useDarkMode"
import GlobalStyle from "../styles/globalStyle"
import Header from "./header"
import DarkToggle from "./darkToggle"
import Footer from "./footer"

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  // Enables dark mode if the user's OS has an active dark theme
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
      <StyledLayoutWrapper>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Header />
          <DarkToggle toggleTheme={toggleTheme} theme={theme} />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </StyledLayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout

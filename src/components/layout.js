/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "@fontsource/manrope"
import { lightTheme, darkTheme } from "../styles/theme"
import useDarkMode from "../hooks/useDarkMode"
import GlobalStyle from "../styles/globalStyle"
import Header from "./header"
import DarkToggle from "./darkToggle"
import Footer from "./footer"
import { AnimatePresence, motion } from 'framer-motion'

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

  const [isFirstLoaded, setFirstLoaded] = useState(true)

  useEffect(() => {
    if (!sessionStorage.getItem("splash")) {
      setTimeout(() => {
        sessionStorage.setItem('splash', true)
        setFirstLoaded(false)
      }, 3900)
    }

    if (sessionStorage.getItem("splash")) {
      setFirstLoaded(false)
    }
    
    window.onunload = () => sessionStorage.removeItem('splash')
    return
  }, [isFirstLoaded])


  if (!componentMounted) {
    return <div />
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <StyledLayoutWrapper>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <motion.section initial={{ opacity: 0 }} transition={{ duration: 1 }}
            animate={{ opacity: 1}} exit={{ opacity: 0 }}>
            {isFirstLoaded && <InitialTransition />}
            <Header />
            <DarkToggle toggleTheme={toggleTheme} theme={theme} />
            <main id="main-content">{children}</main>
            <Footer />
          </motion.section>
        </ThemeProvider>
      </StyledLayoutWrapper>
    </AnimatePresence>
  )
}


Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        zIndex: '50',
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        backgroundColor: 'black',
        alignItems: 'center'
      }}
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.style.overflow = 'hidden'}
      onAnimationComplete={() =>
        document.body.style.overflowY = 'visible'
      }
    >
      <motion.svg variants={textContainer} style={{ position: 'absolute', zIndex: '50', display: 'flex' }}>
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          style={{ color: 'white' }}
        >
          <rect style={{ width: '100%', height: '100%', fill: 'currentcolor' }} />
          <motion.rect
            variants={text}
            style={{ width: '100%', height: '100%', color: 'grey', fill: 'currentcolor' }}
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)", fontSize: '32px', fontWeight: '600', letterSpacing: '3px' }}
        >
          SA
        </text>
      </motion.svg>
    </motion.div>
  );
};
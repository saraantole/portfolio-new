/* eslint-disable prettier/prettier */
import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import { motion, useAnimation } from "framer-motion"

import { lightTheme, darkTheme } from "../styles/theme"
import Context from "../context/"


const StyledSplashScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 900;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.colors.primary};
  .logo-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 4rem;
  }
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: ${lightTheme.colors.primary};
  }

  .name {
    color: ${darkTheme.colors.primary};
    font-size: 2em;
    font-weight: 500;
    letter-spacing: 2px;
  }
`

const SplashScreen = () => {
  const { state, setState } = useContext(Context)

  const backgroundControls = useAnimation()
  const backdropControls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await backgroundControls.start({ opacity: 1 })
      await backdropControls.start({ height: "0%", transition: { delay: 0.8 } })
      await backgroundControls.start({ opacity: 0, transition: { delay: 0.6 } })
      setState({ ...state, isIntroDone: true })
    }
    sequence()
  }, [backgroundControls, backdropControls, setState, state])

  return (
    <StyledSplashScreen
      initial={{ opacity: 0 }}
      animate={backgroundControls}
    >
      {/* Add splashScreen class to body (prevents scrolling during splashScreen) */}
      <Helmet
        bodyAttributes={{ class: !state.isIntroDone ? "splashScreen" : "" }}
      />
      <div className="logo-wrapper">
        <motion.div
          className="backdrop"
          initial={{ height: "100%" }}
          animate={backdropControls}
          transition={{ duration: 2 }}
        />
        <div className='name'>Sara Antole</div>
      </div>
    </StyledSplashScreen>
  )
}

export default SplashScreen

import React, { useRef, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { useOnScreen } from "../../hooks"
import Button from "../../styles/button"
import ContentWrapper from "../../styles/contentWrapper"

const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px;

  h2 {
    font-weight: 700;
    font-size: 4.5em;
    letter-spacing: 2px;
    line-height: 140px;
    margin: 0;
    width: 40vw;
  }

  p {
    font-size: 24px;
    font-weight: 600;
  }

  form {
    width: 40vw;
    height: 600px;
  }

  label {
    font-size: 18px;
  }

  input {
    height: 60px;
  }

  textarea {
    height: 150px;
  }

  button {
    text-align: center;
    width: 100%;
    letter-spacing: 3px;
    transition: 0.3s ease;

    :hover {
      transform: scale(1.01);
      transition: 0.3s ease;
      letter-spacing: 10px;
    }
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 32px;
    padding-left: 10px;
    margin-top: 10px;
    border-style: none none solid;
    border-width: 1px;
    border-color: #000 #000 #1f1f1f;
    background-color: transparent;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    font-size: 18px;

    :focus {
      outline: none;
      background: white;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    padding: 40px;

    h2 {
      width: 100%;
      font-size: 48px;
      line-height: 60px;
    }

    form {
      width: 100%;
      margin-top: 40px;
    }
  }
`

const Contact = () => {
  // Required for animation
  const ref = useRef()
  //const onScreen = useOnScreen(ref)
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const [status, setStatus] = useState("")

  const submitForm = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }
  return (
    <StyledSection
      id="contact"
      ref={ref}
      variants={variants}
      //animate={onScreen ? "visible" : "hidden"}
    >
      <StyledContentWrapper>
        <h2>Let&apos;s build something beautiful!</h2>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/xbjpbdrr"
          method="POST"
        >
          <label>Your Name</label>
          <input type="name" name="name" required />
          <label>Your Email</label>
          <input type="email" name="email" required />
          <label>Your Message</label>
          <textarea name="message" required />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <Button>Send Message</Button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Contact

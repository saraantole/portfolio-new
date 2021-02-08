/* eslint-disable prettier/prettier */
import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import Dino from "../components/icons/dino.gif"
import GlobalStateProvider from "../context/provider"
import Button from "../styles/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../styles/contentWrapper"

const StyledSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  h1 {
    font-size: 48px;
    font-weight: 600;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin: 30px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
    width: 300px;
  }
  }

`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    margin: 50px 0;
    padding: 0;
    height: 100%;
    text-align: center;
  }
`

const NotFoundPage = () => {
  const globalState = {
    isIntroDone: true,
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title="404: Not found"
          meta={[{ name: "robots", content: "noindex" }]}
        />
        <StyledSection>
          <StyledContentWrapper>
            <h1 data-testid="heading">OOOPS!</h1>
            <img src={Dino} alt='404' />
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to='/'><Button>Go back home</Button></Link>
          </StyledContentWrapper>
        </StyledSection>
      </Layout>
    </GlobalStateProvider>
  )
}

export default NotFoundPage

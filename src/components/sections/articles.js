import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import SkeletonLoader from "tiny-skeleton-loader-react"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context"
import ContentWrapper from "../../styles/contentWrapper"
import { parseDate } from "../../utils"
import { mediumRssFeed, shownArticles } from "../../../config"
//import { rssFeed, shownArticles } from "../../../config"
import { lightTheme, darkTheme } from "../../styles/theme"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;

    .section-title {
      font-size: 64px;
      font-weight: 600;
      margin-bottom: 60px;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 42px;
        line-height: 45px;
      }
    }
    .articles {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: -2rem 0 0 0;
      padding: 0 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 1rem;
      }
    }
    .card {
      width: 16.25rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      margin: 30px;
      box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.card};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
        transform: scale(1.01);
        transition: 0.3s ease-in-out;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 50px 32px 0 0;
      }
      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
      }
      .title {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      .date {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.subtext};
        letter-spacing: +0.5px;
      }
    }
  }
`

const Articles = () => {
  const MAX_ARTICLES = shownArticles

  const { isIntroDone, darkMode } = useContext(Context).state
  const [articles, setArticles] = useState()
  const articlesControls = useAnimation()

  // Load and display articles after the splashScreen sequence is done
  useEffect(() => {
    const loadArticles = async () => {
      if (isIntroDone) {
        await articlesControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 1 },
        })
        fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
          // fetch(rssFeed, { headers: { Accept: "application/json" } })
          .then((res) => res.json())
          // Feed also contains comments, therefore we filter for articles only
          .then((data) =>
            data.items.filter((item) => item.categories.length > 0)
          )
          // .then(data => data.items.filter(item => item.title.length > 0))
          .then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
          .then((articles) => setArticles(articles))
          .catch((error) => console.log(error))
      }
    }
    loadArticles()
  }, [isIntroDone, articlesControls, MAX_ARTICLES])

  return (
    <StyledSection
      id="articles"
      initial={{ opacity: 0, y: 20 }}
      animate={articlesControls}
    >
      <StyledContentWrapper>
        <h3 className="section-title">You can read my mind</h3>
        <div className="articles">
          {articles
            ? articles.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={item.title}
                  aria-label={item.link}
                  key={item.link}
                >
                  <div className="card">
                    <span className="category">
                      <div color="tertiary" hoverColor="secondary">
                        {item.categories[2]}
                      </div>
                    </span>
                    <h4 className="title">{item.title}</h4>
                    <span className="date">{parseDate(item.pubDate)}</span>
                  </div>
                </a>
              ))
            : [...Array(MAX_ARTICLES <= 6 ? MAX_ARTICLES : 6)].map((i, key) => (
                <div className="card" key={key}>
                  <SkeletonLoader
                    height="1.5rem"
                    style={{ marginBottom: ".5rem" }}
                    background={
                      darkMode
                        ? darkTheme.colors.tertiary
                        : lightTheme.colors.tertiary
                    }
                  />
                  <SkeletonLoader
                    height="4rem"
                    background={
                      darkMode
                        ? darkTheme.colors.tertiary
                        : lightTheme.colors.tertiary
                    }
                  />
                  <SkeletonLoader
                    height=".75rem"
                    width="50%"
                    style={{ marginTop: ".5rem" }}
                    background={
                      darkMode
                        ? darkTheme.colors.tertiary
                        : lightTheme.colors.tertiary
                    }
                  />
                </div>
              ))}
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Articles

/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"

const GlobalStyle = createGlobalStyle`
    
    // Import normalize.css
    ${modernNormalize}

    * {
        box-sizing: border-box;
    }

    html {
        width: 100%;
    }

    body {
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        line-height: 1.5rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
        &.blur {
            overflow: hidden;
            #___gatsby #main-content > * {
              filter: blur(5px) ;
              transition: all .3s ease-out;
              pointer-events: none;
              user-select: none;
            }
          }
        }
        &.splashScreen {
              position: fixed;
              overflow: hidden;
        }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }

    h1 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.375rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    hr {
        margin: 3rem auto;
        border-width: .05rem;
        color: ${({ theme }) => theme.colors.tertiary};
        opacity: 0.1;
      }

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
       }
       ::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 15px;
       }
       ::-webkit-scrollbar-thumb:hover{
        background: grey;
       }
       ::-webkit-scrollbar-track{
        background: #ffffff;
        border-radius: 15px;
        box-shadow: inset 7px 10px 12px #f0f0f0;
       }

`

export default GlobalStyle

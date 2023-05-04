import { createGlobalStyle } from "styled-components";

import outfitBoldFontUrl from "~/assets/fonts/Outfit-Bold.ttf";
import outfitMediumFontUrl from "~/assets/fonts/Outfit-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Outfit-Bold;
    src: url(${outfitBoldFontUrl}) format('truetype');
  }

  @font-face {
    font-family: Outfit-Medium;
    src: url(${outfitMediumFontUrl}) format('truetype');
  }

  :root {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-family: ${({ theme }) => theme.font.outfit.medium}, sans-serif;
    letter-spacing: ${({ theme }) => theme.letterSpacing.base};
    color-scheme: dark;
    background-color: ${({ theme }) => theme.color.darkNavy};
    color: ${({ theme }) => theme.color.silver};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding:0;
    font: inherit;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizespeed;
    line-height: 1.5;
  }

  a, button {
    cursor: pointer;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture,
  svg,
  video {
    max-width: 100%;
    display: block;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

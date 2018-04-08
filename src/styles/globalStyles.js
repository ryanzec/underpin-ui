import {injectGlobal} from 'styled-components';

import * as structureCss from 'src/styles/structure';
import * as themesCss from 'src/styles/themes';

injectGlobal`
  hr {
    //-moz-box-sizing: content-box;
    //box-sizing: content-box;
    height: 0;
    border: none;
    border-bottom: 1px solid ${themesCss.light.application.borderColor};
  }

  html {
    font-family: ${structureCss.font.fontFamily}; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
    font-size: 62.5%; /* 3 */
    color: ${themesCss.light.application.textDarkColor};
  }

  body {
    margin: 0;
    font-size: ${structureCss.font.fontSize};
  }

  td,
  th {
    padding: 4px 8px;
    border: 1px solid ${themesCss.light.application.borderColor};
  }

  ol,
  ul {
    margin: 0;
    padding: 0 0 0 ${structureCss.spacing.small};
  }

  // style placeholder text
  ::-webkit-input-placeholder{
    font-style: italic;
  }

  ::-moz-placeholder {
    font-style: italic;
  }

  :-ms-input-placeholder {
    font-style: italic;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .fade-out {
    &-enter {
      transition: opacity .5s;
      opacity: 0;

      &-active {
        opacity: 1;
      }
    }

    &-exit {
      transition: opacity .5s;
      opacity: 1;

      &-active {
        opacity: 0;
      }
    }
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    margin: 18px 0 0 0;
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
    margin: 15px 0 0 0;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 12px 0 0 0;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 9px 0 0 0;
  }

  h5 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 7px 0 0 0;
  }

  h6 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 6px 0 0 0;
  }

  a {
    color: ${themesCss.light.application.textLinkColor};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    padding: 0 0 8px 0;
  }
`;

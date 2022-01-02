import { createGlobalStyle } from 'styled-components'

import { size } from './theme'

const { wrapper } = size;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
      height: 100%;
      width: 100%;
      font-family: 'Roboto', sans-serif;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #EBF1FF;
  }

  body > div {
    max-width: ${wrapper}px;
    height: 100%;
    margin: 0 auto;
    padding: 165px 0 100px 0;
    @media(max-width:${wrapper}px){
      padding: 165px 20px 100px 20px;
    }
  }
`

export default GlobalStyle
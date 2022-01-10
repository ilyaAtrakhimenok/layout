import { createGlobalStyle } from 'styled-components'
import backgroundPNG from './asserts/Home.png'
import backgroundWebp from './asserts/Home.webp'
import { size, colors } from './theme'

const {back} = colors;
const { wrapper, table, middle } = size;

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
      background-image: -webkit-image-set(url(${backgroundPNG}) 1x, url(${backgroundWebp}) 1x);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      @media(max-width: ${table}px){
        background-image: none;
        background-color: ${back};
      }
  }

  body > div {
    max-width: ${wrapper}px;
    height: 100%;
    margin: 0 75px 0 155px;
    padding: 155px 0 100px 0;
    @media(max-width:${wrapper}px){
      padding: 155px 20px 100px 20px;
      margin: 0;
    }
    @media(max-width: ${middle}px){
      padding: 30px 0 30px 30px;
    }
    @media(max-width: ${table}px){
      padding: 20px 0 0 0;
    }
  }
`

export default GlobalStyle
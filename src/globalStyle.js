import { createGlobalStyle } from 'styled-components'
import background from './asserts/Home.png'
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
      background-image: url(${background});
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
    margin: 0 auto;
    padding: 165px 0 100px 0;
    @media(max-width:${wrapper}px){
      padding: 165px 20px 100px 20px;
    }
    @media(max-width: ${middle}px){
      padding: 30px 0 30px 30px;
    }
    @media(max-width: ${table}px){
      padding: 20px 0px 120px 0px;
    }
  }
`

export default GlobalStyle
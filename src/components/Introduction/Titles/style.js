import styled from 'styled-components';




import { font } from "../../../mixins";
import { colors, fontSizes, lineSizes } from "../../../theme";

import { size } from '../../../theme';

const {middle,mobile, smallMobile} = size;
const { blue, gray } = colors;

const fontSizeTitle = fontSizes['superMax'];
const fontSizeOverTitle = fontSizes['min'];
const fontSizeUnderTitle = fontSizes['medium'];
const lineHeightTitle = lineSizes['max'];
const lineHeightOverTitle = lineSizes['default'];
const lineHeightUnderTitle = lineSizes['medium'];

const fontSizeTitleMiddle = fontSizes['max']

const OverTitle = styled.h3`
    margin-bottom: 20px;
    color: ${blue};
    ${font('Roboto', 'bold', fontSizeOverTitle, lineHeightOverTitle)}  
`

const Title = styled.h1`
    margin-bottom: 30px;
    color: ${blue};
    ${font('Roboto', 'bold', fontSizeTitle, lineHeightTitle)}  
    @media(max-width: ${middle}px){
        ${font('Roboto', 'bold', fontSizeTitleMiddle, lineHeightTitle)}  
    }
    @media(max-width: ${mobile}px){
        ${font('Roboto', 'bold', 30, 40)}  
    }
    `

const UnderTitle = styled.h3`
    margin-bottom: 50px;
    color: ${blue};
    ${font('Roboto', 'light', fontSizeUnderTitle, lineHeightUnderTitle)}  
`

export {OverTitle, Title, UnderTitle}
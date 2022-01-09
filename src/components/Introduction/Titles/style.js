import styled from 'styled-components';

import { font } from "@/mixins";
import { colors, fontSizes, lineSizes, size } from "@/theme";

const {middle,mobile} = size;
const { blue } = colors;

const fontSizeTitle = fontSizes['superMax'];
const lineHeightTitle = lineSizes['max'];

const fontSizeTitleMiddle = fontSizes['max'];

const fontSizeTitleMobile = 30;
const lineHeightTitleMobile = 40;

const fontSizeOverTitle = fontSizes['min'];
const lineHeightOverTitle = lineSizes['default'];

const fontSizeUnderTitle = fontSizes['medium'];
const lineHeightUnderTitle = lineSizes['medium'];

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
        ${font('Roboto', 'bold', fontSizeTitleMobile, lineHeightTitleMobile)}  
    }
    `

const UnderTitle = styled.h3`
    margin-bottom: 50px;
    color: ${blue};
    ${font('Roboto', 'light', fontSizeUnderTitle, lineHeightUnderTitle)}  
`

export {OverTitle, Title, UnderTitle}
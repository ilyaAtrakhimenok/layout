import styled from 'styled-components';

import { font } from "@/mixins";
import { colors, fontSizes, lineSizes, size } from "@/theme";

const {middle,mobile, table} = size;
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
    @media(max-width: ${table}px){
        margin-bottom: 30px;
    }
`

const Title = styled.h1`
    margin-bottom: 30px;
    color: ${blue};
    wrap: no-wrap;
    ${font('Roboto', 'bold', fontSizeTitle, lineHeightTitle)}  
    @media(max-width: ${mobile}px){
        ${font('Roboto', 'bold', fontSizeTitleMobile, lineHeightTitleMobile)}  
    }
    `

const UnderTitle = styled.h3`
    margin-bottom: 50px;
    padding-right:20px;
    color: ${blue};
    ${font('Roboto', 'light', fontSizeUnderTitle, lineHeightUnderTitle)}
    @media(max-width: ${table}px){
        padding-right:10px;
    }
`

export {OverTitle, Title, UnderTitle}
import styled from "styled-components";

import { colors, fontSizes, lineSizes } from "@/theme";
import { font } from "@/mixins";
import { size } from '@/theme';

const { black } = colors;
const { middle } = size;

const fontSizeNumber = fontSizes['max'];
const lineHeightNumber = lineSizes['max'];

const fontSizeInfo = fontSizes['default'];
const lineHeightInfo = lineSizes['default']

const fontSizeNumberMiddle = fontSizes['xl']
const fontSizeInfoMiddle = fontSizes['min'];

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    max-width: 140px;
    @media(max-width: ${middle}px){
        max-width: 120px;
    }

`
const StatNumber = styled.div`
    margin-bottom: 7px;
    color: ${props => props.color};
    ${font('Roboto', 'bold', fontSizeNumber, lineHeightNumber)}
    @media(max-width: ${middle}px){
        margin-bottom: 5px;
        ${font('Roboto', 'bold', fontSizeNumberMiddle, lineHeightNumber)} 
    }
`
const StatInfo = styled.div`
    color: ${black};
    ${font('Roboto', 'normal', fontSizeInfo, lineHeightInfo)}
    @media(max-width: ${middle}px){
        ${font('Roboto', 'bold', fontSizeInfoMiddle, lineHeightInfo)} 
    }
`

export {StatContainer, StatInfo, StatNumber}
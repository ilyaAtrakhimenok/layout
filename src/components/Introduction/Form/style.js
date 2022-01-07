import styled from 'styled-components'
import {RegButton} from '../../Header/Authorization/style'
import { MAIL_SVG } from '../../../constants/store';
import { fontSizes, lineSizes, size } from "../../../theme";
import { font } from "../../../mixins";
const { mobile, smallMobile } = size;

const fontSize = fontSizes['default'];
const lineHeight = lineSizes['min'];

const FormContainer = styled.form`
    position: relative;
    width:515px;
    height: 70px;
    margin-bottom: 120px;
    @media(max-width:${mobile}px){
        width:100%;
    }
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 65px;
    border: none;
    border-radius: 40px;
    background-image: ${MAIL_SVG};
    background-size: 24px;
    background-position: 24px 23px;
    background-repeat: no-repeat;
    ${font('Roboto', 'normal', fontSize, lineHeight)}
    @media(max-width:${mobile}px){
        padding-left: 45px;
        background-size: 24px;
        background-position: 12px 23px;
        ${font('Roboto', 'normal', 12, 20)}
    }
`

const Button = styled(RegButton)`
    position: absolute;
    top: 10px;
    right:10px;
    width: 180px;
    height: 50px;
    @media(max-width:${mobile}px){
        top: 20px;
        right:10px;
        width: 120px;
        height: 30px;
        ${font('Roboto', 'normal', 15, 20)}
    }
`

export {FormContainer, Input, Button}
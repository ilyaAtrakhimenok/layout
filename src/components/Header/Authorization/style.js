import styled from "styled-components";

import { font } from "../../../mixins";
import { colors, fontSizes, lineSizes } from "../../../theme";

const {blue, gray, white}  = colors;
const fontSize = fontSizes[1];
const lineHeight = lineSizes[0];

const AuthorizationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
`

const Button = styled.button`
    border: none;
    oultine: none;
    background: none;
    box-shadow: none;
    ${font('Roboto', 'bold', fontSize, lineHeight)}  
    &:hover{
        cursor: pointer;
    }
`

const RegButton = styled(Button)`
    width:145px;
    height: 50px;
    border-radius:40px;
    background-color: ${blue};
    color: ${white};
    &:hover{
        background-color:${gray};
    } 
    
`
const LogInButton = styled(Button)`
    color: ${gray};
    &:hover{
        color: ${blue};
    }
`

export {AuthorizationContainer, RegButton, LogInButton}
import styled from "styled-components";
import { font } from "../../../mixins";
import { colors, fontSizes, lineSizes } from "../../../theme";

const {blue, gray} = colors;

const fontSize = fontSizes[1];
const lineHeight = lineSizes[0];

const circleSize = 7;

const Nav = styled.nav`
    width:440px;
`
const NavContainer = styled.ul`
    display: flex;
    justify-content: space-between;
`
const NavItem = styled.li`
    position: relative; 
    &: after{
        display: none;
        content: '';
        position: absolute;
        right: calc(50% - ${circleSize / 1.5}px);
        bottom: -${circleSize * 2}px;
        width: ${circleSize}px;
        height: ${circleSize}px;
        border-radius: ${circleSize / 2}px;
        background-color: ${blue}; 
    }
    &:hover{
        &:after{
            display: block;
        }
    }
`
const Link = styled.a`
    color: ${gray};
    &:hover{
        cursor: pointer;
        color: ${blue};
    } 
    ${font('Roboto', 'bold', fontSize, lineHeight)}
`

export {Nav, NavContainer, NavItem, Link}
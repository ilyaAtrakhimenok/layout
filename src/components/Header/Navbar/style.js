import styled from "styled-components";
import { font } from "@/mixins";
import { colors, fontSizes, lineSizes, size } from "@/theme";

const {middle} = size; 
const {blue, gray} = colors;

const fontSize = fontSizes['default'];
const lineHeight = lineSizes['min'];
const circleSize = 7;

const Nav = styled.nav`
    display: ${props => props.theme.visibility ? 'block' : 'none'}; 
    width:440px;
    @media(max-width: ${middle}px){
        width: 100%;
        height: auto;
    }

`
const NavContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    @media(max-width: ${middle}px){
        flex-direction: column;
        align-items:center;
        gap: 20px;
    }
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
    @media(max-width: ${middle}px){
        width: fit-content;
        &: after{
            bottom:${circleSize}px;
            left: calc(100% + ${circleSize * 1.5}px);
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
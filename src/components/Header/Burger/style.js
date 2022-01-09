import styled from "styled-components"

import { size } from '@/theme';

const { middle } = size;
const menuSize = 32;

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    width: ${menuSize}px;
    height: ${menuSize}px;
    div+div{
        margin-top: 5px;
    }
    &:hover{
        cursor: pointer;
    }
    @media(max-width:${middle}px){
        display: block;
    }
`

export {Container}
import styled from "styled-components";
import { WIND_SVG } from "../../../constants/store";
import { size } from '../../../theme';

const {table, middle} = size; 

const logoSize = 24;

const LogoContainer = styled.a`
    justify-self: start;
    position: relative;
    padding-left:35px;
    &:hover{
        cursor: pointer;
    }
    &:after{
        width:${logoSize}px;
        height:${logoSize}px;
        content:${WIND_SVG};
        position: absolute;
        left: 0;
        top: -4px;
    }
    @media(max-width: ${middle}px){
        align-self: start;
    }
`

export {LogoContainer}
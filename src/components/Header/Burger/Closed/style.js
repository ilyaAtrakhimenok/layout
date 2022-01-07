import styled from "styled-components"
import { Stick } from "../Opened/style"

const StickCloseLeft = styled(Stick)`
    position: absolute;
    top:10px;
    left: 0;
    transform: rotate(45deg);
`
const StickCloseRight = styled(Stick)`
    position: absolute;
    top:5px;
    left: 0;
    transform: rotate(-45deg);
`
export  {StickCloseLeft, StickCloseRight}


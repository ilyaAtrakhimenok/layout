import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import {Container} from './style'
import Closed from "./Closed"
import Opened from './Opened'

export default function Burger() {
    const { handleClickMenu, visibility } = useContext(ThemeContext);
    return (
        <Container onClick={handleClickMenu}>
            {visibility ? <Closed/> : <Opened />}
        </Container>

    )
}
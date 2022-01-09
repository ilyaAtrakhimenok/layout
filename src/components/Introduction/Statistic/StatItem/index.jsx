import React from "react";

import {StatContainer, StatNumber, StatInfo} from './style'

export default function Stat({ color, number, children }) {
    return (
        <StatContainer>
            <StatNumber color={color}>{number}</StatNumber>
            <StatInfo>{children}</StatInfo>
        </StatContainer>
    )
}
import React from "react";
import {Container, StatContainer, StatNumber, StatInfo} from './style'

import { colors } from "../../../theme";

const { black, blue } = colors;


function Stat({ color, number, children }) {
    return (
        <StatContainer>
            <StatNumber color={color}>{number}</StatNumber>
            <StatInfo>{children}</StatInfo>
        </StatContainer>
    )
}


export default function Statisctic() {
    return (
        <Container>
            <Stat color={black} number={240}>
                Qualified Doctors &#38;
                Medical Specialists
            </Stat>
            <Stat color={blue} number={1.456}>
                Medical Tests Done
                For Our Patients
            </Stat>
            <Stat color={black} number={'1M+'}>
                Years of Experience
                The Medical Field
            </Stat>
        </Container>
    )
}
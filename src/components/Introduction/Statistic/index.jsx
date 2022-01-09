import React from "react";

import { colors } from "@/theme";

import {Container} from './style'
import Stat from './StatItem'

const { black, blue } = colors;

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
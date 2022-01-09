import React from "react";

import {OverTitle, Title, UnderTitle} from './style'

export default function Titles() {
    return (
        <React.Fragment>
            <OverTitle>Booking of doctor's appointment</OverTitle>
            <Title>
                Don't Miss Our
                Exclusive Patient
                Special
            </Title>
            <UnderTitle>
                We want to make sure that everyone has access to natural
                and effective care. With our special, you'll receive a
                consultation and a digital posture assesment.
            </UnderTitle>
        </React.Fragment>
    )
}
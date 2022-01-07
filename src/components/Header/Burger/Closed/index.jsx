import React from "react"
import {StickCloseLeft, StickCloseRight} from './style'

export default function ClosedMenu(){
    return (
        <React.Fragment>
            <StickCloseLeft />
            <StickCloseRight />
        </React.Fragment>
    )
}
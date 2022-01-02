import React from "react";
import Logo from "./Logo"
import Navbar from './Navbar'
import Authorization from "./Authorization";
import Notification from "./Notification";
import { HeaderContainer } from "./style";


export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Navbar />
            <Authorization />
            <Notification />
        </HeaderContainer>
    )

}

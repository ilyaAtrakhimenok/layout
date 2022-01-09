import React from "react";

import ThemeContextProvider from "@/context/themeContext";

import Logo from "./Logo"
import Navbar from './Navbar'
import Authorization from "./Authorization";
import Notification from "./Notification";
import { HeaderContainer } from "./style";
import Burger from "./Burger";

export default function Header() {
    return (
        <HeaderContainer>
            < ThemeContextProvider>
                <Logo />
                <Burger />
                <Navbar />
                <Authorization />
                <Notification />
            </ ThemeContextProvider>
        </HeaderContainer>
    )

}

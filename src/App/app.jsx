import React from "react";
import GlobalStyle from "../globalStyle";
import Header from "../components/Header";
import ThemeContextProvider from "../context/themeContext";
import Home from '../pages/Home'

export default function App() {
    return (
        <ThemeContextProvider>
            <GlobalStyle />
            <Header />
            <Home />
        </ThemeContextProvider>
    )
}






import React from "react";
import { AuthorizationContainer, RegButton, LogInButton } from './style';

export default function Authorization() {
    return (
        <AuthorizationContainer>
            <LogInButton>Log In</LogInButton>
            <RegButton>Register</RegButton>
        </AuthorizationContainer>
    )

}
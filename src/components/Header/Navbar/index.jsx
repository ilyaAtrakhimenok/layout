import React from "react";
import { Nav, NavContainer, NavItem, Link } from './style'

export default function NavDesctop() {
    return (
        <Nav>
            <NavContainer>
                <NavItem><Link>Home</Link></NavItem>
                <NavItem><Link>Services</Link></NavItem>
                <NavItem><Link>Clinic</Link></NavItem>
                <NavItem><Link>Doctors</Link></NavItem>
                <NavItem><Link>Contact</Link></NavItem>
            </NavContainer>
        </Nav>
    )
}
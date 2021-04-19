import React from 'react';
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements';

const NavigationBar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'> Travellers' Trollies</NavLink>
            <NavIcon> 
                <p>Login or register here</p>
                <Bars/>
            </NavIcon>
        </Nav> 
        </>
    );
};

export default NavigationBar;


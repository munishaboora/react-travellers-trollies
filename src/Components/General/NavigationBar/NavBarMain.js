import React from 'react';
import { Nav, NavIcon, Bars } from './NavBarStyling';


const NavigationBar = () => {
    return (
      <>
        {/* <img src={require("../../images/Discount_logo.png")} alt="Company logo"/> */}
        <Nav>
          <CompanyLogo to="/" src="../images/Discount_logo.png" />
          <NavLink> Travellers' Trollies</NavLink>
          <NavIcon>
            <p>Login or register here</p>
            <Bars />
          </NavIcon>
        </Nav>
      </>
    );
};

export default NavigationBar;


import React from 'react';
import { Nav, NavIcon, Bars, NavLink } from './NavBarStyling';


const NavigationBar = ({toggle}) => {
    return (
      <>
 
        <Nav>

          <NavLink to='/'> Travellers' Trollies</NavLink>
          <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars />
          </NavIcon>
        </Nav>
      </>
    );
};

export default NavigationBar;

       {/* <img src={require("../../images/Discount_logo.png")} alt="Company logo"/> */}
       
                 {/* <CompanyLogo to="/" src="../images/Discount_logo.png" /> */}
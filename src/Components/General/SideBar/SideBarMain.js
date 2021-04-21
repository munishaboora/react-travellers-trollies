import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap,SideBarRoute } from './SideBarStyling';

const SideBarMain = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SideBarMenu>
               <SideBarLink to="/">Login</SideBarLink>
               <SideBarLink to="/">Register</SideBarLink>
           </SideBarMenu>
           <SideBtnWrap>
               <SideBarRoute to="/">....</SideBarRoute>
           </SideBtnWrap>
        </SideBarContainer>
    );
    };

export default SideBarMain;

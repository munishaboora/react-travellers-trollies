import React, {useState} from 'react';
import NavigationBar from '../NavigationBar/NavBarMain';
// import SideBar from '../../SideBarMain';
import {TravellersTrolliesContainer, TravellersTrolliesContent, TravellersTrolliesItems, TravellersTrolliesH1, TravellersTrolliesLoginBtn } from './AppLayoutStyles';

// , TravellersTrolliesLoginBtn 

const TravellersTrollies = () => {
    return (
        <TravellersTrolliesContainer>
            <NavigationBar/>
            {/* <SideBar/> */}
            <TravellersTrolliesContent>
                <TravellersTrolliesItems>
                    <TravellersTrolliesH1>Your friendly neighbourhood shopper!</TravellersTrolliesH1>
                    <TravellersTrolliesLoginBtn>Login</TravellersTrolliesLoginBtn>
                </TravellersTrolliesItems>
            </TravellersTrolliesContent>
        </TravellersTrolliesContainer>
    )
};
export default TravellersTrollies;

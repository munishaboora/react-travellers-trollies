import React from 'react'
import NavigationBar from '../NavigationBar/NavBarMain';
import SideBar from '../SideBar'
import {TravellersTrolliesContainer, TravellersTrolliesContent, TravellersTrolliesItems, TravellersTrolliesH1 } from './TravellersTrolliesStyles';

// , TravellersTrolliesLoginBtn 

const TravellersTrollies = () => {
    return (
        <TravellersTrolliesContainer>
            <NavigationBar/>
            <SideBar/>
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

import React, {useState} from 'react';
import NavigationBar from '../NavigationBar/NavBarMain';
import SideBar from '../SideBar/SideBarMain';
import {TravellersTrolliesContainer, TravellersTrolliesContent, TravellersTrolliesItems, TravellersTrolliesH1, TravellersTrolliesLoginBtn } from './AppLayoutStyles';

// , TravellersTrolliesLoginBtn 

const TravellersTrollies = () => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {
        SetIsOpen(!isOpen)
    }
    return (
        <TravellersTrolliesContainer>
            <NavigationBar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle} />
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

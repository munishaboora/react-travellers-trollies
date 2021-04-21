import React, {useState} from 'react';
import {TravellersTrolliesContainer, TravellersTrolliesContent, TravellersTrolliesItems, TravellersTrolliesH1, TravellersTrolliesLoginBtn } from './AppLayoutStyles';

// , TravellersTrolliesLoginBtn 

const TravellersTrollies = () => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {
        SetIsOpen(!isOpen)
    }
    return (
        <TravellersTrolliesContainer>
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

import React, {useState} from 'react';
import Carousel from './Carousel'


const TravellersTrollies = () => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {
        SetIsOpen(!isOpen)
    }
    return (

        <Carousel/>
 

    )
};
export default TravellersTrollies;

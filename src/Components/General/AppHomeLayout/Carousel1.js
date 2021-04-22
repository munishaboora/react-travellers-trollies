import React, {useState} from 'react';
import Carousel from './Carousel1Styling'

const imagesTopCarousel = [
    {
        //   src:
        src: `https://static.vecteezy.com/system/resources/thumbnails/002/278/743/original/flash-sale-neon-sign-for-promotion-with-floor-reflection-4k-free-video.jpg`,
    },
    {
        src: `https://q3p9g6n2.rocketcdn.me/wp-content/ml-loads/2016/08/grocery-groceries-commerce-online-ss-1920.jpg`,
    },
    {
        src: `https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/80628/s960_Groceries.jpg`,
    },
    {
        src:
            'https://www.popsci.com/app/uploads/2020/11/18/XDRYXGDBTNBULIWR72SJZKOEB4.jpg?width=1440',
    },
];


const TravellersTrollies = () => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {
        SetIsOpen(!isOpen)
    }
    return (
        <div>
            <Carousel images={imagesTopCarousel}/>           
        </div>
    )
};
export default TravellersTrollies;

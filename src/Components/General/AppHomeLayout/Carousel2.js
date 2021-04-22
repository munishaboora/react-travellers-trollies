import React, {useState} from 'react';
import Carousel from './Carousel1Styling';

const imagesBottomCarousel = [
    {
        src: `https://creativereview.imgix.net/content/uploads/2016/05/North_Coop_000_Logo-CRsite.jpg?auto=compress,format&q=60&w=1200&h=772`,
    },
    {
        src: `https://lukecarthy.com/wp-content/uploads/2019/10/sainsburys-logo.jpeg`,
    },
    {
        src: `https://i.pinimg.com/originals/4c/0f/86/4c0f86bf61aefba6c2f72b9037df5758.jpg`,
    },
    {
        src:
            'https://preview.redd.it/k2w1cisqotx51.png?width=1757&format=png&auto=webp&s=19b2a77dd2d0254c9cfb89e8b207d5a4bc30988c',
    },
    {
        src:
            'https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2017/03/13124707/ALDI-New-Logo.jpg',
    },
    {
        src:
            'https://farehamshopping.com/wp-content/uploads/2020/03/Holland-Barrett.png',
    },
    {
        src:
            'https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/AsdaResized-20150223115224441.jpg',
    },
    {
        src:
            'https://1000logos.net/wp-content/uploads/2017/09/symbol-Waitrose.jpg',
    },
    {
        src:
            'https://logos-download.com/wp-content/uploads/2016/05/Iceland_logo_wordmark.png',
    },
    {
        src:
            'https://www.corerfid.com/wp-content/uploads/2017/06/ocado-logo-news-item.png',
    },
    {
        src:
            'https://1000logos.net/wp-content/uploads/2018/09/Morrisons-Logo.jpg',
    },
];

const Carousel2 = () => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggle = () => {
        SetIsOpen(!isOpen)
    }
    return (
        <div>
            <Carousel2  images={imagesBottomCarousel}/>
        </div>
    )
};
export default Carousel2;
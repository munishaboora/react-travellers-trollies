import React, {useState} from 'react';
import InfiniteCarousel from './Carousel1Styling'

const imagesBottomCarousel = [
   
     { 
         src:`https://creativereview.imgix.net/content/uploads/2016/05/North_Coop_000_Logo-CRsite.jpg?auto=compress,format&q=60&w=1200&h=772`
        },
     {
         src:`https://hammersmithbid.co.uk/wp-content/uploads/2020/06/sainsburys_logo_760_v1.png`
        },
     {
         src:`https://cdn.mos.cms.futurecdn.net/KjL62wBFr8zZwaaPbdMZrL.png`
        },
     {
         src:`https://preview.redd.it/k2w1cisqotx51.png?width=1757&format=png&auto=webp&s=19b2a77dd2d0254c9cfb89e8b207d5a4bc30988c`
        },
     {
         src:`https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2017/03/13124707/ALDI-New-Logo.jpg`
        },
     {
         src:`https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/AsdaResized-20150223115224441.jpg`
        },
     {
         src:`https://www.greyfriarsringwood.org.uk/wp-content/uploads/2019/05/WAITROSE400X600.png`
        },
   
    {
        src:`https://1000logos.net/wp-content/uploads/2018/09/Morrisons-Logo.jpg`
        },
   ];
  
   const CarouselBottom = () => {

    return (
        <div>
            <InfiniteCarousel images={imagesBottomCarousel}/>           
        </div>
    )
};
export default CarouselBottom;



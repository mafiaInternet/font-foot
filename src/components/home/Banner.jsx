import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div className='carousel'>
            <Carousel showArrows={false} showIndicators={false} showThumbs={false} swipeable={true} emulateTouch={true} autoPlay={true} transitionTime={500}>
                    <img className='cursor-pointer' src='https://www.cqmart.vn/images/thumbs/0002593.jpeg'></img>
                    <img className='cursor-pointer' src='https://www.cqmart.vn/images/thumbs/0005773.jpeg'></img>
                    <img className='cursor-pointer' src='https://www.cqmart.vn/images/thumbs/0008819.jpeg'></img>
                    <img className='cursor-pointer' src='https://www.cqmart.vn/images/thumbs/0009071_khuyen-mai-ruou-vang.jpeg'></img>
                    <img className='cursor-pointer' src='https://www.cqmart.vn/images/thumbs/0004842.jpeg'></img>
            </Carousel>
        </div>
    );
}

export default Banner;


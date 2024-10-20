import React from 'react';

const Card = ({product}) => {
    return (
        <div className='product--card' key={product.id}>
        <div className='product--card--img relative group'>
            <img className='w-full top-0 left-0' src="https://www.cqmart.vn/images/thumbs/0009108_tao-envy-my-size-khay-5-trai-900g_256.png"></img>
            <span className='text-base absolute top-2 right-2 bg-red-600 text-white'>{product.discountedPersent}</span>
            <div className='absolute bottom-0 left-0 translate-y-full group-hover:-translate-y-full'>icon</div>
        </div>
            <div className='product--card--info'>
                <p>{product.title}</p>
                <p className='flex justify-around'>
                    <span>{product.price}</span>
                    <span>{product.discountedPrice}</span>  
                </p>
            </div>
        </div>
    );
}

export default Card;

import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
    return (
        <div className='cart--summary'>
            <div className='p-3 bg-gray-100'>
                <h3 className='font-bold text-base mb-3'>Mã giảm giá</h3>
                <div className='flex text-base mb-3 border-1 rounded-2 border-solid'>
                    <input className='w-full text-base text-sm pl-2 focus:outline-none' type='text'></input>
                    <button className='bg-black  text-base text-white text-nowrap px-3 py-1'>Áp dụng</button>
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2'>
                        <p className='text-base mb-3'>Tạm tính:</p>
                        <p className='text-base mb-3'>Phí giao hàng:</p>
                        <p className='text-base mb-3'>Giảm giá:</p>
                        <p className='text-base mb-3'>Tổng tiền:</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-base text-left mb-3'>743.600 ₫</p>
                        <p className='text-base text-left mb-3'>Liên hệ</p>
                        <p className='text-base text-left mb-3'>-10.000đ</p>
                        <p className='text-base text-left mb-3'>743.600 ₫</p>
                    </div>
                </div>
                <hr></hr>
                <div>
                <Link to="/payment">

                    <button 
                    className='w-full mt-3 mb-2 bg-green-600 text-white text-base rounded-2 py-1 hover:bg-green-900 hover:text-green-900'
                     >
                        Đặt hàng
                     </button>
                </Link>
                    <button className='w-full rounded-2 py-1 border-1 border-green-600 text-green-600 text-base hover:bg-green-900 hover:text-white'>Tiếp tục mua sắm</button>
                </div>
            </div>
        </div>
    );
}

export default Summary;

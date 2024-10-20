import React from 'react';
import { NavLink, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Information from './components/Infomation';

import Order from './components/Order';
import Address from './components/Address/Address';
const Account = () => {
    return (
        <div className='account mt-10 bg-gray-200'>
            <div className='container'>
                <div className='flex'>
                    <nav className='w-1/4'>
                        <ul>
                            <li>
                                <NavLink to="/account">
                                    Tài khoản
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/account/address">
                                    Địa chỉ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/account/order">
                                    Đơn hàng
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex-grow bg-white'>

                    <Routes>
                        <Route path='/' element={<Information></Information>}></Route>
                        <Route path='/address' element={<Address></Address>}></Route>
                        <Route path='/order' element={<Order></Order>}></Route>
                    </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;

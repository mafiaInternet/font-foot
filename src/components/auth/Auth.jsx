import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const Auth = () => {
    const location = useLocation()

    return (
        <div className='auth py-10 flex justify-center items-center'>
        <div className='border-solid border-1 rounded-md px-10'>

        <div className='flex justify-around my-5'>
            <Link  to="/login">ĐĂNG NHẬP</Link>
           
            <Link to="/register">ĐĂNG KÝ</Link>
        </div>
        <hr></hr>
        {location.pathname === '/login' ? <Login></Login> : (location.pathname === '/register' ? <Register></Register> : <div>không tìm thấy trang</div>)}
            
        </div>
        </div>
    );
}

export default Auth;

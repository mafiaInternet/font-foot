import React from 'react';

const Register = () => {
    return (
        <div className='register py-5'>
           <form method='POST'>
            <div className='form-group'>
                <label className='text-base' htmlFor='name'>Tên:</label>
                 <input className='w-full border-2 rounded-md mt-1 mb-3 py-1 px-3 text-base focus:outline-none focus:border-green-600' type='text' placeholder='Tên' required></input>
            </div>
            <div className='form-group'>
                <label className='text-base' htmlFor='phone'>Số điện thoại:</label>
                 <input className='w-full border-2 rounded-md mt-1 mb-3 py-1 px-3 text-base focus:outline-none focus:border-green-600' type='text' placeholder='Số điện thoại' required></input>
            </div>
            <div className='form-group'>
                <label className='text-base' htmlFor='email'>Email:</label>
                 <input className='w-full border-2 rounded-md mt-1 mb-3 py-1 px-3 text-base focus:outline-none focus:border-green-600' type='text' placeholder='Email' required></input>
            </div>
            <div className='form-group'>
                <label className='text-base' htmlFor='password'>Mật khẩu:</label>
                 <input className='w-full border-2 rounded-md mt-1 mb-3 py-1 px-3 text-base focus:outline-none focus:border-green-600' type='text' placeholder='Mật khẩu' required></input>
            </div>
            <div className='form-group'>
                <label className='text-base' htmlFor='passwordConfirm'>Nhập lại mật khẩu:</label>
                 <input className='w-full border-2 rounded-md mt-1 mb-3 py-1 px-3 text-base focus:outline-none focus:border-green-600' type='text' placeholder='Nhập lại mật khẩu' required></input>
            </div>
            <div className='form-group text-center'>
                <button className='bg-green-600 text-white p-2 rounded-md'>Đăng ký</button>
            </div>
           </form>
        </div>
    );
}

export default Register;

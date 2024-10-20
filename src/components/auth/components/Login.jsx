import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../state/Auth/Action';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const submit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const request = {
            email: data.get('email'),
            password: data.get('password')
        }
       dispatch(login(request))
        navigate("/")
    }
    return (
        <div className='login py-5'>
            <form method='POST' onSubmit={submit}>
                <div className='form-group'>
                    <label className='text-base' htmlFor='email'>Email:</label>
                    <input className='w-full border-2 rounded-md  mt-1 mb-3 py-1 px-3 text-base  focus:outline-none focus:border-green-600' id='email' name='email' type='text' placeholder='Email' required></input>
                </div>
                <div className='form-group'>
                    <label className='text-base' htmlFor='password'>Password:</label>
                    <input className='w-full border-2 rounded-md mt-1 mb-3 py-1 px-3 text-base focus:outline-none focus:border-green-600' id='password' name='password' type='text' placeholder='Password' required></input>
                </div>
                <div className='form-group text-center'>
                    <button type='submit' className='btn bg-green-600  text-white text-base p-2 rounded-md'>Đăng nhập</button>
                </div>
            </form>
        </div>
    );
}

export default Login;

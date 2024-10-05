import React from 'react'
import auth from '../assets/auth.jpeg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleButton from '../components/buttons/GoogleButton'
import { Checkbox } from '@mui/material';
const Login = () => {

    return (
        <div className='flex w-screen h-screen items-center'>
            <div className='w-2/5 h-full'>
                <img src={auth} alt="" className='h-full w-full' />
            </div>
            <div className='flex justify-center items-center w-3/5'>
                <div className='flex flex-col 2xl:gap-5 gap-5 items-end'>
                    <p className='font-normal text-xs'>Don't have an account? <span className='2xl:text-xl text-sm font-normal border px-4 pt-1 pb-2 rounded-full border-black  cursor-pointer'> Sign Up</span></p>
                    <div className='flex flex-col justify-center items-center 2xl:gap-8 gap-3 border border-[#42275A] 2xl:p-10 py-6 px-10 rounded-3xl 2xl:w-full'>
                        <div className='flex flex-col justify-center items-center gap-1 w-full 2xl:max-w-[349px] max-w-[280px] text-center'>
                            <h3 className='2xl:text-3xl text-2xl font-medium'>Log In</h3>
                            <p className='font-normal 2xl:text-base text-xs text-[#666666] '>Hey there! welcome to echo. Login fast and enjoy using the site.</p>
                        </div>
                        <form action="" className='flex flex-col 2xl:gap-6 gap-2 w-full'>
                            <div className='flex flex-col font-normal 2xl:text-base text-sm text-[#666666] gap-1'>
                                <span>Email</span>
                                <input type="email" className='border border-[#666666] rounded-xl 2xl:p-3 p-2' />
                            </div>
                            <div className='flex flex-col font-normal 2xl:text-base text-sm text-[#666666] gap-1'>
                                <div className='flex justify-between  pr-4 cursor-pointer'>
                                    <span>Password</span>
                                    <span className='flex gap-2'>
                                        <VisibilityIcon />
                                        <span>show</span>
                                    </span>
                                </div>
                                <input type="password" className='border border-[#666666] rounded-xl 2xl:p-3 p-2' />
                            </div>
                            <button className='w-full bg-custom-gradient mt-3  text-white 2xl:text-xl text-base font-normal 2xl:h-16 h-10 border-none rounded-full'>Log In</button>
                        </form>
                        <div className="flex items-center gap-2 w-full">
                            <div className="h-px w-full bg-lightBlack"></div>
                            <span className="italic text-gray-500 text-sm font-semibold">
                                OR
                            </span>
                            <div className="h-px w-full bg-lightBlack"></div>
                        </div>
                        <GoogleButton text="Continue with Google"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
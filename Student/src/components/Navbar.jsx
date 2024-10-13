import React, { useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import profile from "/src/assets/upload_area.png"
import dropdown from "/src/assets/dropdown_icon.svg"
import { assets } from '../assets/assets';

export default function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token , setToken] = useState (true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <NavLink  to={'/'}><h2 className=' cursor-pointer'>Arabe</h2></NavLink>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to={'/'}>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={'/teacher'}>
                <li className='py-1'>Teachers</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to={'/about'}>
                <li className='py-1'>About us</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' /> 
            </NavLink>
            <NavLink to={'/contact'}>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ?
                 <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={profile} alt="" />
                    <img className='w-2.5 ' src={dropdown} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=> navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=> navigate('my-apponint')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                 </div>
                 :<button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-end px-5 py-6 '>
                    <img className='w-7' onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=> setShowMenu(false)} to={'/home'}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                    <NavLink  onClick={()=> setShowMenu(false)} to={'/teacher'}><p className='px-4 py-2 rounded inline-block'>Teacher</p></NavLink>
                    <NavLink  onClick={()=> setShowMenu(false)} to={'/abut'}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                    <NavLink  onClick={()=> setShowMenu(false)} to={'/contact'}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                </ul>
            </div>
        </div> 
    </div>
  )
}
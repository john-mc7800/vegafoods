import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import Navbar from './Navbar/Navbar';

export default function Header() {
  return (
    <>
      <div className="bg-customGreen w-full grid grid-cols-1 lg:grid-cols-3 text-white px-4 lg:px-0 pb-4 lg:pb-1 lg:space-y-1 space-y-0 py-0  ">
        <div className="flex flex-row items-center   text-[11px] tracking-wider leading-5 uppercase   lg:pt-0 lg:px-[120px]">
          <FaPhoneAlt size={9} className='text-white '/>
          <p className='ml-2'>+ 1235 2355 98</p>
        </div>
        <div className="flex flex-row items-cente text-[11px] tracking-wider uppercase  ">
          <SiMinutemailer size={14} className='text-white  mr-3'/>
          <p>youremail@email.com</p>
        </div>
        <div className="flex flex-row items-cente justify-start mr-2 lg:ml-2    text-[12px] tracking-wider leading-5 uppercase  ">
          <p>3-5 Business days delivery & Free Returns</p>
        </div>
      </div>
      <div className="z-10 fixed"></div>
        <Navbar/>
        {/* <HomePage/> */}
    </>
  )
}

'use client'
import React, { useState } from 'react'
import {FaWallet} from "react-icons/fa";
import Image from 'next/image';
import { RiMenu3Line } from 'react-icons/ri'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <nav className='flex justify-between md:px-4 lg:px-10 py-6 items-center px-4'>
        <h1 className='txt-base md:text-lg'>LegalChain</h1>
        <RiMenu3Line 
          className='text-2xl md:hidden'
          onClick={() => setShowNavbar((prev) => !prev)}
        />
        <ul className={`flex z-10 flex-col md:flex-row absolute md:static top-16 right-8 bg-gray-900 md:bg-transparent bg-opacity-90 rounded-md md:p-0 p-4 gap-8 md:gap-10 items-center ${showNavbar ? "block" : "md:flex hidden"}`}>
            <li>About us</li>
            <li>Contact us</li>
            <li> 
              <button className=' p-3 bg-amber-600 rounded-md'>
                <div className='flex items-center gap-3'>
                  <Image src={'/eth.svg'} alt='eth' width={15} height={10}/>
                  <h1>Connect wallet</h1>
                </div> 
              </button> 
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import {FaWallet} from "react-icons/fa";
import Image from 'next/image';
import { DM_Sans } from 'next/font/google'
const dmSans = DM_Sans({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <nav className={`${dmSans.className}  flex justify-between  md:px-10 py-4 md:p-6 items-center`}>
        <h1 className='text-lg  '>Legal E-Vault</h1>
        <ul className='flex gap-4 md:gap-10 text-sm md:text-base items-center'>
            <li>About us</li>
            <li>Contact us</li>
            <li> <button className=' bg-amber-600 p-3  rounded-md'><div className='flex items-center gap-3'>
                <Image src={'/eth.svg'} alt='eth' width={15} height={10}/>
                <h1>Connect wallet</h1>
                </div> </button> </li>
        </ul>
    </nav>
  )
}

export default Navbar

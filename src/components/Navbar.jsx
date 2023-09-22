import React from 'react'
import {FaWallet} from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 p-6 items-center'>
        <h1>LegalChain</h1>
        <ul className='flex gap-10 items-center'>
            <li>About us</li>
            <li>Contact us</li>
            <li> <button className='border p-2 rounded-md'><div className='flex items-center gap-3'>
                <Image src={'/eth.svg'} alt='eth' width={15} height={10}/>
                <h1>Connect wallet</h1>
                </div> </button> </li>
        </ul>
    </nav>
  )
}

export default Navbar

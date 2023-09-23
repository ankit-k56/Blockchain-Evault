import React from 'react'
import Image from 'next/image'
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })
const Hero = () => {
  return (
    <div className={`flex flex-col md:flex-row items-center h-[100vh] justify-between p-10 overflow-hidden relative ${outfit.className}`}>
        <div className='absolute -top-4 -left-10 w-52 h-52 bg-[#ffd11a] rounded-full animate-blob1 filter blur-2xl opacity-[37%] animation-delay-4' />
        <div className='absolute top-10 right-10 w-52 h-52 bg-[#33bbff] rounded-full animate-blob2 filter blur-2xl opacity-[24%] animation-delay-4' />
        <div className='absolute -bottom-8 left-10 w-52 h-52 bg-[#def9fa] rounded-full animate-blob3 filter blur-2xl opacity-[27%] animation-delay-2' />
        <section className='font-bold w-full sm:w-[45%] space-y-12 py-16'>
            <h1 className='text-5xl'>LegalChain Vault</h1>
            <h1 className='text-3xl'>Unlocking the Future of Legal Records <p className='text-xs md:text-base font-normal text-stone-500 py-2'>Join us on the journey to redefine legal record-keeping in the digital era – where security, transparency, and accessibility converge</p> </h1>
        </section>
        <Image src={'/locker.png'} alt='locker' width={500} height={500} className='w-[300px] md:w-[40vw]'/>
    </div>
  )
}

export default Hero
import React from 'react'
import Image from 'next/image'
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })
const Hero = () => {
  return (
    <div className={` flex sm:flex-row flex-col items-center justify-between relative md:static  md:p-10 ${outfit.className}`}>
        <div className='absolute -top-4 -left-10 h-24 w-24 md:w-52 md:h-52 bg-[#ffd11a] rounded-full animate-blob1 filter blur-2xl opacity-[37%] animation-delay-4' />
        <div className='absolute top-10 right-10 h-24 w-24 md:w-52 md:h-52 bg-[#33bbff] rounded-full animate-blob2 filter blur-2xl opacity-[24%] animation-delay-4' />
        <div className='absolute -bottom-8 left-10 h-24 w-24 md:w-52 md:h-52 bg-[#def9fa] rounded-full animate-blob3 filter blur-2xl opacity-[27%] animation-delay-2' />
        <section className='font-bold w-[80%] sm:w-[45%] space-y-5 md:space-y-12 py-5 md:py-16'>
            <h1 className='text-xl sm:text-3xl md:text-5xl'>Legal EVault</h1>
            <h1 className='text-base sm:text-xl md:text-3xl'>Blockchain based Legal Records E-Vault
            <p className='text-xs md:text-base font-normal text-stone-500 py-2'>Empowering Legal Records, One Block at a Time, with Our Cutting-Edge Blockchain Vault. Welcome to the Future of Trustworthy Data Management.</p></h1>
            
        </section>
      <Image src={'/locker.png'} alt='locker' className='opacity-[0.7] w-[60%] md:w-[43%] h-[80%]' width={500} height={500}/>
    </div>
  )
}

export default Hero

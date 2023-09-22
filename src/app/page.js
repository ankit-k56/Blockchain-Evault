import Image from 'next/image'
import Hero from '@/components/Hero'
import Form from '@/components/Form'
export default function Home() {
  return (
    <main className='max-w-[1300px] mx-auto'>
      <Hero/>
      <Form/>
    </main>
  )
}

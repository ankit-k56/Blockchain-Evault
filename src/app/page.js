import Hero from '@/components/Hero'
import Form from '@/components/Form'
import DownloadFile from '@/components/DownloadFile'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main>
      <Hero/>
      <Form/>
      <hr className='mt-20 mx-4'/>
      <DownloadFile />
      <Footer />
    </main>
  )
}

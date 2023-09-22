import React from 'react'

const Form = () => {
    const handleFileChange = (e)=>{
        console.log(e)
    }
  return (
    <form className='w-full flex flex-col items-center '>
      <h1 className='text-4xl font-bold py-3'>Upload FIR Image :</h1>
      <p className='text-sm text-stone-400'>file Types supported : JPG ,PNG  </p>
      <div className='flex space-y-4'>
            <input type="file" required id="file" accept=".jpg, .png, .gif, .svg, .mp4, .webm, .mp3, .wav, .ogg, .glb, .gltf" className="hidden"  />
            <label htmlFor="file" className="cursor-pointer bg-white hover:bg-gray-100 text-white font-medium py-[150px] px-[15vw] rounded-xl border-2  border-gray-400 sm:px-[13vw] ss:px-[15vw] xs:px-[20vw] xxs:px-[25vw]">
            </label>
        </div>

        <div className='flex flex-col w-[50%] text-center py-5 space-y-3'>
            <h1 className=' py-5 text-2xl'>Please share following details</h1>
            <input type="text"  placeholder='Name' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text"  placeholder='Description' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text"  placeholder='Case Number' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text"  placeholder='Client Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text"  placeholder='Lawyer Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
        </div>
        <button className='bg-blue-700 p-5 py-3 rounded-md'>Submit</button>
    </form>
  )
}

export default Form

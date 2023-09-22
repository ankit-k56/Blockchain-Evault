"use client"
import React, { useState } from 'react'
// import { Document, Page } from 'react-pdf';

const Form = () => {

    const [inpData ,setInpData] = useState({
        file:null,
        name:'',
        description:'',
        case_number:'',
        client:'',
        lawyer:''
    })
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };


    const handleFileChange = (e)=>{
        console.log(e)
    }
    const inpChangeHandler = (e)=>{
    
        setInpData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }))
        console.log(inpData)
        

    }
  return (
    <>
    <form className='w-full flex flex-col items-center px-4'>
      <h1 className='text-2xl md:text-4xl font-bold py-3'>Upload FIR Image :</h1>
      <p className='text-sm text-stone-400'>file Types supported : JPG ,PNG  </p>
      <div className='flex space-y-4 w-full justify-center'>
           <input type="file" name='file' onChange={inpChangeHandler} required id="file" accept=".pdf, .jpg, .png" className="hidden"  />
            {!inpData.file &&<label htmlFor="file" className="cursor-pointer bg-white w-[80vw] md:w-[30vw] hover:bg-gray-100 text-white font-medium py-[100px] md:py-[150px] px-[15vw] rounded-xl border-2  border-gray-400 sm:px-[13vw] ss:px-[15vw] xs:px-[20vw] xxs:px-[25vw]">
            </label>}
            {inpData.file && <p>File choosen: {inpData.file}</p>} 
        </div>
        <div className='flex flex-col md:w-[50%] text-center py-5 space-y-3 w-full'>
            <h1 className=' py-5 text-2xl'>Please share following details</h1>
            <input type="text" onChange={inpChangeHandler} name='name'  placeholder='Name' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='description' placeholder='Description' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='case_number' placeholder='Case Number' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='client' placeholder='Client Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='lawyer' placeholder='Lawyer Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
        </div>
        <button className='bg-blue-700 w-full font-semibold text-lg mt-6 p-5 md:w-1/2 py-3 rounded-md'>Submit</button>
    </form>

    {/* <form className='w-full py-8 flex flex-col items-center '>
      <h1 className='text-xl md:text-4xl font-bold py-3'>Upload FIR Image :</h1>
      <p className='text-xs md:text-sm text-stone-400'>file Types supported : Pdf , Jpg , Png </p>
      <div className='flex space-y-4'>
            <input type="file" name='file' onChange={inpChangeHandler} required id="file" accept=".pdf, .jpg, .png" className="hidden"  />
            {!inpData.file &&<label htmlFor="file" className="cursor-pointer bg-white w-[80vw] md:w-[30vw] hover:bg-gray-100 text-white font-medium py-[100px] md:py-[150px] px-[15vw] rounded-xl border-2  border-gray-400 sm:px-[13vw] ss:px-[15vw] xs:px-[20vw] xxs:px-[25vw]">
            </label>}
            {inpData.file && <p>File choosen: {inpData.file}</p>}
        </div>

        <div className='flex text-sm md:text-base flex-col w-[80%] md:w-[50%] text-center py-5 space-y-3'>
            <h1 className=' py-3 md:py-5 text-base md:text-2xl'>Please share following details</h1>
            <input type="text" onChange={inpChangeHandler} name='name'  placeholder='Name' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='description' placeholder='Description' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='case_number' placeholder='Case Number' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='client' placeholder='Client Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='lawyer' placeholder='Lawyer Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
        </div>
        <button className='bg-blue-700 p-5 py-3 rounded-md'>Submit</button>
    </form> */}
    </>
  )
}

export default Form

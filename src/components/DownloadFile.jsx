'use client'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const DownloadFile = () => {
    const [hashValue, setHashValue] = useState()
    console.log('hash', hashValue)
    const handleChange = (e) => {
        setHashValue(e.target.value);
    };
  return (
    <div className="bg-[#1c1c1c] items-center my-8 mx-4 md:mx-8 bg-opacity-40 flex rounded-2xl flex-col justify-center h-[80vh] md:px-8">
        <div className='w-11/12 md:w-7/12 lg:w-6/12 max-w-lg bg-white p-6 rounded-xl'>
            <h1 className="text-xl text-black font-semibold text-opacity-80">Download File</h1>
            <TextField id="standard-basic" 
                label="Enter Hash" 
                variant="standard" 
                className='w-full mt-8' 
                value={hashValue}
                onChange={handleChange}
            />
            <Button variant="outlined" className='w-full mt-8'>Download</Button>
        </div>
    </div>
  )
};

export default DownloadFile;

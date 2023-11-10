"use client";

const contractABI = require("../contract-abi.json");
const contractAddress = "0x02E4DbaADd4b501d59a706873D9704eAc906F82A";
import React, { useState } from "react";
// import { Document, Page } from 'react-pdf';
import Button from "@mui/material/Button";

import FormData from "form-data";
import { pinFileToIPFS } from "@/utils/pinata";
const alchemyKey =
  "https://eth-sepolia.g.alchemy.com/v2/H12honiYVLl8DCalJ2-j4kj0-mta2SwC";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const Form = () => {
  const [inpData, setInpData] = useState({
    number: "",
    year: "",
    // case_number:'',
    // client:'',
    // lawyer:''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("file", selectedFile);

    const tokenURI = await pinFileToIPFS(formData);
    //load smart contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .submitData(number, year, tokenURI)
        .encodeABI(), //make call to smart contract
    };

    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      console.log(txHash);
    } catch (error) {
      console.log(error);
    }
    // Reset the form after submission
    setSelectedFile(null);
    setNumber("");
    setYear("");
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const inpChangeHandler = (e) => {
    setInpData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(inpData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center px-4"
      >
        <h1 className="text-2xl md:text-4xl font-bold py-3">
          Upload Legal Document :
        </h1>
        <p className="text-sm text-stone-400">
          file Types supported : Pdf, JPG ,PNG{" "}
        </p>
        <div className="flex space-y-4 w-full justify-center">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            required
            id="file"
            accept=".pdf, .jpg, .png"
            className="hidden"
          />
          {!inpData.file && (
            <label
              htmlFor="file"
              className="cursor-pointer bg-white w-[80vw] md:w-[30vw] hover:bg-gray-100 text-white font-medium py-[100px] md:py-[150px] px-[15vw] rounded-xl border-2  border-gray-400 sm:px-[13vw] ss:px-[15vw] xs:px-[20vw] xxs:px-[25vw]"
            ></label>
          )}
          {inpData.file && <p>File choosen: {inpData.file}</p>}
        </div>
        <div className="flex flex-col md:w-[50%] text-center py-5 space-y-3 w-full">
          <h1 className=" py-5 text-2xl">Please share following details</h1>
          <input
            type="number"
            onChange={inpChangeHandler}
            name="number"
            placeholder="Case Number"
            className="bg-transparent border-b-2 p-3 border-b-stone-700"
          />
          <input
            type="number"
            onChange={inpChangeHandler}
            name="year"
            placeholder="Year"
            className="bg-transparent border-b-2 p-3 border-b-stone-700"
          />
          {/* <input type="text" onChange={inpChangeHandler} name='case_number' placeholder='Case Number' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='client' placeholder='Client Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/>
            <input type="text" onChange={inpChangeHandler} name='lawyer' placeholder='Lawyer Address' className='bg-transparent border-b-2 p-3 border-b-stone-700'/> */}
        </div>
        <button className="bg-blue-700 w-full font-semibold text-lg mt-6 p-5 md:w-1/2 py-3 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

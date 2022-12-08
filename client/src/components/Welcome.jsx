import React, { useContext } from 'react';
import { AiFillPlayCircle } from "react-icons/ai"; 
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();
        if(!addressTo || !amount || !keyword || !message ) return;
        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-center items-center flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Send Crypto across the world
                    </h1>
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row w-full justify-center items-center my-5 bg-[#2546ed] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">Connect Wallet</p>
                        </button>
                    )}
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                {currentAccount && (
                                    <p className="text-white font-light text-sm">
                                        {shortenAddress(currentAccount)}
                                    </p>
                                )}
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Send Now
                            </button>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Welcome;
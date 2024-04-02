import React from 'react'
import { AiFillCodeSandboxCircle } from "react-icons/ai";


function Proyects() {
  return (
   <div className='h-screen w-full bg-zinc-950 p-10 pt-10 md:flex md:gap-6'>
    <div className='h-1/ w-full p-3 bg-white rounded-[20px] bg-gradient-to-r from-zinc-900 to-zinc-800 mb-5 pb-10'>
        <div className='h-1/2 w-full rounded-2xl'>
            <img  className='w-full h-full rounded-2xl' src="https://images5.alphacoders.com/131/thumb-350-1315108.jpeg" alt="" />
        </div>
        <div className='w-full pt-5 pb-4 flex items-center justify-center'>
            <h1 className='font-Textos text-white font-bold text-2xl'>MUDAME</h1>
        </div>
        <div className='w-full h-10 flex items-center justify-center gap-6'>
            <div className='w-10 h-full items-center'>
            <img  className='w-full h-full rounded-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
            <div className='w-10 h-full items-center'>
            <img  className='w-full h-full rounded-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
            <div className='w-10 h-full items-center'>
            <img  className='w-full h-full rounded-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
            
        </div>
        <div className='h-5 w-full flex justify-center items-center'>
                <button className='w-full text-white mt-11 flex justify-center font-Textos font-bold'>
                <AiFillCodeSandboxCircle className='text-5xl hover:text-blue-400 justify-center text-blue-800 animate-spin animate-infinite animate-duration-[5000ms]' />

                </button>
            </div>
    </div>

    
    <div className='h-1/2 w-full p-3 bg-white rounded-[20px] bg-gradient-to-r from-neutral-800 to-zinc-950 mb-5 pb-10'>
        <div className='h-2/3 w-full rounded-2xl'>
            <img  className='w-full h-full rounded-2xl' src="https://images5.alphacoders.com/131/thumb-350-1315108.jpeg" alt="" />
        </div>
        <div className='w-full p-3 flex items-center justify-center'>
            <h1 className='font-Textos text-white font-bold text-xl'>MUDAME</h1>
        </div>
        <div className='w-full h-10 flex items-center justify-center gap-4'>
            <div className='w-10 h-full items-center'>
            <img  className='w-full h-full rounded-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
            <div className='w-10 h-full items-center'>
            <img  className='w-full h-full rounded-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
            <div className='w-10 h-full items-center'>
            <img  className='w-full h-full rounded-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
        </div>
        <div className='h-5'>
                <button className='w-full text-white p-6'>INGRESAR</button>
            </div>
    </div>
    
        
   </div>
  )
}

export default Proyects

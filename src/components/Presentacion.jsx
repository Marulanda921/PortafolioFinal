import React from 'react'
import Spline2 from './Spline2'




function Presentacion() {
  return (
    <div className='w-full h-screen bg-zinc-950 z-10 p-3 pt-10 md:flex items-center '>
        <div className=' w-full h-1/4 flex justify-center items-center p-5'>
            <img className='w-2/3' src="https://th.bing.com/th/id/R.353566206b0aaee9ec533fdc40e4cf15?rik=Gdfi%2fLdJ23tOPA&riu=http%3a%2f%2fwww.clubcomercial.es%2fwp-content%2fuploads%2f2015%2f05%2ffoto-redonda.png&ehk=1h%2fQPdGikr7hhG4v85Iq0d53rsoWf2vkCMd%2bRH%2bOm38%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
        <div className='w-full h-1/2 p-5 pt-5 text-center'>
          <div className='pb-5'><h1 className='text-4xl text-violet-900 text-center pb-5'>¡Hola! Soy Alejandro Marulanda Vargas, un apasionado Desarrollador de Software</h1></div>
          <div><h1 className='text-2xl text-gray-300/80 font-semibold text-justify'>Mi objetivo es crear experiencias digitales impactantes y funcionales que cautiven a los usuarios y ayuden a las marcas a destacarse en el mundo digital.</h1></div>
            
        </div>
        </div>
    
  )
}

export default Presentacion

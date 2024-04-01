import React from 'react'
import { MdHive } from "react-icons/md";
import Presentacion from './Presentacion';
import Spline from './Spline';
import Services from './Services';
import Proyects from './Proyects';
import Contact from './Contact';




function Navegacion() {
  //Logica del proyecto
  const pulsarMenu = ()=>{
    let menu = document.getElementById("menu")
    menu.classList.toggle("hidden")
  }

  return (
    <>
    <div className='h-screen w-full bg-black font-Monoplex scroll-smooth'>
    <header className=''>
      <nav className='w-full h-20 bg-zinc-950 shadow-2xl'>
        <div className='w-full h-full flex gap-4 justify-center items-center'>
          <img className='h-3/5 ' src="https://www.pngmart.com/files/22/Porsche-Carrera-GT-PNG-Isolated-Photo.png" alt="" srcset="" />
          <div className='h-full w-1/6 flex items-center justify-center lg:hidden hover:bg-black/10 rounded-2xl shadow-lg shadow-violet-900/40 '>
          <MdHive onClick={()=>{pulsarMenu()}} className='text-5xl text-violet-900 animate-spin animate-infinite animate-duration-[4000ms] animate-delay-[2000ms] animate-ease-in-out cursor-pointer hover:text-white transition-colors' />
          </div>
        </div>
        <div className='w-full h-screen bg-black/70 hidden justify-center  fixed backdrop-blur-sm items-center lg:hidden' id='menu'>
          <div className='w-full h-screen flex justify-center items-center transition-transform'>
          <div className='w-3/4 h-1/3 flex justify-center items-center shadow-2xl shadow-indigo-400 bg-gradient-to-r from-zinc-300/10 to-slate-50/5 rounded-lg'>
          <ul className='p-2 w-full text-center text-white'>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">About</a></li>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">Experience</a></li>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">Proyect</a></li>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">Contact</a></li>
          </ul>
          </div>
          </div>
        </div>
      </nav>
    </header>
    <div className='w-full h-screen'>
    <Spline></Spline>
    <Presentacion></Presentacion>
    <Services></Services>
    <Proyects></Proyects>
    <Contact></Contact>

    
  
    
    
    </div>
    </div>

    
    
    </>
  )
}

export default Navegacion
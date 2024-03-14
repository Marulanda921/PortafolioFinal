import React from 'react'
import { MdHive } from "react-icons/md";


function Navegacion() {
  return (
    <>
    <div className='h-screen w-full bg-gradient-to-r from-indigo-900 to-zinc-950'>
    <header className=''>
      <nav className='w-full h-20 bg-gradient-to-r from-indigo-800 to-zinc-500 shadow-xl shadow-indigo-950'>
        <div className='w-full h-full flex gap-4 justify-center items-center'>
          <img className='h-3/5 ' src="https://static.vecteezy.com/system/resources/thumbnails/013/758/832/small/abstract-letter-m-logo-illustration-in-trendy-and-minimal-style-png.png" alt="" srcset="" />
          <div className='h-full w-1/6 flex items-center justify-center lg:hidden hover:bg-black/10 rounded-2xl shadow-lg shadow-slate-50/35 '>
          <MdHive className='text-5xl text-zinc-900 animate-spin animate-infinite animate-duration-[4000ms] animate-delay-[2000ms] animate-ease-in-out cursor-pointer hover:text-white transition-colors' />
          </div>
        </div>
        <div className='w-full h-screen bg-black/70 flex justify-center fixed backdrop-blur-sm items-center lg:hidden'>
          <div className='w-3/4 h-1/3 flex justify-center items-center shadow-2xl shadow-indigo-400 bg-gradient-to-r from-zinc-300/10 to-slate-50/5 rounded-lg'>
          <ul className='p-2 w-full text-center text-white'>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">About</a></li>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">Experience</a></li>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">Proyect</a></li>
            <li className='p-5 text-lg shadow-sm rounded-md hover:shadow-lg hover:shadow-slate-300 transition-shadow'><a href="#">Contact</a></li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime labore nisi iste perspiciatis excepturi quidem earum neque culpa pariatur blanditiis voluptate molestias aliquid debitis temporibus possimus, qui, tenetur provident quibusdam autem recusandae dolorum. Reprehenderit omnis recusandae totam qui? Deleniti fuga iste adipisci unde, cupiditate dolorum libero pariatur. Adipisci porro molestiae, quam dolorem iusto cumque, dolores culpa eligendi molestias ipsam, natus eius veritatis nam eaque harum assumenda tempore tempora qui vel? Architecto, veniam deleniti consequatur quisquam quod quae in! Pariatur velit vel voluptatum sed recusandae nostrum, itaque facilis ducimus earum dolore ipsa saepe voluptatibus dignissimos aut. Modi nihil eligendi magnam accusamus quis? Suscipit tenetur reprehenderit facere in asperiores veritatis blanditiis quae reiciendis quia dignissimos necessitatibus excepturi cum sunt eum distinctio, ad dicta pariatur sapiente minima quam enim ullam cupiditate! Dolorem facilis et vitae repellat rerum aspernatur ex ea delectus alias nobis nihil quia, voluptates recusandae accusamus, culpa ratione corrupti, dolores consectetur expedita in ipsa praesentium. Modi rem tempora alias voluptatibus accusamus veniam sequi illum enim. Cupiditate eveniet asperiores veritatis maxime ab quae minus amet unde ad earum! Dolor dicta obcaecati hic, sapiente eveniet, vel tenetur suscipit voluptatem in error praesentium fugit provident iure porro eum unde illo nesciunt amet cupiditate.</div>
    <img src="" alt="" />
    </div>
    
    
    
    </>
  )
}

export default Navegacion
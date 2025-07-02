import {footerLogo, headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants/index'
import { close } from '../assets/icons'
import { useState } from 'react'

const Nav = () => {
  const [hamburgerr,setHamburgerr] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-11 w-full'>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
        <img src={headerLogo}
         alt="headerlogo"
         width={129}
         height={29}
          />
        </a>

        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <a 
                href={navlink.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-semibold'
                >
                  {navlink.label}
                </a>
              </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden hover:font-semibold'>
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className='hidden max-lg:block cursor-pointer'
        onClick={() => setHamburgerr(true)}>
          <img src={hamburger} alt="hamburger" 
          width={25}
          height={25}/>
        </div>
        {hamburgerr && (
  <div
    className="fixed inset-0 bg-black opacity-40 z-10"
    onClick={() => setHamburgerr(false)}
  />
)}

        <div className={`bg-gray-600 backdrop-blur-2xl fixed right-0 top-0 h-full z-15 rounded-l-xl transition-all duration-500 ease-in-out ${hamburgerr ? 'translate-x-0' : 'translate-x-full'} `
      } onClick={() => setHamburgerr(false)}>
          
          <div className='flex flex-1 justify-center items-center mt-10 px-18 gap-20 flex-col '>
            <img src={footerLogo} alt="" width={170} />
            
          </div>

          <div className='flex flex-1 absolute top-81 ml-6 cursor-pointer '>
            <img src={close} alt="" width={40} height={40}
            onClick={() => setHamburgerr(false)} />
          </div>
            <ul className='flex flex-col gap-8 mt-40 mb-20 text-center px-15' >
          {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <a 
                href={navlink.href}
                className='font-montserrat leading-normal text-xl text-white
                hover:text-black hover:font-semibold
                hover:border-b-2'
                >
                  {navlink.label}
                </a>
              </li>
          ))}
          <li className='text-center'>
            <a href="/" className='font-montserrat leading-normal text-xl text-white
                hover:text-black hover:font-semibold
                hover:border-b-2 flex gap-2 '>Sign in  <span>/</span>  Explore Now</a>
          </li> 
        </ul>
        </div>
      </nav>
    </header>
    
  )
}

export default Nav
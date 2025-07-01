import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants/index'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
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

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" 
          width={25}
          height={25}/>
        </div>
      </nav>
    </header>
    
  )
}

export default Nav
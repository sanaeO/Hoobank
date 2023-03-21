import React from 'react'
import { logo , close , menu} from '../assets'
import { navLinks } from '../constants/index'
import { useState } from 'react'

function Navbar() {

  // Toggle : ila clicka toggle kayoli true macklickacj lmenu false
  const [ toggle , setToggle ] = useState(false)

  return (
    <nav className='flex justify-between items-center'>
      <img src={logo} className='w-[150x] h-[32px]'/>

      <ul className="sm:flex hidden justify-between items-center">
   { 
    navLinks.map((link , index) => (
      // index :0 1 2 3 ... 
      <li className={`${index === navLinks.length-1 ? 'mr-0': 'mr-10' } text-base cursor-pointer`}  key={link.id} >
      {link.title}
      </li>
      
    ))
  }
      </ul>

      {/* Menu of mobile  */}
      <div className="sm:hidden cursor-pointer relative">

 <img src={`${ toggle ? close : menu} `} onClick={() => setToggle((prev) => !prev)} />
        
  <div className={`${ toggle ? 'flex' : 'hidden'} w-[160px] sidebar absolute right-[4%] top-[35px] px-4 py-4`} >
    {/* ul  */}
    <ul className="flex-column justify-between items-center">
   { 
    navLinks.map((link , index) => (
      // index :0 1 2 3 ... 
      <li className={`${index === navLinks.length-1 ? 'mb-0': 'mb-4' } text-base cursor-pointer`}  key={link.id} >
      {link.title}
      </li>
      
    ))
  }
      </ul>
  </div>
      </div>

    </nav>
  )
}

export default Navbar
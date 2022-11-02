import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
// import { links } from ''
import { HiOutlineMenu } from 'react-icons/hi';

// const NavLink = () => (
//   // 
// )

const SideBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    <div className="md:flex hidden flex-col w-[540px] py-10 px-4 bg-[#191624]">
        <a href="/"><img src={logo} alt="logo" className="w-full h-14 object-contain" /></a>
        {/* <NavLinks /> */}
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)}/>
        ) : (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)}/>
        )
      }
      </div>
      
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        {/* <NavLinks handleClick={() => setMobileMenuOpen(false)}/> */}
      </div>

     </>
  )
}

export default SideBar
import React from 'react'
import Logo from "../assets/Logo.svg"


const Navbar = ({ onSearchClick}) => {
 
  return (
    <div >
       <div className='flex justify-around items-center  shadow-custom-dark p-3 z-30 relative '> 
        <div className='w-56'><img src={Logo} alt="Logo" className='w-full h-auto max-w-md' /></div>
       <nav className='flex items-center gap-4'> <button onClick={onSearchClick}>SEARCH</button><a href="https://girmantech.com/" className='cursor-pointer'>WEBSITE</a><a href='https://www.linkedin.com/company/girmantech/' className='cursor-pointer'>LINKEDIN</a><button className='cursor-pointer' onClick={()=> window.location.href = "mailto:contact@girmantech.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with you."}>CONTACT</button></nav>
       </div>
    </div>
  )
}

export default Navbar
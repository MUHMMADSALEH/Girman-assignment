import React from 'react'
import Logo from "../assets/Logo.svg"
import Search from "../assets/Search.svg"

const NavbarWithSearch = ({filteredUser,setFilteredUser}) => {
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') { 
          const searchQuery = e.target.value;
          const filterUser=filteredUser.filter((user)=>user.first_name.toLowerCase() === searchQuery.toLowerCase())
          setFilteredUser(filterUser)
          }
        }
      

    return (
        <div >
            <div className='flex justify-around items-center  shadow-custom-dark p-3 z-30 relative '>
                <div className='w-56'><img src={Logo} alt="Logo" className='w-full h-auto max-w-md' /></div>
                <div>
                    <div className='w-[519px] relative p-3 rounded-lg shadow-custom-light bg-white border border-[#D7D7EA] '  >
                        <div className='w-4 absolute inset-y-0 left-2 flex items-center'><img src={Search} alt="Search" className='w-full h-auto max-w-md' /></div>
                        <div ><input

                            type="text"
                            placeholder="Search..."
                            className='w-full focus:outline-none pl-10 '
                            onKeyDown={handleKeyDown} 
                        /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavbarWithSearch
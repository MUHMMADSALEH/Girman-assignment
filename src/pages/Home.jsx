
import HeroLogo from "../assets/HeroLogo.svg"
import Search from "../assets/Search.svg"
import BgImage from "../assets/bgimage.jpg"
import React, { useRef, useState } from 'react';
import Navbar from "../compnenets/Navbar";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [input,setInput]=useState("")
  const navigate = useNavigate();  
  const [error,setError]=useState(null)
  const [errorMessage,setErrorMessage]=useState("")

  const searchInputRef = useRef(null);
  const scrollToSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInputRef.current.focus();
    }
  }
  const validateInput = (value) => {
    if (value === "") {
      setError(true);
      setErrorMessage("Provide some input");
      setTimeout(()=>{setError(false)},2000)
    } else if (!/^[A-Za-z]+$/.test(value)) {
      setError(true);
      setErrorMessage("Input should contain only alphabets");
      setTimeout(()=>{setError(false)},2000)
    } else {
      setError(false);
      setErrorMessage("");
    }
  
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    validateInput(value);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !error) { 
      const searchQuery = e.target.value;
      if (searchQuery.trim()) {
        navigate(`/search-result?query=${encodeURIComponent(searchQuery)}`);
      }
    }
  };
  console.log("error",error)
  return (
    <>
  <Navbar onSearchClick={scrollToSearchInput} />

    <main className='flex justify-center items-center h-screen  relative'>
        
        <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#B1CBFF] opacity-75 z-10"></div>

        <div className='flex flex-col  gap-20 w-[500px] absolute top-24 z-20 '>
       
        <div className='w-full '><img src={HeroLogo} alt="Herologo" className='w-full h-auto'   />
        </div>
            
        <div className='w-full relative p-3 rounded-lg shadow-custom-light bg-white '  >
     <div className='w-4 absolute inset-y-0 left-2 flex items-center'><img src={Search} alt="Search"  className='w-full h-auto max-w-md'/></div>
        <div ><input
          ref={searchInputRef}
          type="text"
          placeholder="Search..."
          className='w-full focus:outline-none pl-10 '
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
          />
          </div>
        </div>
          {
            error && <p className="text-sm  text-red-600 ">{errorMessage}</p>
          }
          </div>
          
     
       
     
    </main>
    </>
  )
}

export default Home
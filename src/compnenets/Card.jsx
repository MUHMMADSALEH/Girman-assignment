import React from 'react'
import locationIcon from "../assets/location.svg"
import callIcon from "../assets/call.svg"
const Card
    = ({ firstName, lastName, city, contactNumber, onFetchDetails  }) => {
        return (
            <div className='bg-white w-[340px] rounded-2xl'>
                <div className='w-full p-6'>
                    <div className='m-auto'>

                        <div className='w-full '>
                            <div className='w-[78px] h-[78px] bg-[#FFFFFF] flex justify-center items-center border-2  rounded-full'>
                                <div className='w-[62px] h-[62px] bg-white rounded-full  flex justify-center items-center overflow-hidden '>
                                    <img src="https://s3-alpha-sig.figma.com/img/a678/aed9/e259b9de82f3f0845448634759bf6f1f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYcPANwMRq5AVmZKggczoNJfXx67q4fD51PtPWSGltMF0LDUUZ3C1vGPa~wMuwdd7WpnLm7auBjacwWHbwIzg6HwVlTX3I8zxE9b50nhlw7dAjUI4dwM9mNvod4QAEG5hcUL73VqTGHIqBUucIfCnD2vHR50cm7-ymvXtwJIk2j5dy9rU5rkLWhPWPKtHlDUni~wWYxxL~sqg5ea425j~HL2UXILw8iNd0Ggww6PMqwtB-8vPjobfeaShjT~I3gh8c1oGZ4vGySra4smPi98soMVMLPCaar0F1Ft~LRZslNQMQ2G7~yJWF9C8dayN1XtBmYgh2uhnUsfn18T~1vmjQ__" alt="avatar" className=' w-full h-full object-cover' /></div>


                            </div>

                            <div className='text-[#09090B] text-3xl font-[600]'><p>{firstName.toUpperCase()}</p>
                                <div className='flex items-center gap-2'><span><img src={locationIcon} alt="locationicon" /></span><span className='text-[10px] font-medium text-[#425763]'>{city}</span></div>

                            </div>
                        </div>

<hr className='mb-4'/>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center gap-2'>
<div className='flex items-center gap-2'><span><img src={callIcon} alt="call icon" /></span><span className='text-sm text-black font-semibold'>{contactNumber}</span></div>
<p className='text-[10px] text-[#AFAFAF] font-medium'>Available on phone</p>

                            </div>
                            <div className='w-32 h-10 rounded-lg bg-[#18181B] py-2 px-4 text-white font-medium text-base'><button  onClick={onFetchDetails}>Fetch Details</button></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

export default Card

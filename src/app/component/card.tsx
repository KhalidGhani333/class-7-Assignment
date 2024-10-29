import React from 'react'

import {Montserrat} from "next/font/google";

const h1font = Montserrat({
weight: ['400', '700'],
style: 'normal',
subsets:['latin'],
display: 'swap'
})

const Card = () => {
  return (
    <div>
      <div className='w-[1046px] h-[292px] flex gap-[30px] '>

<div className='w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] mb-5 bg-white shadow-lg shadow-black hover:scale-95 duration-1000'>
 <div className='w-[70px] h-[76px] py-[22px] px-[19px] gap-[10px] mb-5 rounded-[10px] bg-[#FFDCD1] '></div>
 <h3 className={`${h1font.className} text-[16px] font-bold leading-[24px] mb-5 text-left text-[#252B42]`}>training Courses</h3>
 <div className='w-[50px] h-[2px] mb-5 bg-[#E74040] '></div>
<p className={`${h1font.className} text-[14px] font-normal leading-[20px] mb-5 text-left text-[#737373] `}>The gradual accumulation of 
     information about atomic and 
     small-scale behaviour...</p>
 </div>
 <div className='w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] mb-5  bg-white shadow-lg shadow-black hover:scale-95 duration-1000'>
 <div className='w-[70px] h-[76px] py-[22px] px-[19px] gap-[10px] mb-5 rounded-[10px] bg-[#B9EAA8] '></div>
 <h3 className={`${h1font.className} text-[16px] font-bold leading-[24px] mb-5 text-left text-[#252B42]`}>2,769 online courses</h3>
 <div className='w-[50px] h-[2px] mb-5 bg-[#E74040] '></div>
<p className={`${h1font.className} text-[14px] font-normal leading-[20px] mb-5 text-left text-[#737373] `}>The gradual accumulation of 
     information about atomic and 
     small-scale behaviour...</p>
 </div>
 <div className='w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] mb-5 bg-[#23A6F0]  shadow-lg shadow-black hover:scale-95 duration-1000'>
 <div className='w-[70px] h-[76px] py-[22px] px-[19px] gap-[10px] mb-5 rounded-[10px] bg-white '></div>
 <h3 className={`${h1font.className} text-[16px] font-bold leading-[24px] mb-5 text-left text-white`}>training Courses</h3>
 <div className='w-[50px] h-[2px] mb-5 bg-white '></div>
<p className={`${h1font.className} text-[14px] font-normal leading-[20px] mb-5 text-left text-white `}>The gradual accumulation of 
     information about atomic and 
     small-scale behaviour...</p>
 </div>
</div>
    </div>
  )
}

export default Card

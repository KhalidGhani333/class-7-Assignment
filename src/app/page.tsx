import React from 'react'
import Navbar from './component/navbar'
import Card from './component/card'

import {Montserrat} from "next/font/google";

const h1font = Montserrat({
weight: ['400', '700'],
style: 'normal',
subsets:['latin'],
display: 'swap'
})

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-[1046px] h-[1028px] mt-[50px] ml-[177px] py-[80px] gap-[80px] flex flex-col justify-center items-center '>
         <div className='w-[699px] h-[496px] py-[40px] gap-[40px] flex flex-col justify-center items-center '>
         <h5 className={`text-[16px] ${h1font.className} font-bold leading-[24px] tracking-[0.100px] text-[#23A6F0]`}>Welcome</h5>
         <div className='w-[546px] h-[160px]'>
         <h1 className={` ${h1font.className} text-[58px] font-bold leading-[80px] tracking-[0.200px] text-center text-white`}>Selling on the internet like a pro</h1>
         </div>
         <div className='w-[510px] h-[60px]'>
          <h4 className={`text-[20px] ${h1font.className} font-normal leading-[30px] tracking-[0.200px] text-center text-white`}>We know how large objects will act, but things on a 
          small scale just do not act that way.</h4>
         </div>
         <div className='w-[365px] h-[52px] flex flex-row gap-[10px]'>
          <button className={`w-[193px] h-[52px] py-[15px] px-[30px] gap-[10px] rounded-[5px] text-white bg-[#23A6F0] hover:bg-transparent border border-[#23A6F0] ${h1font.className} font-bold text-[14px] leading-[22px]`}>Get Quote New</button>
          <button className={`w-[162px] h-[52px] py-[15px] px-[30px] gap-[10px] rounded-[5px] border border-[#23A6F0] ${h1font.className} font-bold text-[14px] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white`}>Learn More</button>
         </div>
         </div> 
         <Card/>
         
      </div>
     

    </div>
  )
}

export default Home

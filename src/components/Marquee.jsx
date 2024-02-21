import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-10 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43] '>
        <div className='text border-t-2 border-b-2 flex  whitespace-nowrap overflow-hidden leading-none pt-10 py-10 '>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='font-semibold text-[12vw] uppercase pr-12'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}}  className='font-semibold text-[12vw] uppercase pr-12' >we are ochi</motion.h1>
                        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}}  className='font-semibold text-[12vw] uppercase pr-12' >we are ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee

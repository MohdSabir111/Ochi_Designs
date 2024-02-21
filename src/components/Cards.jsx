import React from 'react'

function Cards() {
  return (
    <div className='fullComponant w-full h-screen bg-zinc-100 flex gap-5 items-center px-32 '>
        <div className=' cardContainer h-[50vh] w-1/2  '>
            <div className='card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
                <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
                <button className='absolute border-2 px-2 rounded-full left-10 bottom-5'>&copy;2020-2022</button>
            </div>

        </div>
        <div className=' cardContainer h-[50vh] w-1/2 flex gap-5 '>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#192826]'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
                <button className='absolute border-2 px-2 rounded-full left-10 bottom-5'>&copy;2020-2022</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#192826]'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
                <button className='absolute border-2 px-2 rounded-full left-10 bottom-5'>&copy;2020-2022</button>
            </div>

        </div>
      
      
    </div>
  )
}

export default Cards

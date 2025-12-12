import React from 'react'

const Cares = () => {
  return (
    <div className='flex flex-col gap-30 py-30 px-30'>
      <div className='flex  gap-10'>
        <div>
          <img className='rounded-lg h-[616px]' src="./cares1.avif" alt="" />
        </div>
        <div className=' flex flex-col justify-center gap-4'>
          <p className='font-bold text-5xl text-slate-700'>Harmonize your schedule</p>
          <p className="text-lg f text-slate-600 w-120">Align tasks with your natural energy rhythms. Embrace tailored productivity.</p>
        </div>
      </div>
      <div className='flex  gap-20'>
        <div className=' flex flex-col justify-center gap-4'>
          <p className='font-bold text-5xl text-slate-700'>Mindful task tracking</p>
          <p className="text-lg f text-slate-600 w-120">Blend productivity with mindfulness. Understand your patterns, enhance focus.</p>
        </div>
        <div>
          <img className='rounded-lg h-[564px]' src="./cares2.avif" alt="" />
        </div>
        
      </div>
      <div className='flex  gap-10'>
        <div>
          <img className='rounded-lg h-[560px]' src="./cares3.avif" alt="" />
        </div>
        <div className=' flex flex-col justify-center gap-4'>
          <p className='font-bold text-5xl text-slate-700'>Productivity and self care</p>
          <p className="text-lg f text-slate-600 w-120">Beyond task completion. Embrace self-care routines, foster a healthier lifestyle.</p>
        </div>
      </div>
    </div>
  )
}

export default Cares
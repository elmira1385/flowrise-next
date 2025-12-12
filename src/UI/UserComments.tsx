import React from 'react'

const UserComments = () => {
  return (
    <div className='flex flex-col gap-8 pt-8 justify-center items-center'>
      <div className='text-4xl font-semibold text-gray-700'>What our users say</div>
      <div className='grid grid-cols-3 grid-rows-1 gap-8 px-46'>
            <div className='flex flex-col p-14  border border-gray-200 gap-8 justify-between  shadow-lg bg-white rounded-lg'>
                 <div>
                  <p className='text-2xl  text-gray-600'>"Flowrise has made burnout a thing of the past. It's a game-changer for work-life balance. It's not just a productivity app—it's a lifestyle enhancer."</p>
                 </div>
                 <div className='flex gap-4  items-center'>
                  <img className='w-14 rounded-full' src="./commentPng1.avif" alt="" />
                  <div className='flex flex-col  '>
                    <p className="text-base font-medium text-slate-700">Ayesha W.</p>
                    <p className="text-base text-slate-600">Digital Marketing Specialist</p>
                  </div>
                 </div>
            </div>
            <div className='flex flex-col p-14  border border-gray-200 gap-8 justify-between shadow-lg bg-white rounded-lg'>
                 <div>
                  <p className='text-2xl  text-gray-600'>"Before Flowrise, I was always running against the clock. Now, I work in harmony with my natural rhythms. My productivity and wellbeing have never been better!"</p>
                 </div>
                 <div className='flex gap-4  items-center'>
                  <img className='w-14 rounded-full' src="./commentPng2.avif" alt="" />
                  <div className='flex flex-col  '>
                    <p className="text-base font-medium text-slate-700">Mark R.</p>
                    <p className="text-base text-slate-600">Nonprofit founder</p>
                  </div>
                 </div>
            </div>
            <div className='flex flex-col p-14 border border-gray-200 gap-8 justify-between shadow-lg bg-white rounded-lg'>
                 <div>
                  <p className='text-2xl  text-gray-600'>"Flowrise has revolutionized my workday! It adapts to my energy and helps me optimize my daily tasks. I'm more productive and happier than ever!"</p>
                 </div>
                 <div className='flex gap-4  items-center'>
                  <img className='w-14 rounded-full' src="./commentPng3.avif" alt="" />
                  <div className='flex flex-col  '>
                    <p className="text-base font-medium text-slate-700">Emily W.</p>
                    <p className="text-base text-slate-600">UX Designer</p>
                  </div>
                 </div>
            </div>
      </div>
    </div>
  )
}

export default UserComments

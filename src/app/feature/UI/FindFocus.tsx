import BTryItFree from '@/common-component/BTryItFree'
import React from 'react'

const FindFocus = () => {
  return (
    <div className='flex pt-16 justify-center gap-38 '>
        <div className='flex flex-col gap-8 just items-start'>
         <div className="flex flex-col gap-2 ">
        <p className="text-7xl font-bold text-slate-700 ">
          Features for
        </p>
        <p className="text-7xl font-bold  text-slate-700 ">
          finding focus
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-2xl  text-gray-600">
        Harness our innovative feature set to
        </p>
        <p className="text-2xl  text-gray-600">
         propel your productivity power. Make
        </p>
        <p className="text-2xl  text-gray-600">
          every moment count, stress less.
        </p>
      </div>
      <BTryItFree/>
        </div>
        <div>
            <img className='w-xl' src="./feature1.avif" alt="" />
        </div>
    </div>
  )
}

export default FindFocus
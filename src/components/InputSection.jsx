import React from 'react'

function InputSection () {
  return (
    <div className='w-full max-w-sm md:max-w-none mx-auto px-6 lg:px-20 xl:px-40'>
      <div className='flex flex-col md:flex-row gap-4 lg:gap-8 justify-between items-center p-5 md:p-6 lg:p-10 xl:h-32 my-10 bg-DarkViolet bg-shortenMobileBg md:bg-shortenDeskBg bg-no-repeat bg-contain md:bg-cover bg-right-top md:bg-top rounded-lg'>
        <input type='text' className='w-full xl:w-[900px] text-sm md:text-base px-2 md:px-5 py-3 bg-white rounded-md focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-GrayishViolet' placeholder='Shorten a link here...' />
        <button className='py-3 bg-Cyan text-white font-bold hover:bg-Cyan/40 hover:transition-colors duration-100 rounded-md w-full md:w-40'>Shorten It!</button>
      </div>
    </div>
  )
}

export default InputSection

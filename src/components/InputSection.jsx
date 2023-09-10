import { useState } from 'react'
import Button from './Button'

function InputSection () {
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)

  const handleClick = () => {
    query
      ? fetch(`https://api.shrtco.de/v2/shorten?url=${query}`)
        .then((res) => res.json())
        .then((data) => setData(data.result.short_link))
        .then(console.log(data))
      : console.log('no hay url')
  }

  return (
    <div className='w-full max-w-sm md:max-w-none mx-auto px-6 lg:px-20 xl:px-40'>
      <div className='flex flex-col md:flex-row gap-4 lg:gap-8 justify-between items-center p-5 md:p-6 lg:p-10 xl:h-32 my-10 bg-DarkViolet bg-shortenMobileBg md:bg-shortenDeskBg bg-no-repeat bg-contain md:bg-cover bg-right-top md:bg-top rounded-lg'>
        <input value={query} onChange={e => { setQuery(e.target.value) }} type='text' className='w-full xl:w-[900px] text-sm md:text-base px-2 md:px-5 py-3 bg-white rounded-md focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-GrayishViolet' placeholder='Shorten a link here...' />
        <button onClick={handleClick} className='py-3 bg-Cyan text-white font-bold hover:bg-Cyan/80 hover:transition-colors duration-100 rounded-md w-full md:w-40'>Shorten It!</button>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='lg:px-5 lg:py-3 flex justify-between items-center bg-white rounded-md'>
          <p className='text-VeryDarkBlue text-lg'>https://www.frontendmentor.io</p>
          <div className='flex justify-between items-center gap-5'>
            <p className='text-Cyan text-lg'>shrtco.de/4M7SX9</p>
            <Button label='Copy' rounded='rounded-md' width='px-6 py-2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputSection

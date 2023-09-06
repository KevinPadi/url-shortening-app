import { useState } from 'react'
import Button from './Button'

function HamburgerMenu () {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className='md:hidden'>
      <div onClick={toggleModal}>
        {modalOpen ? <svg className='cursor-pointer' xmlns='http://www.w3.org/2000/svg' width='21' height='22'><path fill='hsl(257, 7%, 63%)' fillRule='evenodd' d='M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z' /></svg> : <svg className='cursor-pointer' xmlns='http://www.w3.org/2000/svg' width='25' height='18'><g fill='hsl(257, 7%, 63%)' fillRule='evenodd'><path d='M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z' /></g></svg>}
      </div>
      {modalOpen && (
        <div className='mt-14 fixed inset-0 px-5'>
          <div className='space-y-5 mt-4 mx-auto h-[350px] w-full text-white bg-DarkViolet font-bold bg-VaryLightGray p-6 rounded-lg py-10 divide-y-[1px] divide-Gray/30'>
            <div className='flex flex-col gap-8 items-center justify-between h-1/2'>
              <a href='#'>Features</a>
              <a href='#'>Pricing</a>
              <a href='#'>Resources</a>
            </div>
            <div className='flex flex-col text-center py-6 gap-8'>
              <a href='#'>Login</a>
              <Button label='Sign Up' width='px-7' rounded='rounded-full' />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu

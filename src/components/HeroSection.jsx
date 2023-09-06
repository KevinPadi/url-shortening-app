import Button from './Button'
import illustration from '../assets/images/illustration-working.svg'

function HeroSection () {
  return (
    <section className='px-6 lg:px-20 xl:px-40 lg:mt-10 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-between overflow-xn-clip'>
      <div className='lg:py-16 max-w-xs md:max-w-md space-y-10 lg:w-[700px] text-center lg:text-left mx-auto'>
        <div className='space-y-5'>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-VeryDarkBlue leading-[1.1]'>More than just shorter links</h1>
          <p className='text-sm lg:text-lg text-GrayishViolet leading-6'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        </div>
        <div>
          <Button label='Get Started' rounded='rounded-full' width='px-10' />
        </div>
      </div>
      <div className='lg:relative mx-auto w-[420px] lg:h-full lg:w-[700px]'>
        <img className='lg:absolute lg:-top-5 lg:-right-52 xl:-right-72' src={illustration} alt='illustration' />
      </div>
    </section>
  )
}

export default HeroSection

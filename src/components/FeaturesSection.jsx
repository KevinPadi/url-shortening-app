import { MagicMotion } from 'react-magic-motion'
import brandIcon from '../assets/images/icon-brand-recognition.svg'
import detailedIcon from '../assets/images/icon-detailed-records.svg'
import customizableIcon from '../assets/images/icon-fully-customizable.svg'
import InputSection from './InputSection'

function FeaturesSection () {
  return (
    <section className='relative mt-32 bg-gray-100 px-6 lg:px-20 xl:px-40 py-10 space-y-24'>
      <div className='-space-y-10'>
        <MagicMotion>
          <div className='relative -top-[9.5rem] md:-top-[8rem] lg:-top-[9rem] right-[0rem] w-full '>
            <InputSection />
          </div>
        </MagicMotion>
        <div className='text-center md:w-[400px] mx-auto space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-VeryDarkBlue'>Advanced Statistics</h2>
          <p className='text-sm leading-relaxed text-GrayishViolet'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
      </div>
      <div className='relative flex flex-col gap-20 md:gap-5 md:flex-row justify-between h-auto md:h-[300px] max-w-xs mx-auto md:max-w-none'>
        <div className='absolute top-0 md:-top-3 bottom-0 right-0 left-0 m-auto w-2 md:w-full h-full md:h-2 bg-Cyan' />
        <article className='self-start relative bg-white w-full lg:w-[320px] xl:w-[340px] h-fit pt-14 p-6 space-y-2 rounded-md'>
          <div className='absolute -top-[2.5rem] right-0 left-0 m-auto rounded-full bg-DarkViolet w-20 h-20 flex justify-center items-center'>
            <img src={brandIcon} alt='card icon' />
          </div>
          <h1 className='text-lg font-bold text-VeryDarkBlue text-center md:text-left'>Brand Recognition</h1>
          <p className='text-sm text-GrayishViolet leading-relaxed text-center md:text-left'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </article>
        <article className='self-center relative bg-white w-full lg:w-[300px] xl:w-[340px] h-fit pt-14 p-6 space-y-2 rounded-md'>
          <div className='absolute -top-[2.5rem] right-0 left-0 m-auto rounded-full bg-DarkViolet w-20 h-20 flex justify-center items-center'>
            <img src={detailedIcon} alt='card icon' />
          </div>
          <h1 className='text-lg font-bold text-VeryDarkBlue text-center md:text-left'>Detailed Records</h1>
          <p className='text-sm text-GrayishViolet leading-relaxed text-center md:text-left'>Gain insights who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </article>
        <article className='self-end relative bg-white w-full lg:w-[300px] xl:w-[340px] h-fit pt-14 p-6 space-y-2 rounded-md'>
          <div className='absolute -top-[2.5rem] right-0 left-0 m-auto rounded-full bg-DarkViolet w-20 h-20 flex justify-center items-center'>
            <img src={customizableIcon} alt='card icon' />
          </div>
          <h1 className='text-lg font-bold text-VeryDarkBlue text-center md:text-left'>Fully Customizable</h1>
          <p className='text-sm text-GrayishViolet leading-relaxed text-center md:text-left'>Imrove brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </article>
      </div>
    </section>
  )
}

export default FeaturesSection

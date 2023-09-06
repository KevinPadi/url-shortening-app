import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import brandIcon from './assets/images/icon-brand-recognition.svg'
import detailedIcon from './assets/images/icon-detailed-records.svg'
import customizableIcon from './assets/images/icon-fully-customizable.svg'

function App () {
  return (
    <div className='w-full overflow-hidden'>
      <Nav />
      <HeroSection />
      <section className='mt-32 bg-gray-100 px-40 py-10 space-y-20'>
        <div className='text-center w-[400px] mx-auto pt-10 space-y-4'>
          <h2 className='text-3xl font-bold text-VeryDarkBlue'>Advanced Statistics</h2>
          <p className='text-sm leading-relaxed text-GrayishViolet'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className='relative flex justify-between h-[300px]'>
          <div className='absolute top-[8rem] w-full h-2 bg-Cyan' />
          <article className='self-start relative bg-white w-[340px] h-fit pt-14 p-6 space-y-2 rounded-md'>
            <div className='absolute rounded-full bg-DarkViolet w-20 h-20 flex justify-center items-center -top-[2.5rem]'>
              <img src={brandIcon} alt='card icon' />
            </div>
            <h1 className='text-lg font-bold text-VeryDarkBlue'>Brand Recognition</h1>
            <p className='text-sm text-GrayishViolet leading-relaxed'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </article>
          <article className='self-center relative bg-white w-[340px] h-fit pt-14 p-6 space-y-2 rounded-md'>
            <div className='absolute rounded-full bg-DarkViolet w-20 h-20 flex justify-center items-center -top-[2.5rem]'>
              <img src={detailedIcon} alt='card icon' />
            </div>
            <h1 className='text-lg font-bold text-VeryDarkBlue'>Detailed Records</h1>
            <p className='text-sm text-GrayishViolet leading-relaxed'>Gain insights who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </article>
          <article className='self-end relative bg-white w-[340px] h-fit pt-14 p-6 space-y-2 rounded-md'>
            <div className='absolute rounded-full bg-DarkViolet w-20 h-20 flex justify-center items-center -top-[2.5rem]'>
              <img src={customizableIcon} alt='card icon' />
            </div>
            <h1 className='text-lg font-bold text-VeryDarkBlue'>Fully Customizable</h1>
            <p className='text-sm text-GrayishViolet leading-relaxed'>Imrove brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App

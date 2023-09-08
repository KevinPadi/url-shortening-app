import Button from './Button'

function CtaSection () {
  return (
    <section className='md:w-full md:h-52 p-10 bg-DarkViolet bg-boostMobileBg md:bg-boostDeskBg bg-no-repeat bg-cover'>
      <div className='text-center space-y-10'>
        <h2 className='text-white text-xl md:text-4xl font-bold'>
          Boost your links today
        </h2>
        <div>
          <Button label='Get Started' rounded='rounded-full' width='px-10' />
        </div>
      </div>
    </section>
  )
}

export default CtaSection

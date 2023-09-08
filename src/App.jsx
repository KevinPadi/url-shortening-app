import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CtaSection from './components/CtaSection'

function App () {
  return (
    <div className='w-full overflow-hidden'>
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  )
}

export default App

import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import CtaSection from './components/CtaSection'
import FooterSection from './components/FooterSection'

function App () {
  return (
    <div className='w-full overflow-hidden'>
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <FooterSection />
    </div>
  )
}

export default App

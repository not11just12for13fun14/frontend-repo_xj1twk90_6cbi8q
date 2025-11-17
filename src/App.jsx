import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Values from './components/Values'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Curriculum from './components/Curriculum'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Features />
        <HowItWorks />
        <Curriculum />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

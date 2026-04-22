import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Values from './components/Values'
import Products from './components/Products'
import ProductEcosystem from './components/ProductEcosystem'
import TechBlueprint from './components/TechBlueprint'
import StrategicMoats from './components/StrategicMoats'
import Sectors from './components/Sectors'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export { useInView }

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Mission />
        <Values />
        <Products />
        <ProductEcosystem />
        <TechBlueprint />
        <StrategicMoats />
        <Sectors />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App

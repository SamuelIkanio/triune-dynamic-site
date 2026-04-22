import { useEffect, useState } from 'react'
import TriuneLogo from './TriuneLogo'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-triune-blue/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-triune-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-triune-purple/3 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-20">
        {/* Logo Mark */}
        <div className={`mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block animate-float">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-br from-triune-blue/30 to-triune-accent/20 rounded-2xl blur-md animate-pulse-glow" />
              <TriuneLogo
                size={90}
                className="relative mx-auto rounded-2xl shadow-2xl shadow-triune-blue/30 ring-1 ring-white/15"
              />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider text-triune-accent uppercase">
            <span className="w-2 h-2 bg-triune-green rounded-full animate-pulse" />
            HealthTech · Security · Adaptive AI
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-white">Defining the Future of </span>
          <br className="hidden sm:block" />
          <span className="gradient-text">Unhackable Health</span>
          <span className="text-white"> and </span>
          <br className="hidden sm:block" />
          <span className="gradient-text">Unbreakable Security.</span>
        </h1>

        {/* Subtext */}
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed mb-10 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          At the intersection of HealthTech, Security, and Adaptive AI, Triune Dynamic Limited
          is building the foundation for a resilient global society.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#products"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-triune-blue to-triune-blue-light text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-triune-blue/30 hover:-translate-y-1"
          >
            <span className="relative z-10">Explore Our Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-triune-blue-light to-triune-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#strategy"
            className="px-8 py-3.5 glass-strong text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Investor Intelligence →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-20 transition-all duration-1000 delay-[900ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase">
            <span>Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-triune-blue/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-triune-dark to-transparent" />
    </section>
  )
}

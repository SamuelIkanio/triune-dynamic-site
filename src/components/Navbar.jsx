import { useState, useEffect } from 'react'
import TriuneLogo from './TriuneLogo'

const navLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Vision', href: '#vision' },
  { label: 'Products', href: '#products' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Strategy', href: '#strategy' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'pt-2 pb-2 bg-triune-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'pt-4 pb-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <TriuneLogo size={36} className="ring-1 ring-white/10 group-hover:ring-triune-blue/50 transition-all duration-300" />
          <div>
            <div className="font-heading font-bold text-white text-sm tracking-wide">Triune Dynamic</div>
            <div className="text-[10px] text-triune-accent/70 tracking-widest uppercase">Limited</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-triune-blue to-triune-blue-light text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-triune-blue/30 transition-all duration-200">
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white p-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-triune-dark/95 backdrop-blur-xl border-b border-white/5 py-4">
          <div className="flex flex-col gap-1 px-4">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-3 bg-gradient-to-r from-triune-blue to-triune-blue-light text-white text-sm font-semibold rounded-lg text-center">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

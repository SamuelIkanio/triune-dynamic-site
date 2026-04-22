import TriuneLogo from './TriuneLogo'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <TriuneLogo className="h-10 w-auto" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Triune Dynamic</h3>
              <p className="text-gray-500 text-xs">HealthTech &middot; Security &middot; Adaptive AI</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#vision" className="hover:text-triune-accent transition-colors">Vision</a>
            <a href="#products" className="hover:text-triune-accent transition-colors">Products</a>
            <a href="#technology" className="hover:text-triune-accent transition-colors">Technology</a>
            <a href="#strategy" className="hover:text-triune-accent transition-colors">Strategy</a>
            <a href="#sectors" className="hover:text-triune-accent transition-colors">Sectors</a>
            <a href="#contact" className="hover:text-triune-accent transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Triune Dynamic Limited. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Defining the Future of Unhackable Health &amp; Unbreakable Security
          </p>
        </div>
      </div>
    </footer>
  )
}

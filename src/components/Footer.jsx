import TriuneLogo from './TriuneLogo'

const CONTACT_EMAIL = 'Triunedynamicslimited@gmail.com'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
          Ready to Build a <span className="gradient-text">Resilient Future</span>?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Partner with Triune Dynamic Limited to pioneer the next generation of health and security technology.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-triune-blue to-triune-blue-light text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-triune-blue/30 transition-all duration-300 hover:-translate-y-1"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Get in Touch
        </a>
        <p className="mt-4 text-gray-600 text-sm">{CONTACT_EMAIL}</p>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TriuneLogo size={28} className="ring-1 ring-white/10" />
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} Triune Dynamic Limited. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-triune-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-triune-accent transition-colors">Terms</a>
            <a href="#contact" className="hover:text-triune-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

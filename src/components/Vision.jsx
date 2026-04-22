import { useInView } from '../App'
import SectionHeading from './SectionHeading'

export default function Vision() {
  const [ref, isInView] = useInView()

  return (
    <section id="vision" className="relative py-24 sm:py-32">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-triune-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionHeading
            badge="Our Vision"
            title="Leading Global"
            highlight="Convergence"
          />
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative glass-strong rounded-2xl p-8 sm:p-12 overflow-hidden group hover:border-triune-blue/20 transition-all duration-500">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-triune-blue/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-triune-accent/30 rounded-br-2xl" />

            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-triune-blue/5 to-triune-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-10 bg-gradient-to-b from-triune-blue to-triune-accent rounded-full" />
                <span className="text-triune-accent text-sm font-semibold tracking-wider uppercase">Where We're Headed</span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-white leading-relaxed">
                "To lead the global convergence of health and security technologies through adaptive AI, creating a future where societies thrive in{' '}
                <span className="gradient-text">safety, resilience, and unshakable trust</span>."
              </blockquote>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Health Tech', 'Security', 'Adaptive AI', 'Global Resilience'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-triune-blue/10 border border-triune-blue/20 text-triune-blue-light text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

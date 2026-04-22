import { useInView } from '../App'
import SectionHeading from './SectionHeading'

const stats = [
  { value: '3', label: 'Core Sectors', suffix: '' },
  { value: '100', label: 'AI-Driven', suffix: '%' },
  { value: '∞', label: 'Scalability', suffix: '' },
  { value: '24/7', label: 'Resilient Ops', suffix: '' },
]

export default function Mission() {
  const [ref, isInView] = useInView()

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-triune-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionHeading
            badge="Our Mission"
            title="Empowering Societies to"
            highlight="Thrive"
          />
        </div>

        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-heading">
            Empowering societies to thrive through{' '}
            <span className="text-triune-accent font-semibold">dynamic AI solutions</span>{' '}
            for unhackable health and unbreakable security.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-strong rounded-xl p-6 text-center hover:border-triune-blue/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-triune-blue/10 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl gradient-text mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

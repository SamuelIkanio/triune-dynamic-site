import { useInView } from '../App'
import SectionHeading from './SectionHeading'

const sectors = [
  {
    title: 'HealthTech',
    tagline: 'Unhackable Health Infrastructure',
    desc: 'Adaptive AI-powered systems securing patient data, optimizing diagnostics, and enabling resilient healthcare delivery worldwide.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>),
    gradient: 'from-rose-500 to-triune-blue',
    features: ['Patient Data Security', 'AI Diagnostics', 'Resilient Delivery'],
  },
  {
    title: 'Security Tech',
    tagline: 'Unbreakable Security Systems',
    desc: 'Next-generation cybersecurity and physical security solutions powered by dynamic AI that learns and adapts in real time.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>),
    gradient: 'from-triune-blue to-triune-accent',
    features: ['Cyber Defense', 'Real-Time Threat AI', 'Adaptive Protection'],
  },
  {
    title: 'AI Technology',
    tagline: 'Adaptive Intelligence Platform',
    desc: 'The connective tissue between health and security - our adaptive AI platform continuously learns, anticipates, and evolves.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>),
    gradient: 'from-triune-accent to-triune-green',
    features: ['Continuous Learning', 'Predictive Analytics', 'Cross-Domain AI'],
  },
]

export default function Sectors() {
  const [ref, isInView] = useInView()

  return (
    <section id="sectors" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-triune-blue/4 rounded-full blur-[140px] pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionHeading badge="Our Sectors" title="Three Pillars of" highlight="Innovation" description="Operating at the convergence of three critical technology domains, unified by adaptive AI." />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <div key={sector.title} className={`group relative glass-strong rounded-2xl p-8 overflow-hidden hover:border-triune-blue/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-triune-blue/10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${200 + i * 150}ms` }}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sector.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${sector.gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>{sector.icon}</div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">{sector.title}</h3>
                <p className="text-triune-accent text-sm font-medium mb-4">{sector.tagline}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{sector.desc}</p>
                <div className="flex flex-wrap gap-2">{sector.features.map(f => (<span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">{f}</span>))}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`hidden md:flex justify-center mt-12 transition-all duration-700 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-32 h-px bg-gradient-to-r from-rose-500 to-triune-blue" />
            <div className="w-3 h-3 rounded-full bg-triune-blue" />
            <div className="w-32 h-px bg-gradient-to-r from-triune-blue to-triune-green" />
            <div className="w-3 h-3 rounded-full bg-triune-green" />
          </div>
        </div>
        <p className={`hidden md:block text-center text-sm text-gray-500 mt-3 transition-all duration-700 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>Unified through Adaptive AI</p>
      </div>
    </section>
  )
}

import { useInView } from '../App'
import SectionHeading from './SectionHeading'

const values = [
  {
    title: 'Dynamic Innovation',
    desc: 'Evolving AI to anticipate tomorrow\'s challenges.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: 'from-triune-blue to-triune-accent',
    borderColor: 'hover:border-triune-blue/40',
  },
  {
    title: 'Ethical Guardianship',
    desc: 'Transparency, bias mitigation, and user consent.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: 'from-triune-green to-emerald-400',
    borderColor: 'hover:border-triune-green/40',
  },
  {
    title: 'Human-Centric Tech',
    desc: 'Augmenting human expertise, never replacing it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    gradient: 'from-triune-purple to-purple-400',
    borderColor: 'hover:border-triune-purple/40',
  },
  {
    title: 'Sustainable Agility',
    desc: 'Eco-conscious practices and energy-efficient AI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.592L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" />
      </svg>
    ),
    gradient: 'from-cyan-400 to-teal-400',
    borderColor: 'hover:border-cyan-400/40',
  },
]

export default function Values() {
  const [ref, isInView] = useInView()

  return (
    <section id="values" className="relative py-24 sm:py-32">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-triune-green/3 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionHeading
            badge="Our Values"
            title="Built on"
            highlight="Principles"
            description="Four pillars that guide every decision, every line of code, and every partnership we build."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((val, i) => (
            <div
              key={val.title}
              className={`group glass-strong rounded-2xl p-8 ${val.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-triune-blue/5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${val.gradient} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {val.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed">{val.desc}</p>

              {/* Bottom accent line */}
              <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${val.gradient} transition-all duration-500 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

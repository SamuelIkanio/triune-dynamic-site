import { useState } from 'react'
import { useInView } from '../App'

const ipAssets = [
  {
    title: 'Non-Invasive Spectrophotometric Blood Analysis',
    type: 'Patent Application',
    scope: 'Method & apparatus for continuous non-invasive multi-biomarker monitoring via wrist-worn spectrophotometric sensor array',
    product: 'BloodReader Pro',
    icon: '🩸',
  },
  {
    title: 'Adaptive Multi-Spectral Threat Detection',
    type: 'Patent Application',
    scope: 'AI-driven real-time threat classification using fused mmWave radar, multi-spectral imaging, and pulse induction data',
    product: 'SecureScan Sentinel',
    icon: '🛡️',
  },
  {
    title: 'Real-Time Neural Pattern Anomaly Detection',
    type: 'Patent Application',
    scope: 'Edge-AI method for continuous cognitive state monitoring and early neurological anomaly flagging via dry EEG',
    product: 'MindGuard NeuroSentry',
    icon: '🧠',
  },
  {
    title: 'Triune Adaptive AI Platform (TAAP)',
    type: 'Trade Secret + Copyright',
    scope: 'Proprietary cross-domain AI architecture enabling health-security data fusion and predictive modelling',
    product: 'Platform-wide',
    icon: '🤖',
  },
]

const regulatoryItems = [
  {
    product: 'BloodReader Pro',
    certifications: [
      { cert: 'CE Medical Device (MDR)', status: 'In Progress', region: 'EU/UK' },
      { cert: 'UKCA Medical Device', status: 'In Progress', region: 'UK' },
      { cert: 'FDA 510(k)', status: 'Planned', region: 'USA' },
      { cert: 'ISO 13485 QMS', status: 'Implementing', region: 'Global' },
      { cert: 'ISO 10993 Biocompatibility', status: 'Testing', region: 'Global' },
    ],
    moat: 'Medical device certification takes 18–36 months and £500K+. Once obtained, it creates a significant barrier for new market entrants.',
  },
  {
    product: 'SecureScan Sentinel',
    certifications: [
      { cert: 'CPNI Evaluation', status: 'Target', region: 'UK' },
      { cert: 'CE Marking (EMC/Safety)', status: 'In Progress', region: 'EU/UK' },
      { cert: 'Mil-STD-810G', status: 'Testing', region: 'NATO' },
      { cert: 'ECAC Standard 3', status: 'Target', region: 'EU Aviation' },
      { cert: 'TSA APSS Certification', status: 'Planned', region: 'USA' },
    ],
    moat: 'CPNI approval alone takes 12–24 months. Combined with aviation certifications, this creates a 3+ year head start over any new competitor.',
  },
  {
    product: 'MindGuard NeuroSentry',
    certifications: [
      { cert: 'CE Medical Device (Class IIa)', status: 'In Progress', region: 'EU/UK' },
      { cert: 'ISO 62304 Software Lifecycle', status: 'Implementing', region: 'Global' },
      { cert: 'HIPAA Compliance', status: 'Architecture Ready', region: 'USA' },
      { cert: 'ICO/GDPR Neural Data', status: 'Implementing', region: 'UK/EU' },
    ],
    moat: 'Neural data falls under the strictest GDPR special categories. Our on-device AI architecture is designed from day one for this compliance — retrofitting is nearly impossible.',
  },
]

const roiData = [
  {
    title: 'UK Diabetes Market',
    stat: '£10B+',
    substat: 'per year',
    detail: 'The UK spends over £10 billion annually on diabetes. The non-invasive glucose monitoring market alone is projected to reach $30B globally by 2030. BloodReader Pro eliminates £600/year per patient in sensor consumable costs.',
    icon: '💰',
    gradient: 'from-rose-500 to-triune-blue',
  },
  {
    title: 'Airport Security Revenue',
    stat: '£4.2M',
    substat: 'per gate opportunity',
    detail: 'A single airport like Heathrow loses an estimated £4.2M/year in false-alarm related delays, staffing overhead, and passenger throughput losses. SecureScan Sentinel targets a 95% reduction in false alarms.',
    icon: '✈️',
    gradient: 'from-triune-blue to-triune-accent',
  },
  {
    title: 'Workplace Mental Health',
    stat: '£56B',
    substat: 'UK annual cost',
    detail: 'Mental health conditions cost UK employers £56 billion annually. MindGuard NeuroSentry enables early cognitive intervention, reducing absenteeism and improving workplace safety outcomes.',
    icon: '🧠',
    gradient: 'from-triune-purple to-triune-blue',
  },
  {
    title: 'Combined TAM',
    stat: '$180B+',
    substat: 'total addressable market',
    detail: 'Across non-invasive health monitoring, AI-powered security, and cognitive health — the combined total addressable market exceeds $180 billion by 2030 with compounding growth.',
    icon: '📈',
    gradient: 'from-triune-accent to-triune-green',
  },
]

function IPFirewall() {
  const [ref, isInView] = useInView()

  return (
    <div ref={ref} className="mb-20">
      <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-white">IP Firewall</h3>
          <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Intellectual Property Portfolio</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {ipAssets.map((ip, i) => (
          <div
            key={ip.title}
            className={`glass-strong rounded-xl p-5 hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-1 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-lg">{ip.icon}</span>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
                  {ip.type}
                </span>
                <h4 className="font-heading font-bold text-white text-sm leading-snug">{ip.title}</h4>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">{ip.scope}</p>
            <div className="mt-3 text-xs text-gray-500">Covers: {ip.product}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RegulatoryLockIn() {
  const [ref, isInView] = useInView()

  const statusColor = (status) => {
    if (status.includes('Progress') || status.includes('Implementing') || status.includes('Testing')) return 'text-triune-accent bg-triune-accent/10 border-triune-accent/20'
    if (status.includes('Target') || status.includes('Planned')) return 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    if (status.includes('Ready')) return 'text-triune-green bg-triune-green/10 border-triune-green/20'
    return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
  }

  return (
    <div ref={ref} className="mb-20">
      <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-triune-green to-emerald-600 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-white">Regulatory Lock-In</h3>
          <span className="text-xs text-triune-green font-semibold tracking-wider uppercase">Certification Moats</span>
        </div>
      </div>

      <div className="space-y-6">
        {regulatoryItems.map((item, i) => (
          <div
            key={item.product}
            className={`glass-strong rounded-2xl p-5 sm:p-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${200 + i * 150}ms` }}
          >
            <h4 className="font-heading font-bold text-white text-base mb-4">{item.product}</h4>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.certifications.map(cert => (
                <div key={cert.cert} className="glass rounded-lg px-3 py-2 flex items-center gap-2">
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase border ${statusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                  <span className="text-xs text-gray-300">{cert.cert}</span>
                  <span className="text-[10px] text-gray-600">({cert.region})</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 p-3 rounded-lg bg-triune-green/5 border border-triune-green/10">
              <svg className="w-4 h-4 text-triune-green mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-triune-green/80 leading-relaxed"><strong className="text-triune-green">Competitive Moat:</strong> {item.moat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ROISection() {
  const [ref, isInView] = useInView()

  return (
    <div ref={ref}>
      <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-triune-blue to-triune-accent flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-white">ROI & Market Opportunity</h3>
          <span className="text-xs text-triune-accent font-semibold tracking-wider uppercase">Investor Intelligence</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {roiData.map((item, i) => (
          <div
            key={item.title}
            className={`group glass-strong rounded-2xl p-6 hover:border-triune-blue/30 transition-all duration-500 hover:-translate-y-1 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-3xl sm:text-4xl font-heading font-extrabold gradient-text`}>{item.stat}</span>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{item.substat}</div>
            <h4 className="font-heading font-bold text-white text-base mb-3">{item.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Summary bar */}
      <div className={`mt-8 glass-strong rounded-2xl p-6 border border-triune-blue/20 transition-all duration-700 delay-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-triune-blue to-triune-accent flex items-center justify-center animate-pulse-glow">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-1">First-Mover Advantage in a Converging Market</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Triune is uniquely positioned at the convergence of three multi-billion-dollar sectors — with patent-pending technology, a regulatory head start, and no direct competitor offering an integrated health-security-AI platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StrategicMoats() {
  const [ref, isInView] = useInView()

  return (
    <section id="strategy" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-triune-green/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-amber-400 uppercase mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
            Strategic Moats & Investor Intelligence
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Defensible. Scalable. <span className="gradient-text">Investable.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Patent-pending IP, regulatory certification moats, and multi-billion-dollar market opportunities — the strategic foundation for long-term competitive dominance.
          </p>
        </div>

        <IPFirewall />
        <RegulatoryLockIn />
        <ROISection />
      </div>
    </section>
  )
}

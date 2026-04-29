import { useState } from 'react'
import { useInView } from '../App'

const PRODUCT_IMAGES = {
  bloodreader: '/images/bloodreader.PNG',
  sentinel: '/images/sentinel.PNG',
  neurosentry: '/images/neurosentry.PNG',
  aicore: '/images/aicore.png',
}

const products = [
  {
    id: 'bloodreader',
    name: 'BloodReader Pro',
    fullName: 'BloodReader Pro Wearable',
    category: 'HealthTech',
    image: PRODUCT_IMAGES.bloodreader,
    tagline: 'Non-invasive, real-time blood biomarker monitoring.',
    description: 'The BloodReader Pro is an AI-powered wearable that uses spectrophotometric sensors to monitor glucose, hemoglobin, and hydration levels continuously - no needles, no blood draws. A paradigm shift in preventive healthcare.',
    accentColor: 'text-rose-400',
    gradient: 'from-rose-500 to-triune-blue',
    bgAccent: 'bg-rose-500/10',
    borderAccent: 'border-rose-500/20',
    competitors: [
      {
        feature: 'Measurement Method',
        triune: 'Non-invasive spectrophotometry',
        competitor: 'Invasive (needle-based CGM)',
        competitorName: 'Abbott FreeStyle Libre',
        triuneWin: true,
      },
      {
        feature: 'Parameters Tracked',
        triune: 'Glucose + Hemoglobin + Hydration + SpO₂',
        competitor: 'Glucose only',
        competitorName: 'Dexcom G7',
        triuneWin: true,
      },
      {
        feature: 'Sensor Replacement',
        triune: 'None required (permanent sensor)',
        competitor: 'Every 10-14 days',
        competitorName: 'Abbott FreeStyle Libre',
        triuneWin: true,
      },
      {
        feature: 'User Comfort',
        triune: 'Wristband - no skin penetration',
        competitor: 'Subcutaneous filament insertion',
        competitorName: 'Dexcom G7',
        triuneWin: true,
      },
      {
        feature: 'AI Analytics',
        triune: 'Adaptive, predictive health modelling',
        competitor: 'Basic trend alerts',
        competitorName: 'Abbott / Dexcom',
        triuneWin: true,
      },
      {
        feature: 'Cost Model',
        triune: 'One-time device purchase',
        competitor: 'Recurring sensor costs (~£50/month)',
        competitorName: 'Abbott FreeStyle Libre',
        triuneWin: true,
      },
    ],
  },
  {
    id: 'sentinel',
    name: 'SecureScan Sentinel',
    fullName: 'SecureScan Sentinel Gate',
    category: 'Security Tech',
    image: PRODUCT_IMAGES.sentinel,
    tagline: 'AI-powered adaptive security walkthrough.',
    description: 'The SecureScan Sentinel replaces decades-old metal detector technology with a multi-spectral, AI-driven detection platform. It identifies metallic weapons, non-metallic threats, concealed electronics, and biometric anomalies - all in under 0.3 seconds with 99.97% accuracy.',
    accentColor: 'text-triune-accent',
    gradient: 'from-triune-blue to-triune-accent',
    bgAccent: 'bg-triune-accent/10',
    borderAccent: 'border-triune-accent/20',
    competitors: [
      {
        feature: 'Threat Detection Scope',
        triune: 'Metallic + Non-metallic + Electronics + Biometric',
        competitor: 'Metallic objects only',
        competitorName: 'Garrett / Smiths Detection',
        triuneWin: true,
      },
      {
        feature: 'AI Capability',
        triune: 'Real-time adaptive learning, behavioural analysis',
        competitor: 'No AI / pre-set thresholds',
        competitorName: 'Traditional Metal Detectors',
        triuneWin: true,
      },
      {
        feature: 'False Alarm Rate',
        triune: '< 0.03% (AI-filtered)',
        competitor: '15-30% (industry average)',
        competitorName: 'Evolv Express',
        triuneWin: true,
      },
      {
        feature: 'Processing Speed',
        triune: '< 0.3 seconds per scan',
        competitor: '2-5 seconds',
        competitorName: 'Evolv Express',
        triuneWin: true,
      },
      {
        feature: 'Throughput',
        triune: '3,600+ people/hour',
        competitor: '800-1,200 people/hour',
        competitorName: 'Garrett PD-6500i',
        triuneWin: true,
      },
      {
        feature: 'Form Factor',
        triune: 'Sleek, futuristic, brand-enhancing',
        competitor: 'Industrial, utilitarian',
        competitorName: 'All Legacy Vendors',
        triuneWin: true,
      },
    ],
  },
  {
    id: 'neurosentry',
    name: 'MindGuard NeuroSentry',
    fullName: 'MindGuard NeuroSentry Headset',
    category: 'AI + NeuroTech',
    image: PRODUCT_IMAGES.neurosentry,
    tagline: 'Cognitive health monitoring through neural AI.',
    description: 'The MindGuard NeuroSentry is a 16-channel EEG headset powered by adaptive AI that monitors cognitive load, stress biomarkers, early neurological anomalies, and emotional regulation patterns. Designed for preventive mental healthcare, workplace safety, and high-performance environments.',
    accentColor: 'text-triune-purple',
    gradient: 'from-triune-purple to-triune-blue',
    bgAccent: 'bg-triune-purple/10',
    borderAccent: 'border-triune-purple/20',
    competitors: [
      {
        feature: 'EEG Channels',
        triune: '16-channel medical-grade',
        competitor: '4-channel consumer-grade',
        competitorName: 'Muse 2 / Muse S',
        triuneWin: true,
      },
      {
        feature: 'AI Processing',
        triune: 'Adaptive neural AI with predictive modelling',
        competitor: 'Basic guided meditation feedback',
        competitorName: 'Muse 2',
        triuneWin: true,
      },
      {
        feature: 'Clinical Applicability',
        triune: 'Pre-diagnostic screening, cognitive health',
        competitor: 'Wellness / meditation only',
        competitorName: 'Muse S / EMOTIV Insight',
        triuneWin: true,
      },
      {
        feature: 'Latency',
        triune: '< 5ms real-time processing',
        competitor: '50-200ms',
        competitorName: 'EMOTIV EPOC X',
        triuneWin: true,
      },
      {
        feature: 'Use Case Breadth',
        triune: 'Healthcare + Security + Workplace Safety',
        competitor: 'Single-domain (meditation or research)',
        competitorName: 'Muse / EMOTIV',
        triuneWin: true,
      },
      {
        feature: 'Data Security',
        triune: 'On-device AI, encrypted neural data',
        competitor: 'Cloud-dependent, standard encryption',
        competitorName: 'EMOTIV / Neurosky',
        triuneWin: true,
      },
    ],
  },
]

function CompetitorTable({ product, isVisible }) {
  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-gray-500 border-b border-white/10 w-[28%]">
                Feature
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-triune-accent border-b border-triune-accent/30 w-[36%]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-triune-accent rounded-full" />
                  Triune
                </span>
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-gray-500 border-b border-white/10 w-[36%]">
                Competitor
              </th>
            </tr>
          </thead>
          <tbody>
            {product.competitors.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-4 py-3.5">
                  <span className="text-sm font-medium text-gray-300">{row.feature}</span>
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-triune-green shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-white font-medium">{row.triune}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <div>
                    <span className="text-sm text-gray-400">{row.competitor}</span>
                    <span className="block text-xs text-gray-600 mt-0.5">{row.competitorName}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ProductDeepDive({ product, index }) {
  const [ref, isInView] = useInView()
  const [activeTab, setActiveTab] = useState('overview')
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Product Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Image */}
        <div className="lg:w-2/5 relative group">
          <div className={`absolute -inset-3 bg-gradient-to-br ${product.gradient} opacity-[0.06] blur-2xl rounded-2xl group-hover:opacity-[0.1] transition-opacity duration-700`} />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3]">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-triune-dark/50 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${product.bgAccent} backdrop-blur-sm border border-white/10 text-xs font-semibold ${product.accentColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-3/5">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">{product.fullName}</h3>
          <p className={`text-base font-medium ${product.accentColor} mb-4`}>{product.tagline}</p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6">{product.description}</p>

          {/* Tab switcher */}
          <div className="flex gap-1 p-1 glass rounded-xl w-fit">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'competitive', label: 'Competitive Edge' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-point ${activeTab === tab.id ? 'bg-triune-blue text-white shadow-lg shadow-triune-blue/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="glass-strong rounded-2xl p-6 sm:p-8">
        {activeTab === 'overview' && (
          <div className={`transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid sm:grid-cols-3 gap-4">
              {product.id === 'bloodreader' && [
                { icon: '🩸', title: 'Non-Invasive', desc: 'Zero needles, zero blood draws. Spectrophotometric sensing through skin.' },
                { icon: '📊', title: 'Multi-Biomarker', desc: 'Glucose, hemoglobin, hydration, and SpO₂ - all from one device.' },
                { icon: '🤖', title: 'Predictive AI', desc: 'Adaptive algorithms detect health trends before symptoms appear.' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
              {product.id === 'sentinel' && [
                { icon: '🛡️', title: 'Multi-Spectral', desc: 'Detects metallic, non-metallic, electronic, and biometric threats.' },
                { icon: '⚡', title: '< 0.3s Scan', desc: '3,600+ people/hour throughput with AI-filtered false alarm suppression.' },
                { icon: '🧠', title: 'Adaptive Learning', desc: 'Neural networks continuously evolve threat detection models in real time.' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
              {product.id === 'neurosentry' && [
                { icon: '🧠', title: '16-Channel EEG', desc: 'Medical-grade neural sensing across full cortical regions.' },
                { icon: '🔒', title: 'On-Device AI', desc: 'Encrypted neural data processing - never leaves the headset.' },
                { icon: '🏥', title: 'Clinical Grade', desc: 'Pre-diagnostic screening for cognitive decline and neurological anomalies.' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'competitive' && (
          <CompetitorTable product={product} isVisible={isInView} />
        )}
      </div>
    </div>
  )
}

export default function ProductEcosystem() {
  const [ref, isInView] = useInView()

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-triune-blue/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-triune-purple/3 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-triune-accent uppercase mb-6">
            Product Ecosystem
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Three Products. <span className="gradient-text">One Ecosystem.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Each device is a standalone breakthrough. Together, they form the world's first integrated health-security-AI platform - with competitive advantages no incumbent can match.
          </p>
        </div>

        {/* Product deep dives */}
        <div className="space-y-20">
          {products.map((product, i) => (
            <ProductDeepDive key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* AI Core Visual */}
        <div className={`mt-20 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              The Triune <span className="gradient-text">Difference</span>
            </h3>
          </div>
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10">
            <img src={PRODUCT_IMAGES.aicore} alt="Triune Adaptive AI Core" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-triune-dark/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
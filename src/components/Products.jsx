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
    id: 'healthband',
    name: 'BloodReader Pro',
    category: 'HealthTech',
    tagline: 'Real-time biomarker intelligence on your wrist.',
    description: 'AI-powered wearable monitoring glucose, hydration, and hemoglobin levels in real time. Non-invasive, continuous, and unhackable - redefining personal health.',
    image: PRODUCT_IMAGES.bloodreader,
    specs: [
      { label: 'Glucose', value: '5.6 mmol/L' },
      { label: 'Hydration', value: 'Optimal' },
      { label: 'Hemoglobin', value: '14.2 g/dL' },
    ],
    gradient: 'from-rose-500 via-triune-blue to-triune-accent',
    accentColor: 'text-rose-400',
    bgAccent: 'bg-rose-500/10',
  },
  {
    id: 'sentinel',
    name: 'SecureScan Sentinel',
    category: 'Security Tech',
    tagline: 'Next-generation adaptive security screening.',
    description: 'AI-driven full-body security gate combining threat detection with real-time adaptive intelligence. Transparent, futuristic, and unbreakable.',
    image: PRODUCT_IMAGES.sentinel,
    specs: [
      { label: 'Detection', value: 'AI-Powered' },
      { label: 'Response', value: '< 0.3s' },
      { label: 'Accuracy', value: '99.97%' },
    ],
    gradient: 'from-triune-blue via-triune-accent to-cyan-400',
    accentColor: 'text-triune-accent',
    bgAccent: 'bg-triune-accent/10',
  },
  {
    id: 'neurolink',
    name: 'MindGuard NeuroSentry',
    category: 'AI + NeuroTech',
    tagline: 'Brain-computer interface for cognitive health.',
    description: 'Advanced neural sensing headset powered by adaptive AI. Monitors cognitive load, stress patterns, and neurological health markers for preventive care and performance optimization.',
    image: PRODUCT_IMAGES.neurosentry,
    specs: [
      { label: 'Sensors', value: '16-Channel EEG' },
      { label: 'Latency', value: '< 5ms' },
      { label: 'AI Model', value: 'Adaptive' },
    ],
    gradient: 'from-triune-purple via-triune-blue to-triune-accent',
    accentColor: 'text-triune-purple',
    bgAccent: 'bg-triune-purple/10',
  },
]

function ProductCard({ product, index, isInView }) {
  const isEven = index % 2 === 0
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${200 + index * 200}ms` }}
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
        {/* Image side */}
        <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
          {/* Glow background */}
          <div className={`absolute -inset-4 bg-gradient-to-br ${product.gradient} opacity-[0.07] blur-3xl rounded-3xl group-hover:opacity-[0.12] transition-opacity duration-700`} />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-triune-slate">
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-triune-dark/60 via-transparent to-transparent" />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${product.bgAccent} backdrop-blur-sm border border-white/10 text-xs font-semibold ${product.accentColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={`${!isEven ? 'lg:order-1 lg:text-right' : ''}`}>
          <div className={`inline-block mb-4 ${!isEven ? 'lg:ml-auto' : ''}`}>
            <span className={`text-sm font-semibold tracking-wider uppercase ${product.accentColor}`}>
              {product.category}
            </span>
          </div>

          <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3 leading-tight">
            {product.name}
          </h3>

          <p className={`text-lg font-medium mb-4 ${product.accentColor}`}>
            {product.tagline}
          </p>

          <p className="text-gray-400 leading-relaxed mb-8 text-base">
            {product.description}
          </p>

          {/* Specs */}
          <div className={`flex flex-wrap gap-3 ${!isEven ? 'lg:justify-end' : ''}`}>
            {product.specs.map(spec => (
              <div
                key={spec.label}
                className="glass-strong rounded-xl px-4 py-3 min-w-[120px]"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{spec.label}</div>
                <div className="font-heading font-bold text-white text-sm">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SharedAISection({ isInView }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={`mt-24 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
    >
      {/* Section label */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-triune-accent uppercase mb-4">
          Shared AI Core
        </span>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
          One Platform. <span className="gradient-text">Infinite Possibilities.</span>
        </h3>
        <p className="mt-3 max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
          All three products are powered by the Triune Adaptive AI Platform (TAAP) - a shared neural intelligence core that learns across domains.
        </p>
      </div>

      {/* AI Core image */}
      <div className="relative group max-w-4xl mx-auto">
        <div className="absolute -inset-4 bg-gradient-to-r from-triune-blue/10 via-triune-accent/10 to-triune-purple/10 blur-3xl rounded-3xl group-hover:opacity-75 transition-opacity duration-700" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-triune-blue/30 transition-all duration-500">
          <img
            src={PRODUCT_IMAGES.aicore}
            alt="Triune Adaptive AI Core Platform"
            className={`w-full h-auto transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-triune-dark/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Bottom info cards */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="glass-strong rounded-xl px-4 py-3 text-center border-rose-500/10">
            <span className="text-rose-400 text-xs font-semibold">HealthTech AI</span>
          </div>
          <div className="glass-strong rounded-xl px-4 py-3 text-center border-triune-accent/10">
            <span className="text-triune-accent text-xs font-semibold">Security AI</span>
          </div>
          <div className="glass-strong rounded-xl px-4 py-3 text-center border-triune-purple/10">
            <span className="text-triune-purple text-xs font-semibold">NeuroTech AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [ref, isInView] = useInView()

  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-triune-blue/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-triune-purple/4 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-triune-accent uppercase mb-6">
            Our Products
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Technology You Can{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            From wearable health intelligence to next-generation security infrastructure - tangible innovations built at the convergence of health, security, and AI.
          </p>
        </div>

        {/* Product cards */}
        <div className="space-y-24">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Shared AI Core showcase */}
        <SharedAISection isInView={isInView} />
      </div>
    </section>
  )
}
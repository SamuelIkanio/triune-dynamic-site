import { useState } from 'react'
import { useInView } from '../App'

const blueprints = [
  {
    id: 'bloodreader',
    name: 'BloodReader Pro',
    icon: '🩸',
    accentColor: 'text-rose-400',
    gradient: 'from-rose-500 to-triune-blue',
    borderAccent: 'border-rose-500/20',
    bom: [
      { component: 'Spectrophotometric Sensor Array', spec: 'Multi-wavelength NIR + visible light LEDs', supplier: 'Custom / ams-OSRAM' },
      { component: 'Photodetector Array', spec: 'InGaAs PIN photodiodes, SNR > 60dB', supplier: 'Hamamatsu Photonics' },
      { component: 'AI Processing Unit', spec: 'Edge TPU / Arm Cortex-M55 + Ethos-U55 NPU', supplier: 'Google / Arm' },
      { component: 'Biocompatible Housing', spec: 'Medical-grade silicone + titanium alloy', supplier: 'Custom tooling' },
      { component: 'Battery Module', spec: 'Li-Po 350mAh, wireless Qi charging', supplier: 'TDK / Murata' },
      { component: 'BLE 5.3 + UWB Radio', spec: 'Secure health data transmission', supplier: 'Nordic Semiconductor' },
      { component: 'MEMS Accelerometer + PPG', spec: 'Motion artefact compensation', supplier: 'STMicroelectronics' },
    ],
    materials: [
      'Medical-grade silicone elastomer (skin contact)',
      'Titanium Grade 5 (Ti-6Al-4V) — sensor housing',
      'Sapphire crystal — optical window (scratch-proof)',
      'Flexible PCB — polyimide substrate (Kapton)',
      'Biocompatible adhesive — ISO 10993 certified',
      'Gorilla Glass Victus — display cover',
    ],
    manufacturing: [
      { step: 1, name: 'Sensor Fabrication', desc: 'Cleanroom assembly of spectrophotometric array on flexible PCB. Multi-wavelength LED & photodetector alignment using precision pick-and-place.' },
      { step: 2, name: 'AI Chip Integration', desc: 'Wire bonding of edge NPU to main board. Firmware flashing with proprietary Triune AI models. Calibration burn-in testing.' },
      { step: 3, name: 'Housing Manufacture', desc: 'CNC machining of titanium sensor bezel. Injection moulding of medical-grade silicone strap. Sapphire crystal optical window bonding.' },
      { step: 4, name: 'Assembly & Sealing', desc: 'Robotic assembly of PCB, battery, sensors into housing. IP68 waterproof sealing. Wireless charging coil alignment.' },
      { step: 5, name: 'Calibration & QA', desc: 'Per-unit optical calibration against reference blood samples. 72-hour burn-in test. ISO 13485 medical device compliance verification.' },
      { step: 6, name: 'Packaging & Sterilisation', desc: 'ETO sterilisation of skin-contact surfaces. Cleanroom packaging. Regulatory documentation bundling (CE / UKCA / FDA 510k).' },
    ],
  },
  {
    id: 'sentinel',
    name: 'SecureScan Sentinel',
    icon: '🛡️',
    accentColor: 'text-triune-accent',
    gradient: 'from-triune-blue to-triune-accent',
    borderAccent: 'border-triune-accent/20',
    bom: [
      { component: 'mmWave Radar Array', spec: '60–90 GHz FMCW radar, 4D imaging', supplier: 'Texas Instruments / Infineon' },
      { component: 'Multi-spectral Camera System', spec: 'Visible + NIR + SWIR bands', supplier: 'FLIR / Teledyne' },
      { component: 'AI Inference Engine', spec: 'NVIDIA Jetson Orin NX, 100 TOPS', supplier: 'NVIDIA' },
      { component: 'Pulse Induction Metal Detector', spec: 'Multi-zone, 33+ detection regions', supplier: 'Custom coil array' },
      { component: 'LED Illumination System', spec: 'Architectural-grade cyan LED strips', supplier: 'Lumileds / CREE' },
      { component: 'Structural Frame', spec: 'Aerospace-grade aluminium extrusion', supplier: 'Custom CNC' },
      { component: 'Network & Comms Module', spec: '5G + Wi-Fi 6E + Ethernet (PoE+)', supplier: 'Qualcomm / Intel' },
    ],
    materials: [
      'Aluminium 6082-T6 — structural frame (anodised black)',
      'Polycarbonate panels — impact-resistant, UL94 V-0 fire rated',
      'EMI shielding mesh — copper-nickel woven fabric',
      'Anti-vibration mounts — aerospace-grade silicone dampers',
      'Thermal management — graphene heat spreaders + copper heatpipes',
      'Tempered safety glass — display panel (IK10 vandal-proof)',
    ],
    manufacturing: [
      { step: 1, name: 'Frame Fabrication', desc: 'CNC machining of aluminium extrusion profiles. Anodising in matte black finish. Precision welding of structural joints with robotic MIG welders.' },
      { step: 2, name: 'Sensor Integration', desc: 'Radar array calibration and mounting. Multi-spectral camera alignment using laser jigs. Pulse induction coil winding and zone mapping.' },
      { step: 3, name: 'AI Core Assembly', desc: 'NVIDIA Jetson Orin NX integration with custom carrier board. Thermal solution installation. AI model deployment and edge inference benchmarking.' },
      { step: 4, name: 'Electrical Systems', desc: 'Power distribution unit assembly. LED strip installation and colour calibration. Network module integration with antenna tuning.' },
      { step: 5, name: 'System Integration & Testing', desc: 'Full gate assembly in controlled environment. Multi-threat test protocol (metallic, ceramic, liquid, electronic). 10,000-scan burn-in test cycle.' },
      { step: 6, name: 'Certification & Deployment', desc: 'CE/UKCA electromagnetic compatibility testing. CPNI (Centre for Protection of National Infrastructure) evaluation. Mil-STD-810G environmental testing.' },
    ],
  },
  {
    id: 'neurosentry',
    name: 'MindGuard NeuroSentry',
    icon: '🧠',
    accentColor: 'text-triune-purple',
    gradient: 'from-triune-purple to-triune-blue',
    borderAccent: 'border-triune-purple/20',
    bom: [
      { component: 'Dry EEG Electrode Array', spec: '16-channel, Ag/AgCl dry contacts', supplier: 'Custom / g.tec' },
      { component: 'EEG Acquisition IC', spec: '24-bit ADC, 8 differential channels ×2', supplier: 'Texas Instruments ADS1299' },
      { component: 'Neural AI Processor', spec: 'Arm Cortex-M85 + Ethos-U85 NPU', supplier: 'Arm / Nordic' },
      { component: 'IMU (Inertial Measurement Unit)', spec: '9-axis, motion artefact rejection', supplier: 'Bosch BNO085' },
      { component: 'Bluetooth 5.3 LE Audio', spec: 'Secure neural data streaming', supplier: 'Nordic Semiconductor' },
      { component: 'Battery Module', spec: 'Li-Po 800mAh, 12hr continuous use', supplier: 'Murata' },
      { component: 'Biocompatible Headband', spec: 'Adjustable, medical-grade polymer', supplier: 'Custom injection mould' },
    ],
    materials: [
      'PEEK (Polyether ether ketone) — structural frame (biocompatible)',
      'Ag/AgCl (Silver-Silver Chloride) — dry EEG electrodes',
      'Medical-grade TPU — skin contact padding',
      'Flexible PCB — polyimide (6-layer stack-up)',
      'EMI shielding — mu-metal foil for neural signal integrity',
      'Silicone over-mould — cable strain relief and comfort',
    ],
    manufacturing: [
      { step: 1, name: 'Electrode Fabrication', desc: 'Precision machining of Ag/AgCl dry electrode tips. Surface treatment for optimal skin-electrode impedance. Array mounting on flexible carrier.' },
      { step: 2, name: 'PCB Assembly', desc: 'SMT placement of ADS1299 acquisition ICs and NPU. 6-layer flexible PCB reflow soldering. EMI shielding layer application.' },
      { step: 3, name: 'Headband Manufacture', desc: 'Injection moulding of PEEK structural frame. TPU comfort padding bonding. Adjustable tension mechanism assembly.' },
      { step: 4, name: 'Integration & Calibration', desc: 'Electrode array integration into headband. Per-channel impedance calibration. AI model loading and neural signal verification.' },
      { step: 5, name: 'Environmental Testing', desc: '48-hour continuous wear comfort trial. ESD and EMI susceptibility testing. Battery cycle life validation (500+ cycles).' },
      { step: 6, name: 'Clinical Validation', desc: 'Comparison testing against clinical EEG reference (Natus/Nihon Kohden). ISO 62304 software lifecycle compliance. Clinical data package for CE medical device classification.' },
    ],
  },
]

function BOMTable({ bom }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-gray-500">Component</th>
            <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-gray-500">Specification</th>
            <th className="text-left px-4 py-3 text-xs font-semibold tracking-wider uppercase text-gray-500 hidden sm:table-cell">Source</th>
          </tr>
        </thead>
        <tbody>
          {bom.map((item, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
              <td className="px-4 py-3 font-medium text-white">{item.component}</td>
              <td className="px-4 py-3 text-gray-400">{item.spec}</td>
              <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MaterialsList({ materials }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {materials.map((mat, i) => (
        <div key={i} className="flex items-start gap-3 glass rounded-lg px-4 py-3">
          <div className="w-1.5 h-1.5 rounded-full bg-triune-accent mt-2 shrink-0" />
          <span className="text-sm text-gray-300">{mat}</span>
        </div>
      ))}
    </div>
  )
}

function ManufacturingSteps({ steps, gradient }) {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div key={step.step} className="flex gap-4 group">
          <div className="flex flex-col items-center shrink-0">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {step.step}
            </div>
            {step.step < steps.length && <div className="w-px h-full bg-white/10 mt-1" />}
          </div>
          <div className="pb-4">
            <h5 className="font-heading font-bold text-white text-sm mb-1">{step.name}</h5>
            <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function BlueprintCard({ blueprint, index }) {
  const [ref, isInView] = useInView()
  const [activeTab, setActiveTab] = useState('bom')

  const tabs = [
    { id: 'bom', label: 'Bill of Materials' },
    { id: 'materials', label: 'Materials' },
    { id: 'manufacturing', label: 'Manufacturing' },
  ]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Product header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${blueprint.gradient} flex items-center justify-center text-xl shadow-lg`}>
          {blueprint.icon}
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-white">{blueprint.name}</h3>
          <span className={`text-xs font-semibold tracking-wider uppercase ${blueprint.accentColor}`}>Technical Blueprint</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 glass rounded-xl mb-6 w-fit flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-triune-blue text-white shadow-lg shadow-triune-blue/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className={`glass-strong rounded-2xl p-5 sm:p-6 border ${blueprint.borderAccent}`}>
        {activeTab === 'bom' && <BOMTable bom={blueprint.bom} />}
        {activeTab === 'materials' && <MaterialsList materials={blueprint.materials} />}
        {activeTab === 'manufacturing' && <ManufacturingSteps steps={blueprint.manufacturing} gradient={blueprint.gradient} />}
      </div>
    </div>
  )
}

export default function TechBlueprint() {
  const [ref, isInView] = useInView()

  return (
    <section id="technology" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-triune-accent/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Section divider line */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-triune-blue/30 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-triune-accent uppercase mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            Technical Blueprint
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Engineering <span className="gradient-text">Transparency</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Full component-level disclosure for partners, investors, and regulators. Every material, every chip, every manufacturing step — because trust is built through transparency.
          </p>
        </div>

        {/* Blueprint cards */}
        <div className="space-y-16">
          {blueprints.map((bp, i) => (
            <BlueprintCard key={bp.id} blueprint={bp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

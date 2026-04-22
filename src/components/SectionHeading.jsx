export default function SectionHeading({ badge, title, highlight, description }) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-triune-accent uppercase mb-6">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

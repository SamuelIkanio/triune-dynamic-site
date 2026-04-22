const LOGO_URL = 'https://customer-assets.emergentagent.com/wingman/30a2500c-8f3e-445c-8d5f-ab2a7ec36203/attachments/35369b1a85204c6a9a63992956a744d3_Logo.jpeg'

export default function TriuneLogo({ size = 40, className = '' }) {
  return (
    <img
      src={LOGO_URL}
      alt="Triune Dynamic Limited"
      width={size}
      height={size}
      className={`rounded-lg object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export default function Logo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M36 10C33 5 27 2 20 2C10 2 2 10 2 20C2 30 10 38 20 38C27 38 33 35 36 30"
        stroke="var(--color-accent, #ff3366)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M28 17H40V23H28Z" fill="var(--color-accent, #ff3366)"/>
    </svg>
  )
}

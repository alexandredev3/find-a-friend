type Variants = 'contained' | 'empty'

type PetSizeIconProps = {
  variant: Variants
}

const ICON_VARIANTS = {
  contained: (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#0D3B66" />
    </svg>
  ),
  empty: (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.2" cx="6" cy="6" r="6" fill="#0D3B66" />
    </svg>
  ),
}

export function PetSizeIcon({ variant }: PetSizeIconProps) {
  return ICON_VARIANTS[variant]
}

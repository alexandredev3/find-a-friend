type Variants = 'outline' | 'contained'

type FlashIconProps = {
  variant: Variants
}

const ICON_VARIANTS = {
  outline: (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1 13H10L9 21L19 9H10L11 1Z"
        stroke="#0D3B66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  contained: (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path opacity="0.2" d="M10 0L0 12H9L8 20L18 8H9L10 0Z" fill="#0D3B66" />
    </svg>
  ),
}

export function FlashIcon({ variant }: FlashIconProps) {
  return ICON_VARIANTS[variant]
}

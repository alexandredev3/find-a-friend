import { cloneElement } from 'react'

type RatingProps = {
  value: number
  max: number
  labels: {
    [value: number]: string
  }
  ratedIcon: JSX.Element
  unratedIcon: JSX.Element
}

export function Rating({
  value,
  labels,
  max,
  ratedIcon,
  unratedIcon,
}: RatingProps) {
  const icones = Array.from<number>({
    length: max,
  }).map((_) => cloneElement(unratedIcon, { key: _ }))

  icones.fill(ratedIcon, 0, value)

  const label = labels[value]

  return (
    <div className="rating_container">
      <div className="rating_icones_wrapper">{icones}</div> <span>{label}</span>
    </div>
  )
}

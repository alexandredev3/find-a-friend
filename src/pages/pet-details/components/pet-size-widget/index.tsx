import { Container } from './styles'

import { PetSizeIcon } from '~/assets/icons/pet-size-icon'

import type { PetSize } from 'shared/typings/pets'
import { Rating } from 'shared/components/primitives'

type SizeCardProps = {
  size: PetSize
}

const MAX_SIZE = 3

const LABELS_BASED_ON_SIZE_LEVEL = {
  1: 'Pequenino',
  2: 'Medio',
  3: 'Grande',
}

const getSizeInNumberFormat = (size: PetSize) => {
  let sizeValue = 0

  switch (size) {
    case 'small': {
      sizeValue = 1
      break
    }
    case 'medium': {
      sizeValue = 2
      break
    }
    case 'big': {
      sizeValue = 3
      break
    }
  }

  return sizeValue
}

export function PetSizeWidget({ size }: SizeCardProps) {
  const sizeInNumberFormat = getSizeInNumberFormat(size)

  return (
    <Container>
      <Rating
        value={sizeInNumberFormat}
        labels={LABELS_BASED_ON_SIZE_LEVEL}
        max={MAX_SIZE}
        ratedIcon={<PetSizeIcon variant="contained" />}
        unratedIcon={<PetSizeIcon variant="empty" />}
      />
    </Container>
  )
}

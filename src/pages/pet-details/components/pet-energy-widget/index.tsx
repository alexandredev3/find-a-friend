import { Container } from './styles'

import { FlashIcon } from '~/assets/icons/flash-icon'

import type { PetEnergy } from 'shared/typings/pets'
import { Rating } from 'shared/components/primitives'

type EnergyCardProps = {
  level: PetEnergy
}

const MAX_ENERGY_LEVEL = 5

const LABELS_BASED_ON_ENERGY_LEVEL = {
  1: 'Pouca energia',
  2: 'Energia razoavel',
  3: 'Energetico',
  4: 'Muita energia',
  5: 'Energia Extrema',
}

export function PetEnergyWidget({ level }: EnergyCardProps) {
  return (
    <Container>
      <Rating
        value={level}
        labels={LABELS_BASED_ON_ENERGY_LEVEL}
        max={MAX_ENERGY_LEVEL}
        ratedIcon={<FlashIcon variant="outline" />}
        unratedIcon={<FlashIcon variant="contained" />}
      />
    </Container>
  )
}

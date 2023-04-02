import { Container } from './styles'

import { Maximize } from '~/assets/icons/maximize'

type PetEnvironmentWidgetProps = {
  enviroment: string
}

export function PetEnvironmentWidget({
  enviroment,
}: PetEnvironmentWidgetProps) {
  return (
    <Container>
      <div>
        <Maximize />
        <span>{enviroment}</span>
      </div>
    </Container>
  )
}

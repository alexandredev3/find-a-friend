import {
  Await,
  defer,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom'
import type { ActionFunction, LoaderFunction } from 'react-router-dom'
import invariant from 'tiny-invariant'

import { Aside } from './aside'
import { Card } from 'shared/components/card'
import { PetsService } from './pets-service'

import type {
  PetAge,
  PetEnergy,
  PetIndependence,
  PetSize,
  PetType,
} from 'shared/typings/pets'
import { getPageQueryParams } from 'shared/utils/getPageQueryParams'

import chevron from '~/assets/icons/chevron-bottom-blue.svg'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'
import { Suspense } from 'react'

type PetsResponse = {
  data: {
    pets: {
      id: string
      name: string
      type: PetType
      photo_url: string
    }[]
  }
}

export const mapAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const city = formData.get('city')?.toString()
  const petAge = formData.get('age')?.toString()
  const petEnergy = formData.get('energy')?.toString()
  const petSize = formData.get('size')?.toString()
  const petType = formData.get('type')?.toString() ?? 'all'
  const petIndependency = formData.get('independency')?.toString()

  invariant(city, 'city was not provider')
  invariant(petAge, 'pet age was not provider')
  invariant(petEnergy, 'pet energy was not provider')
  invariant(petSize, 'pet size was not provider')
  invariant(petIndependency, 'pet independecy was not provider')
  invariant(petType, 'pet type was not provider')

  const redirectQueryParams = new URLSearchParams({
    city,
    age: petAge,
    energy: petEnergy,
    size: petSize,
    independence: petIndependency,
    type: petType,
  })

  return redirect(`/map?${redirectQueryParams}`)
}

export const mapLoader: LoaderFunction = ({ request }) => {
  const petsService = new PetsService()
  const url = new URL(request.url)
  const queryParams = new URLSearchParams(url.search)

  const city = queryParams.get('city') as string | undefined
  const petAge = queryParams.get('age') as PetAge | undefined
  const petEnergy = queryParams.get('energy') as unknown as
    | PetEnergy
    | undefined
  const petSize = queryParams.get('size') as PetSize | undefined
  const petType = queryParams.get('type') as PetType | undefined
  const petIndependence = queryParams.get('independence') as
    | PetIndependence
    | undefined

  invariant(city, 'city was not provider')

  const response = petsService.getPets({
    city,
    age: petAge,
    energy: petEnergy,
    size: petSize,
    independence: petIndependence,
    type: petType,
  })

  return defer({ petsResponse: response })
}

export function Map() {
  const navigate = useNavigate()
  const data = useLoaderData<{ petsResponse: PetsResponse }>()

  function handleFilterByPetType(type: string) {
    const newQueryParams = getPageQueryParams()

    newQueryParams.set('type', type)

    navigate(`/map?${newQueryParams.toString()}`)
  }

  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              onChange={(e) => handleFilterByPetType(e.currentTarget.value)}
              name="size"
              id="size"
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          <Suspense fallback={<h1>Carregando...</h1>}>
            <Await resolve={data.petsResponse}>
              {(petsResponse: PetsResponse) =>
                petsResponse.data.pets.map((pet) => (
                  <Card
                    key={pet.id}
                    path={pet.photo_url}
                    type={pet.type}
                    name={pet.name}
                  />
                ))
              }
            </Await>
          </Suspense>
        </Display>
      </Content>
    </Container>
  )
}

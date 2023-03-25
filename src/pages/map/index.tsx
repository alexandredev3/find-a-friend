import { Suspense } from 'react'
import {
  Await,
  defer,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom'
import type { ActionFunction, LoaderFunction } from 'react-router-dom'
import invariant from 'tiny-invariant'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'

import { Aside } from './aside'
import { PetsService } from './pets-service'

import chevron from '~/assets/icons/chevron-bottom-blue.svg'

import { Card } from 'shared/components/card'
import type {
  PetAge,
  PetEnergy,
  PetIndependence,
  PetSize,
  PetType,
} from 'shared/typings/pets'
import { getPageQueryParams } from 'shared/utils/getPageQueryParams'
import { removeDiacritics } from 'shared/utils/removeDiacritics'

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
  const queryParams = getPageQueryParams()

  const city = formData.get('city')?.toString()
  const petAge = formData.get('age')?.toString()
  const petEnergy = formData.get('energy')?.toString()
  const petSize = formData.get('size')?.toString()
  const petIndependency = formData.get('independency')?.toString()

  const petType = queryParams.get('type') ?? 'all'

  invariant(city, 'city was not provided')
  invariant(petAge, 'pet age was not provided')
  invariant(petEnergy, 'pet energy was not provided')
  invariant(petSize, 'pet size was not provided')
  invariant(petIndependency, 'pet independecy was not provided')
  invariant(petType, 'pet type was not provided')

  queryParams.set('city', city)
  queryParams.set('age', petAge)
  queryParams.set('energy', petEnergy)
  queryParams.set('size', petSize)
  queryParams.set('independence', petIndependency)
  queryParams.set('type', petType)

  return redirect(`/map?${queryParams.toString()}`)
}

export const mapLoader: LoaderFunction = () => {
  const petsService = new PetsService()
  const queryParams = getPageQueryParams()

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

  invariant(city, 'city was not provided')

  const cityFormatted = removeDiacritics(city)

  const response = petsService.getPets({
    city: cityFormatted,
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
          <Suspense fallback={<h1>Carregando...</h1>}>
            <Await resolve={data.petsResponse}>
              {(petsResponse: PetsResponse) => {
                const petsAmount = petsResponse.data.pets.length

                return petsAmount > 0 ? (
                  <p>
                    Encontre <span>{petsAmount} amigos</span> na sua cidade
                  </p>
                ) : (
                  <p>Nenhum amigo foi encontrado na sua cidade :(</p>
                )
              }}
            </Await>
          </Suspense>
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

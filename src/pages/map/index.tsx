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
import { petValidator } from './pet-validator'

import chevron from '~/assets/icons/chevron-bottom-blue.svg'

import { Card } from 'shared/components/card'
import type {
  PetAge,
  PetEnergy,
  PetIndependence,
  PetSize,
  PetType,
} from 'shared/typings/pets'
import { getPageQueryParams } from 'shared/utils/get-page-query-params'
import { removeDiacritics } from 'shared/utils/remove-diacritics'

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
  const fieldValues = await petValidator.validate(await request.formData())
  const queryParams = getPageQueryParams()

  if (fieldValues.error) {
    return fieldValues
  }

  const { city, age, size, energy, independency } = fieldValues.data
  const petType = queryParams.get('type') ?? 'all'

  console.log({
    field: fieldValues.data,
  })

  queryParams.set('city', city)
  queryParams.set('age', age)
  queryParams.set('energy', energy)
  queryParams.set('size', size)
  queryParams.set('independency', independency)
  queryParams.set('type', petType)

  return redirect(`/map?${queryParams.toString()}`)
}

export const mapLoader: LoaderFunction = ({ request }) => {
  const petsService = new PetsService()
  const queryParams = getPageQueryParams(request.url)

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
  const loaderData = useLoaderData<{ petsResponse: PetsResponse }>()

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
            <Await resolve={loaderData.petsResponse}>
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
            <Await resolve={loaderData.petsResponse}>
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

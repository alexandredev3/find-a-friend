import { Suspense, useEffect, useState } from 'react'
import { defer, useLoaderData, Await, redirect } from 'react-router-dom'
import type { LoaderFunction, ActionFunction } from 'react-router-dom'

import {
  Container,
  Content,
  Header,
  Display,
  Form,
  SelectWrapper,
  StateSelectWrapper,
  CitySelectWrapper,
} from './styles'

import { Logo } from '~/assets/icons/logo'
import { Search } from '~/assets/icons/search'
import { Select, Button } from 'shared/components/primitives'
import { Status } from 'shared/constants/status'
import { LocationService } from './location-service'

type LocationStatesResponse = {
  data: {
    states: {
      id: number
      sigla: string
      nome: string
    }[]
  }
}

type LocationCity = {
  code: string
  name: string
}

const locationService = new LocationService()

export const homeLoader: LoaderFunction = async () => {
  const response = locationService.getStates()

  return defer({
    locationStatesResponse: response,
  })
}

export const homeAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const queryParams = new URLSearchParams({
    state: formData.get('state')?.toString()!,
    city: formData.get('city')?.toString()!,
  })

  return redirect('/map?' + queryParams)
}

export function Home() {
  const data = useLoaderData<{
    locationStatesResponse: Promise<any>
    locationCitiesResponse: Promise<any>
  }>()
  const [cities, setCities] = useState<LocationCity[]>([])
  const [currentSelectedLocationState, setCurrentSelectedLocationState] =
    useState('')
  const [citiesDataStatus, setCititesDataStatus] = useState<Status>(Status.IDLE)

  async function handleChangeState(state: string) {
    setCurrentSelectedLocationState(state)
  }

  useEffect(() => {
    const getCities = async () => {
      try {
        if (!currentSelectedLocationState) return
        setCititesDataStatus(Status.LOADING)
        const response = await locationService.getCities(
          currentSelectedLocationState,
        )
        const cities = response.data.citys

        setCities(cities)
        setCititesDataStatus(Status.SUCCESS)
      } catch (error) {
        setCititesDataStatus(Status.ERROR)

        throw error
      }
    }

    getCities()
  }, [currentSelectedLocationState])

  return (
    <Container>
      <Content>
        <Header>
          <Logo />
        </Header>

        <Display>
          <h1>Leve a felicidade para o seu lar</h1>
          <img
            src="illustrations/animals_illustration.png"
            alt="Animais illustração"
          />
        </Display>

        <Form method="post">
          <h3>Encontre o animal de estimação ideal para seu estilo de vida!</h3>

          <SelectWrapper>
            <StateSelectWrapper>
              <Select className="Select">
                <Select.Label className="SelectLabel">
                  Busque um amigo:
                </Select.Label>

                <Select.Viewport className="SelectViewport">
                  <Select.Input
                    name="state"
                    onChange={(e) => handleChangeState(e.currentTarget.value)}
                  >
                    <Select.Option disabled selected>
                      UF
                    </Select.Option>
                    <Suspense
                      fallback={
                        <Select.Option disabled>Carregando...</Select.Option>
                      }
                    >
                      <Await resolve={data.locationStatesResponse}>
                        {(
                          resolvedLocationStatesResponse: LocationStatesResponse,
                        ) =>
                          resolvedLocationStatesResponse.data.states?.map(
                            (state) => (
                              <Select.Option key={state.id}>
                                {state.sigla}
                              </Select.Option>
                            ),
                          )
                        }
                      </Await>
                    </Suspense>
                  </Select.Input>
                  <Select.Icon />
                </Select.Viewport>
              </Select>
            </StateSelectWrapper>

            <CitySelectWrapper>
              <Select className="Select">
                <Select.Viewport className="SelectViewport">
                  <Select.Input
                    name="city"
                    className="SelectInput"
                    disabled={
                      !currentSelectedLocationState ||
                      citiesDataStatus === Status.LOADING
                    }
                  >
                    <Select.Option disabled selected>
                      Cidade
                    </Select.Option>
                    {citiesDataStatus === Status.LOADING ? (
                      <Select.Option>Carregando...</Select.Option>
                    ) : null}
                    {citiesDataStatus === Status.SUCCESS
                      ? cities.map((city) => (
                          <Select.Option key={city.code}>
                            {city.name}
                          </Select.Option>
                        ))
                      : null}
                  </Select.Input>
                  <Select.Icon />
                </Select.Viewport>
              </Select>
            </CitySelectWrapper>

            <Button className="SearchButton" type="submit">
              <Button.Icon>
                <Search />
              </Button.Icon>
            </Button>
          </SelectWrapper>
        </Form>
      </Content>
    </Container>
  )
}

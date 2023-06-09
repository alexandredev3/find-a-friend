import { Suspense } from 'react'
import {
  defer,
  Await,
  redirect,
  useRouteLoaderData,
  useActionData,
} from 'react-router-dom'
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
import { routesIds } from 'shared/routes/routes-ids'
import { Status } from 'shared/constants/status'
import { LocationService } from 'shared/services/http/LocationService'
import { useCityLocation } from 'shared/hooks/useCityLocation'
import { ValidationResult } from 'shared/typings/validation'
import { locationValidator, type LocationFields } from './location-validator'

type LocationStatesResponse = {
  data: {
    states: {
      id: number
      sigla: string
      nome: string
    }[]
  }
}

const locationService = new LocationService()

export const homeLoader: LoaderFunction = async () => {
  const response = locationService.getStates()

  return defer({
    locationStatesResponse: response,
  })
}

export const homeAction: ActionFunction = async ({ request }) => {
  const fieldValues = await locationValidator.validate(await request.formData())

  if (fieldValues.error) {
    return fieldValues
  }

  const { state, city } = fieldValues.data

  const queryParams = new URLSearchParams({
    state,
    city,
  })

  return redirect('/map?' + queryParams)
}

export function Home() {
  const loaderData = useRouteLoaderData<{
    locationStatesResponse: Promise<any>
  }>(routesIds.root)
  const actionData = useActionData<ValidationResult<LocationFields>>()
  const {
    changeLocationState,
    currentSelectedLocationState,
    cities,
    citiesDataStatus,
  } = useCityLocation()

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

                <Select.Viewport
                  className="SelectViewport"
                  error={actionData?.error?.fieldErrors.state}
                >
                  <Select.Input
                    name="state"
                    onChange={(e) => changeLocationState(e.currentTarget.value)}
                    required
                  >
                    <Select.Option disabled selected>
                      UF
                    </Select.Option>
                    <Suspense
                      fallback={
                        <Select.Option disabled>Carregando...</Select.Option>
                      }
                    >
                      <Await resolve={loaderData.locationStatesResponse}>
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
                <Select.Viewport
                  className="SelectViewport"
                  error={actionData?.error?.fieldErrors.city}
                >
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

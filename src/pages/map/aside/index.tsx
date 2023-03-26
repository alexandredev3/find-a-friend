import { Suspense, useState } from 'react'
import { Await, useRouteLoaderData } from 'react-router-dom'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
  AsideForm,
} from './styles'

import logo from '~/assets/icons/logo.svg'
import { Search } from '~/assets/icons/search'

import { Button, Select } from 'shared/components/primitives'
import { getPageQueryParams } from 'shared/utils/get-page-query-params'
import { routesIds } from 'shared/routes/routes-ids'
import { useCityLocation } from 'shared/hooks/useCityLocation'
import { Status } from 'shared/constants/status'

type LocationStatesResponse = {
  data: {
    states: {
      id: number
      sigla: string
      nome: string
    }[]
  }
}

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

export function Aside() {
  const queryParams = getPageQueryParams()
  const city = queryParams.get('city')
  const state = queryParams.get('state')

  const data = useRouteLoaderData<{
    locationStatesResponse: Promise<any>
  }>(routesIds.root)
  const {
    changeLocationState,
    currentSelectedLocationState,
    cities,
    citiesDataStatus,
  } = useCityLocation(state ?? '')
  const [currentCitySelected, setCurrentCitySelected] = useState(city ?? '')

  return (
    <Container>
      <AsideForm method="post" action="/map">
        <AsideHeader>
          <div>
            <img src={logo} alt="" />
            <HeaderInput>
              <Select className="StateSelect">
                <Select.Viewport className="StateSelectViewport">
                  <Select.Input
                    name="state"
                    onChange={(e) => changeLocationState(e.currentTarget.value)}
                    value={currentSelectedLocationState}
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

              <Select className="CitySelect">
                <Select.Viewport className="CitySelectViewport">
                  <Select.Input
                    name="city"
                    className="SelectInput"
                    disabled={
                      !currentSelectedLocationState ||
                      citiesDataStatus === Status.LOADING
                    }
                    value={currentCitySelected}
                    onChange={(e) =>
                      setCurrentCitySelected(e.currentTarget.value)
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
              <Button className="SearchButton" type="submit">
                <Button.Icon>
                  <Search />
                </Button.Icon>
              </Button>
            </HeaderInput>
          </div>
        </AsideHeader>
        <AsideContent>
          <ContentHeader>Filtros</ContentHeader>
          <ContentFilters>
            <Select>
              <Select.Label>Idade</Select.Label>
              <Select.Viewport>
                <Select.Input name="age">
                  {ageOptions.map((ageOption) => (
                    <Select.Option
                      key={ageOption.value}
                      value={ageOption.value}
                    >
                      {ageOption.label}
                    </Select.Option>
                  ))}
                </Select.Input>
                <Select.Icon />
              </Select.Viewport>
            </Select>

            <Select>
              <Select.Label>Nível de energia</Select.Label>
              <Select.Viewport>
                <Select.Input name="energy">
                  {energyOptions.map((energyOption) => (
                    <Select.Option
                      key={energyOption.value}
                      value={energyOption.value}
                    >
                      {energyOption.label}
                    </Select.Option>
                  ))}
                </Select.Input>
                <Select.Icon />
              </Select.Viewport>
            </Select>

            <Select>
              <Select.Label>Porte do animal</Select.Label>
              <Select.Viewport>
                <Select.Input name="size">
                  {sizeOptions.map((sizeOption) => (
                    <Select.Option
                      key={sizeOption.value}
                      value={sizeOption.value}
                    >
                      {sizeOption.label}
                    </Select.Option>
                  ))}
                </Select.Input>
                <Select.Icon />
              </Select.Viewport>
            </Select>

            <Select>
              <Select.Label>Nível de independência</Select.Label>
              <Select.Viewport>
                <Select.Input name="independency">
                  {independencyOptions.map((independencyOption) => (
                    <Select.Option
                      key={independencyOption.value}
                      value={independencyOption.value}
                    >
                      {independencyOption.label}
                    </Select.Option>
                  ))}
                </Select.Input>
                <Select.Icon />
              </Select.Viewport>
            </Select>
          </ContentFilters>
        </AsideContent>
      </AsideForm>
    </Container>
  )
}

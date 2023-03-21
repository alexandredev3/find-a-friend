import { Button, Select } from 'shared/components/primitives'
import { getPageQueryParams } from 'shared/utils/getPageQueryParams'

import logo from '~/assets/icons/logo.svg'
import { Search } from '~/assets/icons/search'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
  AsideForm,
} from './styles'

type MapQueryParams = {
  city: string
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
  const queryParams = getPageQueryParams<MapQueryParams>()
  const city = queryParams.get('city')

  return (
    <Container>
      <AsideForm method="post" action="/map">
        <AsideHeader>
          <div>
            <img src={logo} alt="" />
            <HeaderInput>
              <input
                name="city"
                type="text"
                placeholder="Insira uma cidade"
                value={city ?? ''}
              />
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

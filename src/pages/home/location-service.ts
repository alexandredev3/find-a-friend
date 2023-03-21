import { BaseAPI } from 'shared/lib/BaseAPI'

interface StateResponse {
  states: {
    id: number
    sigla: string
    nome: string
  }[]
}

interface CityResponse {
  citys: {
    name: string
    code: string
  }[]
}

export class LocationService extends BaseAPI {
  constructor() {
    super('/location')
  }

  public async getStates() {
    return this.get<StateResponse>('/states')
  }

  public getCities(uf: string) {
    // API route typo :(
    return this.get<CityResponse>(`/citys/${uf}`)
  }
}

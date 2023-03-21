import { BaseAPI } from '../lib/BaseAPI'

import type {
  PetAge,
  PetEnergy,
  PetIndependence,
  PetSize,
  PetType,
} from '../typings/pets'

type GetPetsQuery = {
  city: string
  age?: PetAge
  energy?: PetEnergy
  independence?: PetIndependence
  size?: PetSize
  type?: PetType
}

type PetsResponse = {
  pets: {
    id: string
    name: string
    description: string
    city: string
    age: string
    energy: number
    size: string
    independence: string
    type: string
    photo: string
    orgId: string
    photo_url: string
  }[]
}

export class PetsService extends BaseAPI {
  constructor() {
    super('/pets')
  }

  public async getPets(queryParams: GetPetsQuery) {
    return this.get<PetsResponse>(`/${queryParams.city}`, {
      params: queryParams,
    })
  }
}

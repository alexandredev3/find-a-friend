import { useCallback, useEffect, useState } from 'react'

import { LocationService } from '../services/http/LocationService'

import { Status } from '../constants/status'

type LocationCity = {
  code: string
  name: string
}

const locationService = new LocationService()

export function useCityLocation(initialSelectedLocationState = '') {
  const [currentSelectedLocationState, setCurrentSelectedLocationState] =
    useState(initialSelectedLocationState)
  const [cities, setCities] = useState<LocationCity[]>([])
  const [citiesDataStatus, setCititesDataStatus] = useState<Status>(Status.IDLE)

  const changeLocationState = useCallback((state: string) => {
    setCurrentSelectedLocationState(state)
  }, [])

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

  return {
    changeLocationState,
    currentSelectedLocationState,
    cities,
    citiesDataStatus,
  }
}

import { createBrowserRouter } from 'react-router-dom'

import { Home, homeAction, homeLoader } from '~/pages/home'
import { Map, mapAction, mapLoader } from '~/pages/map'
import { PetDetails } from '~/pages/pet-details'

import { routesIds } from './routes-ids'

export const router = createBrowserRouter([
  {
    id: routesIds.root,
    loader: homeLoader,
    children: [
      {
        path: '/',
        element: <Home />,
        action: homeAction,
      },
      {
        path: '/map',
        element: <Map />,
        loader: mapLoader,
        action: mapAction,
      },
    ],
  },
  {
    path: 'pet/details/:pet_id',
    element: <PetDetails />,
  },
])

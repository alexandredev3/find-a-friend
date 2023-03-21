import { createBrowserRouter } from 'react-router-dom'

import { Home, homeAction, homeLoader } from '~/pages/home'
import { Map, mapAction, mapLoader } from '~/pages/map'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: homeLoader,
    action: homeAction,
  },
  {
    path: '/map',
    element: <Map />,
    loader: mapLoader,
    action: mapAction,
  },
])

import { PointExpression, icon } from 'leaflet'

import mapMarkerIcon from '~/assets/icons/map-marker-icon.svg'

const ICON_URL = mapMarkerIcon
const ICON_SIZE: PointExpression = [65.22, 72]

export const customMapMarkerIcon = icon({
  iconUrl: ICON_URL,
  iconSize: ICON_SIZE,
})

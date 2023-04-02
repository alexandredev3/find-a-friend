import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import { Container, MapFooter } from './styles'

import { customMapMarkerIcon } from './custom-map-marker-icon'

import 'leaflet/dist/leaflet.css'

export function PetLocationMap() {
  return (
    <>
      <Container>
        <MapContainer
          style={{ width: '100%', height: '100%' }}
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={customMapMarkerIcon} />
        </MapContainer>
      </Container>
      <MapFooter>
        <button>
          <span>Ver rotas no Google Maps</span>
        </button>
      </MapFooter>
    </>
  )
}

import {
  Container,
  Content,
  PetInfoWrapper,
  PetAttributes,
  PetOrgContactWrapper,
  PetOrgAddress,
  PetOrgWhatsappContactButton,
  PetRequirementsForAdoption,
  PetRequirementsForAdoptionCardsWrapper,
  PetRequirementsForAdoptionCard,
  PetOrgContactButton,
} from './styles'

import { PetIcon } from '~/assets/icons/pet-icon'
import { WhatsappIcon } from '~/assets/icons/whatsapp-icon'
import { WhatsappOutlineIcon } from '~/assets/icons/whatsapp-outline-icon'
import { AlertIcon } from '~/assets/icons/alert-icon'

import { Divider } from 'shared/components/divider'

import { PetImageGallery } from './components/pet-image-gallery'
import { PetEnergyWidget } from './components/pet-energy-widget'
import { PetEnvironmentWidget } from './components/pet-environment-widget'
import { PetSizeWidget } from './components/pet-size-widget'
import { PetLocationMap } from './components/pet-location-map'

export function PetDetails() {
  return (
    <Container>
      <Content>
        <PetImageGallery
          collection={[
            {
              id: 1,
              image:
                'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=50',
              alt: 'dog',
            },
            {
              id: 2,
              image:
                'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=50',
              alt: 'dog',
            },
            {
              id: 3,
              image:
                'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=50',
              alt: 'dog',
            },
          ]}
        />

        <PetInfoWrapper>
          <h1>Alfredo</h1>
          <p>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>
          <PetAttributes>
            <PetEnergyWidget level={4} />
            <PetEnvironmentWidget enviroment="Ambiente amplo" />
            <PetSizeWidget size="small" />
          </PetAttributes>

          <PetLocationMap />

          <PetOrgContactWrapper>
            <Divider />
            <PetOrgAddress>
              <PetIcon />
              <div>
                <h2>Seu Cãopanheiro</h2>
                <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>
                <PetOrgWhatsappContactButton>
                  <PetOrgWhatsappContactButton.Icon>
                    <WhatsappIcon />
                  </PetOrgWhatsappContactButton.Icon>
                  <span>81 1234.4567</span>
                </PetOrgWhatsappContactButton>
              </div>
            </PetOrgAddress>
            <Divider />
          </PetOrgContactWrapper>

          <PetRequirementsForAdoption>
            <h2>Requesitos para adoção</h2>

            <PetRequirementsForAdoptionCardsWrapper>
              <PetRequirementsForAdoptionCard>
                <div>
                  <AlertIcon />
                  <strong>Local grande para o animal correr e brincar.</strong>
                </div>
              </PetRequirementsForAdoptionCard>
              <PetRequirementsForAdoptionCard>
                <div>
                  <AlertIcon />
                  <strong>Proibido apartamento</strong>
                </div>
              </PetRequirementsForAdoptionCard>
              <PetRequirementsForAdoptionCard>
                <div>
                  <AlertIcon />
                  <strong>Ambiente frio, pois possui muito pelo.</strong>
                </div>
              </PetRequirementsForAdoptionCard>
              <PetRequirementsForAdoptionCard>
                <div>
                  <AlertIcon />
                  <strong>Cão com intolerância a lactose.</strong>
                </div>
              </PetRequirementsForAdoptionCard>
            </PetRequirementsForAdoptionCardsWrapper>
            <Divider />
          </PetRequirementsForAdoption>

          <PetOrgContactButton>
            <PetOrgContactButton.Icon>
              <WhatsappOutlineIcon />
            </PetOrgContactButton.Icon>
            <span>Entrar em contato</span>
          </PetOrgContactButton>
        </PetInfoWrapper>
      </Content>
    </Container>
  )
}

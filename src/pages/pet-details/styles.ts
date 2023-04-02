import styled from 'styled-components'

import { Button } from 'shared/components/primitives'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.red[50]};
`

export const Content = styled.div`
  max-width: 704px;
  margin: 0 auto;
  width: 100%;
  background-color: ${({ theme }) => theme.gray[0]};
  border-radius: 20px;

  display: grid;
  grid-template-columns: 1fr min(60ch, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`

export const PetInfoWrapper = styled.div`
  margin-top: 52px;
  padding: 0 8px;

  color: ${({ theme }) => theme.blue[700]};

  & > h1 {
    font-size: 54px;
    font-weight: 800;
  }

  & > p {
    margin-top: 14px;

    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }
`

export const PetAttributes = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 42px;
  margin-bottom: 70px;
`

export const PetOrgContactWrapper = styled.div`
  margin-top: 40px;
`

export const PetOrgAddress = styled.div`
  display: flex;
  margin: 55px 0;

  & > div {
    margin-left: 18px;

    h2 {
      font-weight: 700;
      font-size: 30px;
    }

    p {
      font-weight: 600;
      font-size: 16px;
    }
  }
`

export const PetOrgWhatsappContactButton = styled(Button)`
  width: 217px;
  height: 54px;
  margin-top: 18px;
  border-radius: 10px;

  background: ${({ theme }) => theme.blue[700_10]};

  & > span {
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.blue[700]};
  }
`

export const PetRequirementsForAdoption = styled.div`
  margin-top: 55px;

  & > h2 {
    font-size: 30px;
    color: ${({ theme }) => theme.blue[700]};

    margin-bottom: 40px;
  }
`

export const PetRequirementsForAdoptionCardsWrapper = styled.div`
  margin-bottom: 50px;
`

export const PetRequirementsForAdoptionCard = styled.div`
  width: 100%;
  height: 54px;

  display: flex;
  align-items: center;

  margin: 10px 0;

  background: linear-gradient(
    129.72deg,
    rgba(247, 95, 96, 0.1) 16.45%,
    rgba(241, 81, 86, 0) 67.3%
  );
  border: 1px solid ${({ theme }) => theme.red[300]};
  border-radius: 10px;

  & > div {
    display: flex;
    align-items: center;

    margin-left: 40px;

    & > strong {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.red[300]};

      margin-left: 14px;
    }
  }
`

export const PetOrgContactButton = styled(Button)`
  width: 100%;
  height: 64px;
  background: #3cdc8c;

  outline: #3cdc8c;

  margin: 50px 0 70px 0;

  & > span {
    font-weight: 800;
    font-size: 18px;
    color: ${({ theme }) => theme.text.primary};
  }
`

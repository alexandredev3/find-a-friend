import styled from 'styled-components'
import { Form as FormRouter } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.secondary};
`

export const Content = styled.div`
  max-width: 1215px;
  width: 100%;
`

export const Header = styled.header`
  width: 100%;
  height: 56px;
  margin-bottom: 14px;
`

export const Display = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    max-width: 487px;
    width: 100%;
    font-family: Nunito;
    font-weight: 800;
    font-size: 72px;
    line-height: 90%;
    align-self: flex-end;
  }
`

export const Form = styled(FormRouter)`
  display: flex;
  justify-content: space-between;

  margin-top: 118px;

  & > h3 {
    font-size: 24px;
    max-width: 407px;
    width: 100%;
    font-weight: 600;
    line-height: 34px;
  }
`

export const SelectWrapper = styled.div`
  display: flex;

  .SelectViewport {
    height: 72px;
    border-radius: 20px;
  }

  .SearchButton {
    width: 72px;
    height: 72px;
    margin-left: 32px;
  }
`

export const StateSelectWrapper = styled.div`
  .SelectViewport {
    width: 72px;
    background-color: ${({ theme }) => theme.background.secondary};
    border: ${({ theme }) => `1px solid ${theme.text.primary}`};
  }

  .Select {
    display: flex;
    flex-direction: row;
    align-items: center;

    .SelectLabel {
      font-size: 16px;
      margin-right: 14px;
    }
  }

  margin-right: 12px;
`

export const CitySelectWrapper = styled.div`
  .SelectViewport {
    width: 280px;
    background-color: ${({ theme }) => theme.red[400]};

    display: flex;
    justify-content: center;

    .SelectInput {
      text-align: center;
    }
  }
`

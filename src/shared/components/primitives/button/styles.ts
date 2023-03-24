import styled from 'styled-components'
import { Slot } from '@radix-ui/react-slot'

export const Container = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f4d35e;
  border: none;
  border-radius: 20px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }

  &:disabled {
    filter: brightness(0.85);
    cursor: not-allowed;
  }
`

export const ButtonIconSlot = styled(Slot)`
  width: 22px;
`

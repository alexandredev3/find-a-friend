import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type { SlotProps } from '@radix-ui/react-slot'

import { Container, ButtonIconSlot } from './styles'

export function ButtonRoot({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <Container {...rest}>{children}</Container>
}

export function ButtonIcon({
  children,
  ...rest
}: PropsWithChildren<SlotProps>) {
  return (
    <ButtonIconSlot {...rest} aria-hidden>
      {children}
    </ButtonIconSlot>
  )
}

export const Button = Object.assign(ButtonRoot, {
  Icon: ButtonIcon,
})

import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type { SlotProps } from '@radix-ui/react-slot'
import { Slot } from '@radix-ui/react-slot'

import { Container } from './styles'

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
    <Slot {...rest} aria-hidden>
      {children}
    </Slot>
  )
}

export const Button = Object.assign(ButtonRoot, {
  Icon: ButtonIcon,
})

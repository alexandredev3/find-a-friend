import type {
  HTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  PropsWithChildren,
  SelectHTMLAttributes,
} from 'react'
import { CaretDown } from '@phosphor-icons/react'

import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

import { useTheme } from 'shared/hooks/useTheme'

function SelectRoot({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Filter {...rest}>{children}</Filter>
}

function SelectLabel({
  children,
  ...rest
}: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  return <FilterLabel {...rest}>{children}</FilterLabel>
}

function SelectViewport({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <FilterWrapper {...rest}>{children}</FilterWrapper>
}

function SelectInput({
  children,
  ...rest
}: PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>>) {
  return <FilterInput {...rest}>{children}</FilterInput>
}

function SelectOption({
  children,
  ...rest
}: PropsWithChildren<OptionHTMLAttributes<HTMLOptionElement>>) {
  return <FilterInputOption {...rest}>{children}</FilterInputOption>
}

function SelectIcon() {
  const { palette } = useTheme()

  return <CaretDown size={14} color={palette.text.primary} weight="bold" />
}

export const Select = Object.assign(SelectRoot, {
  Label: SelectLabel,
  Viewport: SelectViewport,
  Input: SelectInput,
  Option: SelectOption,
  Icon: SelectIcon,
})

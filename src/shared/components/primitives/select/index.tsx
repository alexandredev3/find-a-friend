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

// TODO: remove error when the user focus the input and its value is valid
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
  error,
  ...rest
}: PropsWithChildren<{ error?: string } & HTMLAttributes<HTMLDivElement>>) {
  return (
    <FilterWrapper {...rest} error={error}>
      {children}
    </FilterWrapper>
  )
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

function SelectError({
  error,
}: { error: string | undefined } & HTMLAttributes<HTMLSpanElement>) {
  console.log({
    error,
  })

  return error ? <span>{error}</span> : null
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
  Error: SelectError,
})

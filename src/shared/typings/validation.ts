type SuccessResult<TFields> = {
  data: TFields
  error?: undefined
}

type ErrorResult<TFields> = {
  data: undefined
  error?: {
    fieldErrors: Record<keyof TFields, TFields[keyof TFields]>
  }
}

export type ValidationResult<TFields> =
  | SuccessResult<TFields>
  | ErrorResult<TFields>

import { z } from 'zod'
import { withZod } from '@remix-validated-form/with-zod'

const locationSchema = z.object({
  state: z.string({
    required_error: 'Selecione o seu estado',
  }),
  city: z.string({
    required_error: 'Selecione a sua cidade',
  }),
})

export const locationValidator = withZod(locationSchema)

export type LocationFields = z.infer<typeof locationSchema>

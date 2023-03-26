import { z } from 'zod'
import { withZod } from '@remix-validated-form/with-zod'

const petSchema = z.object({
  city: z.string({
    required_error: 'Selecione a sua cidade',
  }),
  age: z.string({
    required_error: 'Selecione a idade',
  }),
  energy: z.string({
    required_error: 'Selecione o nível de energia',
  }),
  size: z.string({
    required_error: 'Selecione o porte do animal',
  }),
  independency: z.string({
    required_error: 'Selecione o nível de independência',
  }),
})

export const petValidator = withZod(petSchema)

export type PetFields = z.infer<typeof petSchema>

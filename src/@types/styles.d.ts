import 'styled-components'

import type { Theme } from 'shared/typings/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

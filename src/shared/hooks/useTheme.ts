import { useContext } from 'react'
import invariant from 'tiny-invariant'

import { ThemeContext } from '../contexts/ThemeProvider'

export function useTheme() {
  const context = useContext(ThemeContext)

  invariant(context, 'useTheme must be used within a ThemeProvider')

  return context
}

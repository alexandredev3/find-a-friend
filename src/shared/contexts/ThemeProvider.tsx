import { createContext, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import { modes } from '../styles/theme/modes'

import type { ThemeModes } from '../typings/theme'

interface ThemeContextValues {
  toggleThemeMode(): void
  currentThemeMode: ThemeModes
  palette: import('styled-components').DefaultTheme
}

export const ThemeContext = createContext<ThemeContextValues>({
  currentThemeMode: 'light',
  toggleThemeMode() {},
  palette: modes.light,
})

export function ThemeProvider({ children }: PropsWithChildren) {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeModes>('light')

  function toggleThemeMode() {
    setCurrentThemeMode((previousThemeMode) =>
      previousThemeMode === 'light' ? 'dark' : 'light',
    )
  }

  const theme = currentThemeMode === 'light' ? modes.light : modes.dark

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeContext.Provider
        value={{ currentThemeMode, toggleThemeMode, palette: theme }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

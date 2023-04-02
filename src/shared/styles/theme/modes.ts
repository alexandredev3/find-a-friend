import { palette } from './palette'

export const modes = {
  light: {
    text: { primary: palette.gray['0'] },
    red: palette.red,
    gray: palette.gray,
    blue: palette.blue,
    yellow: palette.yellow,
    background: {
      primary: palette.primary.main,
      secondary: palette.secondary.main,
    },
  },
  dark: {
    text: { primary: palette.gray['0'] },
    red: palette.red,
    gray: palette.gray,
    blue: palette.blue,
    yellow: palette.yellow,
    background: {
      primary: palette.primary.main,
      secondary: palette.secondary.main,
    },
  },
}

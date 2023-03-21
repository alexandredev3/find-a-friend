import { palette } from './palette'

export const modes = {
  light: {
    text: { primary: palette.gray['0'] },
    red: palette.red,
    background: {
      primary: palette.error['50'],
      secondary: palette.primary.main,
    },
  },
  dark: {
    text: { primary: palette.gray['0'] },
    red: palette.red,
    background: {
      primary: palette.error['50'],
      secondary: palette.primary.main,
    },
  },
}

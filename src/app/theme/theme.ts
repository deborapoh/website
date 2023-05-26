'use client'

import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const lightTheme = createTheme({
  typography: {
    fontFamily: "HannotateSC, sans-serif",
  },
  palette: {
    mode: 'light',
    background: {
      default: '#000000',
    },
    primary: {
      main: '#681EC7',
    },
    secondary: {
      main: '#B686FF',
    },
    common: {
      white: '#FFFFFF',
      black: '#4E4E4E',
    },
  },
})

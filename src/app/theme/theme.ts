'use client'

import { createTheme } from '@mui/material/styles'

const colors = {
  secondaryMain: '#B686FF',
  white: '#FFFFFF',
}

export const mobileTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1'
          },
          style: {
            fontSize: 35,
            color: colors.secondaryMain,
          },
        },
        {
          props: {
            variant: 'h2'
          },
          style: {
            fontSize: 35,
            color: colors.white,
          },
        },
        {
          props: {
            variant: 'h3'
          },
          style: {
            fontSize: 24,
            color: colors.secondaryMain,
          },
        },
      ],
    },
  },
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
      main: colors.secondaryMain,
    },
    common: {
      white: colors.white,
      black: '#4E4E4E',
    },
    grey: {
      50: '#9e9e9e',
    }
  },
})

export const desktopTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1'
          },
          style: {
            fontSize: 60,
            color: colors.secondaryMain,
          },
        },
        {
          props: {
            variant: 'h2'
          },
          style: {
            fontSize: 60,
            color: colors.white,
          },
        },
        {
          props: {
            variant: 'h3'
          },
          style: {
            fontSize: 45,
            color: colors.secondaryMain,
          },
        },
      ],
    },
  },
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
      main: colors.secondaryMain,
    },
    common: {
      white: colors.white,
      black: '#4E4E4E',
    },
    grey: {
      50: '#9e9e9e',
    }
  },
})

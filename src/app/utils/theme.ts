import { Theme } from "@mui/material"
import { desktopTheme, mobileTheme } from "../theme/theme"

export const usePreferredTheme = (): Theme => {
  window.addEventListener('resize', () => {
    console.log('window.innerWidth', window.innerWidth)
    if (typeof window !== "undefined" && window.innerWidth >= 1536) {
      return desktopTheme
    }

    return mobileTheme
  })

  return window.innerWidth >= 1536 ? desktopTheme : mobileTheme
}

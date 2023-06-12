import { Theme } from "@mui/material"
import { desktopTheme, mobileTheme } from "../theme/theme"

export const usePreferredTheme = (): Theme => {
  if (typeof window !== "undefined") {
    window.addEventListener('resize', () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1536) {
        return desktopTheme
      }

      return mobileTheme
    })

    return window.innerWidth >= 1536 ? desktopTheme : mobileTheme
  }

  return desktopTheme
}

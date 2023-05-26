import { Button, styled } from "@mui/material"
import classNames from "classnames"
import { usePathname, useRouter } from "next/navigation"
import { ReactNode } from "react"

const PageButton = styled(Button)(({ theme }) => ({
  border: `3px solid ${theme.palette.common.white}`,
  borderRadius: 25,
  color: theme.palette.common.white,
  textTransform: 'none',
  height: 40,
  width: 140,
  fontSize: 16,
  lineHeight: 0,

  '&.selected': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.background.default,
  },
}))

const PageRouteButton = ({ children, pathname }: { children: ReactNode; pathname: string }) => {
  const currentPathname = usePathname()
  const router = useRouter()

  const goToPage = (page: string) => {
    router.push(page)
  }

  return (
    <PageButton
      className={classNames({ selected: !!(currentPathname === pathname) })}
      onClick={() => goToPage(pathname)}>
        {children}
    </PageButton>
  )
}

export default PageRouteButton

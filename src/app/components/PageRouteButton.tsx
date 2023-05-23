import { Button, styled } from "@mui/material"
import classNames from "classnames"
import { usePathname, useRouter } from "next/navigation"
import { ReactNode } from "react"

const PageButton = styled(Button)(({ theme }) => ({
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: 25,
  textTransform: 'none',
  height: 48,
  width: 160,
  fontSize: 22,
  lineHeight: 0,

  '&.selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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

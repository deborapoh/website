'use client'

import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline, Box, styled, Link } from '@mui/material'
import { RecoilRoot } from 'recoil'

import './globals.css'
import { lightTheme } from './theme/theme'
import Image from 'next/image'

import githubLogo from './images/github.svg'
import linkedinLogo from './images/linkedin.svg'
import languageGlobe from './images/language-globe.svg'
import PageRouteButton from './components/PageRouteButton'
import LanguageMenu from './components/LanguageMenu'
import MenuMobile from './components/MenuMobile'
import { header } from './constants'

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  width: '100%',
  maxWidth: 1340,
}))

const Header = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: header.height,
  width: '100%',
}))

const SocialMediaContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 110,
}))

const PagesContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 820, // 970 change when adding language
}))

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <body>
            <Container>
              <Header
                className='!px-[34px] 2xl:!px-[70px]' // same as about page Container
              >
                <MenuMobile className="xl:!hidden" />
                <SocialMediaContainer>
                  <Link href="https://github.com/deborapoh" target="_blank" sx={{ textDecoration: 'none' }}>
                    <Image
                      src={githubLogo}
                      alt="Github image link"
                      width={1000}
                      height={1000}
                      sizes="100vw"
                      style={{
                        height: 40,
                        width: 40,
                      }}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/deborapoh" target="_blank" sx={{ textDecoration: 'none' }}>
                    <Image
                      src={linkedinLogo}
                      alt="Linkedin image link"
                      width={1000}
                      height={1000}
                      sizes="100vw"
                      style={{
                        height: 40,
                        width: 40,
                      }}
                    />
                  </Link>
                </SocialMediaContainer>
                <PagesContainer className="!hidden xl:!flex">
                  <PageRouteButton pathname='/'>Home</PageRouteButton>
                  <PageRouteButton pathname='/about'>About</PageRouteButton>
                  <PageRouteButton pathname='/resume'>Resume</PageRouteButton>
                  <PageRouteButton pathname='/projects'>Projects</PageRouteButton>
                  <PageRouteButton pathname='/contact'>Contact</PageRouteButton>
                  {/* <LanguageMenu>
                    <Image
                      src={languageGlobe}
                      alt="Language globe image link"
                      width={1000}
                      height={1000}
                      sizes="100vw"
                      style={{
                        height: 40,
                        width: 40,
                      }}
                    />
                  </LanguageMenu> */}
                </PagesContainer>
              </Header>
              {children}
            </Container>
          </body>
        </ThemeProvider>
      </RecoilRoot>
    </html>
  )
}

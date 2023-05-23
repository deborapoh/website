'use client'

import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline, Box, styled, Button } from '@mui/material'
import { RecoilRoot } from 'recoil'

import './globals.css'
import { lightTheme } from './theme/theme'
import Image from 'next/image'

import githubLogo from './images/github.svg'
import linkedinLogo from './images/linkedin.svg'
import languageGlobe from './images/language-globe.svg'
import { useRouter, usePathname } from 'next/navigation'
import classNames from 'classnames'
import PageRouteButton from './components/PageRouteButton'

const Container = styled(Box)(() => ({
  width: '100%',
}))

const Header = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // border: '1px solid black',
  paddingInline: 92,
  height: 144,
  width: '100%',
}))

const SocialMediaContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 125,
}))

const PagesContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 970,
}))

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Debora de Oliveira</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <body>
            <Container>
              <Header>
                <SocialMediaContainer>
                  <Image
                    className=""
                    src={githubLogo}
                    alt="Github image link"
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <Image
                    className=""
                    src={linkedinLogo}
                    alt="Linkedin image link"
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </SocialMediaContainer>
                <PagesContainer>
                  <PageRouteButton pathname='/'>Home</PageRouteButton>
                  <PageRouteButton pathname='/about'>About</PageRouteButton>
                  <PageRouteButton pathname='/resume'>Resume</PageRouteButton>
                  <PageRouteButton pathname='/projects'>Projects</PageRouteButton>
                  <PageRouteButton pathname='/contact'>Contact</PageRouteButton>
                  <Image
                    className=""
                    src={languageGlobe}
                    alt="Language globe image link"
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
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

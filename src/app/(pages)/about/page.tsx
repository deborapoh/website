'use client'

import { header, itemsZIndex } from "@/app/constants"
import { Box, ThemeProvider, Typography, styled } from "@mui/material"
import Image from "next/image"

import backgroundMobilePhoto from '../../images/background-mobile-about-photo.png'
import { usePreferredTheme } from "@/app/utils/theme"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: `calc(100vh - ${header.height}px)`,
  paddingRight: 34,
  position: 'relative',

  // scroll configuration
  overflowY: 'scroll',
  msOverflowStyle: 'none', // for IE and Edge
  scrollbarWidth: 'none', // for Firefox

  '::-webkit-scrollbar': { // for Chrome, Safari and Opera
    display: 'none'
  }
}))

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  marginBlock: 72,
}))

export default function About() {
  const theme = usePreferredTheme()
  console.log('theme: ' + JSON.stringify(theme))

  return (
    <ThemeProvider theme={theme}>
      <title>About me | Debora</title>
      <meta
        name="description"
        content="In this section you can get to know more about me"
      />
      <Container
        // px same as main layout header
        className={`
          !px-[34px] 2xl:!px-[70px]
          !items-center 2xl:!items-end
          pt-[60px] 2xl:!pt-[28px]
        `}
      >
        <Typography variant="h1" className="!mb-[42px]">About me</Typography>
        <Typography variant="h2">Debora de Oliveira</Typography>
        <Typography variant="h3">{'< fullstack developer >'}</Typography>

        {/* Mobile image */}
        <Image
          className="2xl:!hidden"
          src={backgroundMobilePhoto}
          alt="About me background mobile photo"
          style={{
            height: 'auto',
            width: 360,
            maxWidth: '90%',
            zIndex: itemsZIndex.backgroundAboutPhoto,
            marginTop: 72,
          }}
        />

        <Body
          className={`
            !text-[20px] 2xl:!text-[28px]
            !text-center 2xl:!text-end
            !w-10/12 2xl:!w-7/12
          `}
        >
          Working as a Full stack developer for the past 6 years. I started my career as
          a Graphic Designer and after studying Math and Algorithms I fell in love with
          Software Development. I have experience with JavaScript, TypeScript, React,
          Node and Python. Currently studying Golang.
        </Body>
      </Container>
    </ThemeProvider>
  )
}

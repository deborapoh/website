'use client'

import { header, itemsZIndex } from "@/app/constants"
import { Box, Typography, styled } from "@mui/material"
import Image from "next/image"

import backgroundDesktopPhoto from '../../images/background-about-photo.png'
import backgroundMobilePhoto from '../../images/background-mobile-about-photo.png'

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

const WhiteText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}))

const PurpleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  marginTop: 72,
}))

export default function About() {
  return (
    <>
      <Container
        // px same as main layout header
        className={`
          !px-[34px] 2xl:!px-[70px]
          !items-center 2xl:!items-end
          pt-[60px] 2xl:!pt-[28px]
        `}
      >
        <PurpleText
          className={`
            2xl:!hidden
            !text-[35px]
            !mb-[42px]
          `}
        >About</PurpleText>
        <WhiteText
          className={`
            !text-[30px] 2xl:!text-[60px]
          `}
        >Debora de Oliveira</WhiteText>
        <PurpleText
          className={`
            !text-[24px] 2xl:!text-[45px]
          `}
        >{'< fullstack developer >'}</PurpleText>

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

        {/* Mobile image */}
        <Image
          className="2xl:!hidden"
          src={backgroundMobilePhoto}
          alt="description"
          style={{
            height: 'auto',
            width: 360,
            maxWidth: '95%',
            // zIndex: itemsZIndex.backgroundAboutPhoto,
            marginTop: 72,
          }}
        />
      </Container>

      {/* Desktop image */}
      <Image
        className="!hidden 2xl:!flex"
        src={backgroundDesktopPhoto}
        alt="description"
        style={{
          position: 'absolute',
          height: 'auto',
          width: 720,
          bottom: 0,
          left: 0,
          zIndex: itemsZIndex.backgroundAboutPhoto,
        }}
      />
    </>
  )
}

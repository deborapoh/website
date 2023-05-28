'use client'

import { Box, Link, styled } from "@mui/material"
import Image from "next/image"

import backgroundDesktop from './images/home-desktop-background.png'
import backgroundMobile from './images/home-mobile-background.png'
import backgroundTablet from './images/home-tablet-background.png'
import decoderLogo from './images/decoder-logo.svg'

const Container = styled(Box)(() => ({
  display: 'flex',
  height: 'calc(100vh - 100px)',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-end',
}))

export default function Home() {
  return (
    <main>
      <Container>
        <Image
          className="sm:!hidden"
          src={backgroundMobile}
          alt="Background image for Mobile"
          width={1000}
          height={1000}
          style={{
            position: 'absolute',
            height: 'auto',
            width: '100%',
            maxWidth: 1280,
          }}
        />
        <Image
          className="!hidden sm:!flex 2xl:!hidden"
          src={backgroundTablet}
          alt="Background image for Mobile"
          width={1000}
          height={1000}
          style={{
            position: 'absolute',
            height: 'auto',
            width: '100%',
            maxWidth: 1280,
          }}
        />
        <Image
          className="hidden 2xl:!flex"
          src={backgroundDesktop}
          alt="Background image for Desktop"
          width={1000}
          height={1000}
          style={{
            position: 'absolute',
            height: 'auto',
            width: '100%',
            maxWidth: 1340,
          }}
        />
        {/* Desktop Logo */}
        <Box
          className="hidden xl:flex"
          sx={{
            position: 'absolute',
            height: 200,
            width: 700,
            right: 0,
            top: 0,
            backgroundColor: '#000',
          }}
        />
        <Image
          className="!hidden xl:!flex"
          src={decoderLogo}
          alt="Decoder Logo"
          width={580}
          height={1000}
          style={{
            position: 'absolute',
            height: 'auto',
            width: 438,
            right: 70,
            top: 70,
          }}
        />
        {/* Mobile Logo */}
        <Box
          className="xl:!hidden"
          sx={{
            position: 'absolute',
            height: 120,
            width: '100%',
            top: 0,
            backgroundColor: '#000',
          }}
        />
        <Image
          className="xl:!hidden"
          src={decoderLogo}
          alt="Decoder Logo"
          width={1000}
          height={1000}
          style={{
            position: 'absolute',
            height: 'auto',
            width: 250,
            maxWidth: '100%',
            top: 40,
          }}
        />
        <Link
          sx={{
            position: 'absolute',
            color: '#fff',
            textDecoration: 'none',
            right: 15,
            bottom: 15,
          }}
          target="_blank"
          href="https://www.rawpixel.com/image/3119802"
        >
          Image by rawpixel.com
        </Link>
      </Container>
    </main>
  )
}

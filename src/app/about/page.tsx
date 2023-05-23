'use client'

import { Box, Typography, styled } from "@mui/material"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: 'calc(100vh - 144px)',
  paddingInline: 92,
  paddingBottom: 88,
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.common.black,
  marginBottom: 56,
}))

const Body = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.common.black,
  width: 765,
  textAlign: 'end',
}))

export default function About() {
  return (
    <main>
      <Container>
        <Title>Fullstack Developer</Title>
        <Body>
          Working as a Full stack developer for the past 6 years. I started my career as
          a Graphic Designer and after studying Math and Algorithms I fell in love with
          Software Development. I have experience with JavaScript, TypeScript, React,
          Node and Python. Currently studying Golang.
        </Body>
      </Container>
    </main>
  )
}

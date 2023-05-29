'use client'

import { header } from "@/app/constants"
import { Box, Typography, styled } from "@mui/material"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: `calc(100vh - ${header.height}px)`,
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

export default function Contact() {
  return (
      <Container>
        <Title>Personal Info</Title>
        <Body>
        Email: <br />
        deborapoh@gmail.com <br /><br />
        WhatsApp: <br />
        (47) 99142-7504
        </Body>
      </Container>
  )
}

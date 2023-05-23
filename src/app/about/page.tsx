'use client'

import { Box, Typography, styled } from "@mui/material"

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 60,
  color: theme.palette.common.black,
}))

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 45,
  color: theme.palette.secondary.main,
}))

export default function About() {
  return (
    <main>
      <Box px={11.5} pt={6}>
        <Title>Debora de Oliveira</Title>
        <SubTitle>{'< developer >'}</SubTitle>
      </Box>
    </main>
  )
}

'use client'

import { header } from "@/app/constants"
import { Box, Typography, styled } from "@mui/material"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: `calc(100vh - ${header.height}px)`,
  paddingRight: 34,
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.common.black,
  marginBottom: 56,
}))

const WhiteText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}))

const PurpleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
}))

export default function Contact() {
  return (
    <>
      <title>Contact Information | Debora</title>
      <meta
        name="description"
        content="Needing any software development here you will find my Contact information"
      />
      <Container
        className={`
          !px-[34px] 2xl:!px-[70px]
          !items-center 2xl:!items-end
          !pt-[60px] 2xl:!pt-[28px]
        `}
      >
        <WhiteText
          className={`
            !text-[30px] 2xl:!text-[60px]
          `}
        >Contact Information</WhiteText>
        <PurpleText
          className={`
            !text-[20px] 2xl:!text-[28px]
            !text-center 2xl:!text-end
            !w-10/12 2xl:!w-7/12
            !mt-[72px]
          `}
        >Email:</PurpleText>
        <Body
          className={`
            !text-[20px] 2xl:!text-[28px]
            !text-center 2xl:!text-end
            !w-10/12 2xl:!w-7/12
            !mt-[24px]
          `}
        >deborapoh@gmail.com</Body>

        <PurpleText
          className={`
            !text-[20px] 2xl:!text-[28px]
            !text-center 2xl:!text-end
            !w-10/12 2xl:!w-7/12
            !mt-[54px]
          `}
        >WhatsApp:</PurpleText>
        <Body
          className={`
            !text-[20px] 2xl:!text-[28px]
            !text-center 2xl:!text-end
            !w-10/12 2xl:!w-7/12
            !mt-[24px]
          `}
        >(47) 99142-7504</Body>
      </Container>
    </>
  )
}

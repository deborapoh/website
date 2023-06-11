'use client'

import { Box, Divider as DividerMui, Link, Typography, styled } from "@mui/material"

import jobs from '../../jobs.json'
import { header } from "@/app/constants"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${header.height}px)`,
  // scroll configuration
  overflowY: 'scroll',
  msOverflowStyle: 'none', // for IE and Edge
  scrollbarWidth: 'none', // for Firefox

  '::-webkit-scrollbar': { // for Chrome, Safari and Opera
    display: 'none'
  }
}))

const JobContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  marginBottom: 112,
}))

const Divider = styled(DividerMui)(({ theme }) => ({
  borderColor: theme.palette.grey[50],
}))

const Anchor = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.main,
  fontWeight: 'bold',
}))

const WhiteText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}))

const PurpleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  zIndex: 1,
}))

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  marginTop: 32,
  zIndex: 1,
}))

export default function Resume() {
  return (
    <Container
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
      >Resume</PurpleText>
      {[...jobs]?.map((job) => {
        return (
          <JobContainer key={job.company.name} className="!items-center 2xl:!items-end">
            <WhiteText
              className={`
                !text-center 2xl:!text-end
                !text-[30px] 2xl:!text-[60px]
              `}
            >{job.title}</WhiteText>
            <PurpleText
              className={`
                !text-[24px] 2xl:!text-[45px]
                !text-center 2xl:!text-end
              `}
            >{job.period}</PurpleText>
            <Body
              className={`
                !text-[20px] 2xl:!text-[28px]
                !text-center 2xl:!text-end
                !w-10/12 2xl:!w-11/12
              `}
            >
              <PurpleText className="!text-[20px] 2xl:!text-[28px]">
                {`${job.company.name} | `}
                <Anchor href={job.company.website}>{job.company.website}</Anchor>
              </PurpleText >
              <b>{job.location}</b> <br />
              {job.description.map((description) => (
                <>
                  {description}
                  <br />
                </>
              ))}
              <br />
              <PurpleText className="!text-[20px] 2xl:!text-[28px]">Softwares/Tools:</PurpleText>
              {job.tools}
            </Body>
          </JobContainer>
        )
      })}
    </Container>
  )
}

'use client'

import { Box, Divider as DividerMui, Link, ThemeProvider, Typography, styled } from "@mui/material"

import jobs from '../../jobs.json'
import { header } from "@/app/constants"
import { usePreferredTheme } from "@/app/utils/theme"

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

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  marginTop: 32,
  zIndex: 1,
}))

export default function Resume() {
  const theme = usePreferredTheme()

  return (
    <ThemeProvider theme={theme}>
      <title>Work Experience | Debora</title>
      <meta
        name="description"
        content="In this section you will see all the companies I have ever worked with in the field of technology"
      />
      <Container
        className={`
          !px-[34px] 2xl:!px-[70px]
          !items-center 2xl:!items-end
          pt-[60px] 2xl:!pt-[28px]
        `}
      >
        <Typography className="!mb-[42px]" variant="h1">Resume</Typography>
        {/* <Typography variant="h2">Debora de Oliveira</Typography>
        <Typography variant="h3">{'< fullstack developer >'}</Typography> */}
        {[...jobs]?.map((job) => {
          return (
            <JobContainer key={job.company.name} className="!items-center 2xl:!items-end">
              <Typography className="!text-center 2xl:!text-end !mb-[16px]" variant="h2">{job.title}</Typography>
              <Typography className="!text-center 2xl:!text-end !mb-[24px]" variant="h3">{job.period}</Typography>
              <Typography
                className="!text-center 2xl:!text-end"
                variant="h4"
              >
                  {`${job.company.name} | `}
                  <Anchor href={job.company.website}>{job.company.website}</Anchor>
              </Typography>

              <Body
                className={`
                  !text-[20px] 2xl:!text-[28px]
                  !text-center 2xl:!text-end
                  !w-10/12 2xl:!w-11/12
                `}
              >
                {job.location} <br />
                {job.description.map((description) => (
                  <>
                    {description}
                    <br />
                  </>
                ))}
              </Body>
              <br />
              <Typography
                className="!text-center 2xl:!text-end"
                variant="h4"
              >
                Softwares/Tools:
              </Typography>
              <Body
                className={`
                  !text-[20px] 2xl:!text-[28px]
                  !text-center 2xl:!text-end
                  !w-10/12 2xl:!w-11/12
                `}
              >
                {job.tools}
              </Body>
            </JobContainer>
          )
        })}
      </Container>
    </ThemeProvider>
  )
}

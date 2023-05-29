'use client'

import { Box, Divider, Link, Typography, styled } from "@mui/material"

import jobs from '../../jobs.json'
import { header } from "@/app/constants"

const Container = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${header.height}px)`,
  paddingInline: 92,
  paddingBlock: 88,
  overflowY: 'scroll',
}))

const JobContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginBlock: 92,
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.common.black,
}))

const BlackBody = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.common.black,
  width: 1160,
  textAlign: 'end',
}))

const PurpleBody = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  color: theme.palette.primary.main,
}))

const Anchor = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}))

export default function Resume() {
  return (
      <Container>
        {jobs?.map((job) => {
          const jobName = `${job.company.name} | ${job.company.location}`;

          return (
            <>
              <JobContainer>
                <Title>{job.title}</Title>
                <BlackBody>
                  {job.period} <br />
                  <br />
                  <PurpleBody><Anchor href={job.company.website}>{jobName}</Anchor></PurpleBody>
                  <b>{job.location}</b> <br />
                  {job.description.map((description) => (
                    <>
                      {description}
                      <br />
                    </>
                  ))}
                  <br />
                  <PurpleBody>Softwares/Tools:</PurpleBody>
                  {job.tools}
                </BlackBody>
              </JobContainer>
              {job.last === 'false' && <Divider />}
            </>
          )
        })}
      </Container>
  )
}

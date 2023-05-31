'use client'

import { Box, Link, Typography, styled } from "@mui/material"
import ProjectCard from "../../components/ProjectCard"

import projects from '../../projects.json'
import { header, itemsZIndex } from "@/app/constants"

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: `calc(100vh - ${header.height}px)`,
  paddingInline: 92,
  paddingBlock: 88,

  // scroll configuration
  overflowY: 'scroll',
  msOverflowStyle: 'none', // for IE and Edge
  scrollbarWidth: 'none', // for Firefox

  '::-webkit-scrollbar': { // for Chrome, Safari and Opera
    display: 'none'
  }
}))

const PurpleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

export default function Projects() {
  return (
      <Container
        className={`
          !flex-col 2xl:!flex-row
          !items-center 2xl:!items-start
        `}
      >
        <PurpleText
          className={`
            2xl:!hidden
            !text-[35px]
            !mb-[42px]
          `}
        >Projects</PurpleText>
        {projects.map((project) => (
          <Box
            zIndex={itemsZIndex.projectList}
            key={project.src}
            mb={3}
            className="2xl:!mr-[24px]"
          >
            <Link sx={{ textDecoration: 'none' }} target="_blank" href={project.website}>
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
              />
            </Link>
          </Box>
        ))}
      </Container>
  )
}

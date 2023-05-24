'use client'

import { Box, Link, Typography, styled } from "@mui/material"
import ProjectCard from "../components/ProjectCard"

import projects from '../projects.json'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: 'calc(100vh - 144px)',
  paddingInline: 92,
  paddingBlock: 88,
  overflowY: 'scroll',
}))

export default function Projects() {
  return (
    <main>
      <Container>
        {projects.map((project) => (
          <Box mr={3}>
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
    </main>
  )
}
